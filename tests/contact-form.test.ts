import { describe, expect, it, vi } from "vitest";
import {
  escapeHtml,
  handleContactRequest,
  MAX_BODY_BYTES,
  validateContactForm,
  type ContactEnv
} from "@/lib/contact-form";

const TEST_ORIGIN = "https://staging.impactpockets.com";

const validFields = () => {
  const form = new FormData();
  form.set("name", "Lane Campbell");
  form.set("email", "lane@example.com");
  form.set("subject", "Fund incubation conversation");
  form.set("message", "I would like to discuss a new fund opportunity with your team.");
  form.set("website", "");
  form.set("cf-turnstile-response", "valid-test-token");
  return form;
};

const requestFrom = (form: FormData, headers: Record<string, string> = {}) =>
  new Request(`${TEST_ORIGIN}/api/contact/`, {
    method: "POST",
    headers: { Origin: TEST_ORIGIN, ...headers },
    body: form
  });

const createEnv = () => {
  const send = vi.fn().mockResolvedValue({ messageId: "test-message" });
  const env: ContactEnv = {
    TURNSTILE_SECRET: "test-secret",
    CONTACT_ALLOWED_ORIGINS: TEST_ORIGIN,
    CONTACT_ALLOWED_HOSTNAMES: "staging.impactpockets.com",
    CONTACT_FROM: "hello@impactpockets.com",
    CONTACT_TO: "lane@impactpockets.com",
    EMAIL: { send }
  };
  return { env, send };
};

const validTurnstileFetch = vi.fn().mockResolvedValue(
  Response.json({ success: true, hostname: "staging.impactpockets.com", action: "contact" })
);

describe("contact validation", () => {
  it("normalizes valid fields", () => {
    const form = validFields();
    form.set("name", "  Lane   Campbell  ");
    form.set("email", " LANE@EXAMPLE.COM ");
    const result = validateContactForm(form);
    expect(result).toEqual(
      expect.objectContaining({ ok: true, value: expect.objectContaining({ name: "Lane Campbell", email: "lane@example.com" }) })
    );
  });

  it("rejects unknown and duplicate fields", () => {
    const unknown = validFields();
    unknown.set("recipient", "attacker@example.com");
    expect(validateContactForm(unknown).ok).toBe(false);

    const duplicate = validFields();
    duplicate.append("email", "second@example.com");
    expect(validateContactForm(duplicate).ok).toBe(false);
  });

  it("escapes all HTML metacharacters", () => {
    expect(escapeHtml(`<script data-x="'">&`)).toBe("&lt;script data-x=&quot;&#39;&quot;&gt;&amp;");
  });
});

describe("contact endpoint", () => {
  it("rejects wrong origins before validation", async () => {
    const { env, send } = createEnv();
    const request = requestFrom(validFields(), { Origin: "https://attacker.example" });
    const response = await handleContactRequest(request, env, { fetch: validTurnstileFetch });
    expect(response.status).toBe(403);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects oversized requests", async () => {
    const { env } = createEnv();
    const request = requestFrom(validFields(), { "Content-Length": String(MAX_BODY_BYTES + 1) });
    const response = await handleContactRequest(request, env, { fetch: validTurnstileFetch });
    expect(response.status).toBe(413);
  });

  it("treats the honeypot as a no-op success", async () => {
    const { env, send } = createEnv();
    const form = validFields();
    form.set("website", "https://spam.example");
    form.set("cf-turnstile-response", "");
    const response = await handleContactRequest(requestFrom(form), env, { fetch: validTurnstileFetch });
    expect(response.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });

  it.each([
    ["missing", { success: false, "error-codes": ["missing-input-response"] }],
    ["expired", { success: false, "error-codes": ["timeout-or-duplicate"] }],
    ["duplicate", { success: false, "error-codes": ["timeout-or-duplicate"] }]
  ])("rejects %s Turnstile tokens", async (_label, result) => {
    const { env, send } = createEnv();
    const turnstileFetch = vi.fn().mockResolvedValue(Response.json(result));
    const response = await handleContactRequest(requestFrom(validFields()), env, { fetch: turnstileFetch });
    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects a successful token issued for another hostname", async () => {
    const { env, send } = createEnv();
    const turnstileFetch = vi.fn().mockResolvedValue(
      Response.json({ success: true, hostname: "attacker.example", action: "contact" })
    );
    const response = await handleContactRequest(requestFrom(validFields()), env, { fetch: turnstileFetch });
    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("sends only to the fixed binding destination with escaped HTML", async () => {
    const { env, send } = createEnv();
    const form = validFields();
    form.set("name", "Lane <Admin>");
    form.set("message", "This message contains <script>alert('x')</script> safely.");
    const response = await handleContactRequest(requestFrom(form), env, { fetch: validTurnstileFetch });
    expect(response.status).toBe(200);
    expect(send).toHaveBeenCalledOnce();
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "lane@impactpockets.com",
        from: { name: "Impact Pockets Website", email: "hello@impactpockets.com" },
        replyTo: { name: "Lane <Admin>", email: "lane@example.com" },
        html: expect.stringContaining("Lane &lt;Admin&gt;")
      })
    );
    expect(send.mock.calls[0][0].html).not.toContain("<script>");
  });
});
