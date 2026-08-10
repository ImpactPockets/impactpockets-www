export const CONTACT_PATH = "/api/contact/";
export const MAX_BODY_BYTES = 16_384;

const FIELD_NAMES = new Set([
  "name",
  "email",
  "subject",
  "message",
  "website",
  "cf-turnstile-response"
]);

export interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
  turnstileToken: string;
}

export interface ContactEnv {
  TURNSTILE_SECRET: string;
  CONTACT_ALLOWED_ORIGINS: string;
  CONTACT_ALLOWED_HOSTNAMES: string;
  CONTACT_FROM: string;
  CONTACT_TO: string;
  EMAIL: Pick<SendEmail, "send">;
}

interface TurnstileResult {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
}

interface HandlerDependencies {
  fetch: typeof fetch;
}

const json = (body: object, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8"
    }
  });

const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const normalizeLine = (value: string) => value.trim().replace(/\s+/g, " ");

const requiredString = (form: FormData, name: string) => {
  const values = form.getAll(name);
  if (values.length !== 1 || typeof values[0] !== "string") return null;
  return values[0];
};

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

export function validateContactForm(form: FormData):
  | { ok: true; value: ContactFields }
  | { ok: false; message: string } {
  for (const key of form.keys()) {
    if (!FIELD_NAMES.has(key)) return { ok: false, message: "The form contains an unsupported field." };
  }

  const nameValue = requiredString(form, "name");
  const emailValue = requiredString(form, "email");
  const subjectValue = requiredString(form, "subject");
  const messageValue = requiredString(form, "message");
  const websiteValue = requiredString(form, "website");
  const tokenValue = requiredString(form, "cf-turnstile-response");

  if ([nameValue, emailValue, subjectValue, messageValue, websiteValue, tokenValue].some((value) => value === null)) {
    return { ok: false, message: "Complete every required field and try again." };
  }

  const name = normalizeLine(nameValue!);
  const email = normalizeLine(emailValue!).toLowerCase();
  const subject = normalizeLine(subjectValue!);
  const message = messageValue!.trim();
  const website = websiteValue!.trim();
  const turnstileToken = tokenValue!.trim();

  if (name.length < 2 || name.length > 100) return { ok: false, message: "Enter a valid name." };
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Enter a valid email address." };
  }
  if (subject.length < 3 || subject.length > 160) return { ok: false, message: "Enter a valid subject." };
  if (message.length < 20 || message.length > 5_000) {
    return { ok: false, message: "Enter a message between 20 and 5,000 characters." };
  }
  if (website.length > 200) return { ok: false, message: "The form could not be submitted." };
  if (!website && (turnstileToken.length < 1 || turnstileToken.length > 2_048)) {
    return { ok: false, message: "Complete the security check and try again." };
  }

  return { ok: true, value: { name, email, subject, message, website, turnstileToken } };
}

async function verifyTurnstile(
  token: string,
  secret: string,
  remoteIp: string | null,
  allowedHostnames: string[],
  fetchImplementation: typeof fetch
) {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetchImplementation("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: controller.signal
    });
    if (!response.ok) return false;

    const result = (await response.json()) as TurnstileResult;
    if (!result.success) return false;
    if (result.hostname && !allowedHostnames.includes(result.hostname)) return false;
    if (result.action && result.action !== "contact") return false;
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export async function handleContactRequest(
  request: Request,
  env: ContactEnv,
  dependencies: HandlerDependencies = { fetch }
) {
  if (request.method !== "POST" || new URL(request.url).pathname !== CONTACT_PATH) {
    return json({ ok: false, message: "Not found." }, 404);
  }

  const allowedOrigins = splitList(env.CONTACT_ALLOWED_ORIGINS);
  const origin = request.headers.get("Origin");
  if (!origin || !allowedOrigins.includes(origin)) {
    return json({ ok: false, message: "The form could not be submitted." }, 403);
  }

  const contentLength = Number(request.headers.get("Content-Length") || "0");
  if (!Number.isFinite(contentLength) || contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, message: "The form is too large." }, 413);
  }

  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.startsWith("application/x-www-form-urlencoded") && !contentType.startsWith("multipart/form-data")) {
    return json({ ok: false, message: "The form could not be submitted." }, 415);
  }

  let form: FormData;
  try {
    const body = await request.arrayBuffer();
    if (body.byteLength > MAX_BODY_BYTES) return json({ ok: false, message: "The form is too large." }, 413);
    form = await new Request(request.url, { method: "POST", headers: { "Content-Type": contentType }, body }).formData();
  } catch {
    return json({ ok: false, message: "The form could not be submitted." }, 400);
  }

  const validation = validateContactForm(form);
  if (!validation.ok) return json({ ok: false, message: validation.message }, 400);
  const fields = validation.value;

  if (fields.website) return json({ ok: true, message: "Thank you. Your message has been received." });

  const turnstileValid = await verifyTurnstile(
    fields.turnstileToken,
    env.TURNSTILE_SECRET,
    request.headers.get("CF-Connecting-IP"),
    splitList(env.CONTACT_ALLOWED_HOSTNAMES),
    dependencies.fetch
  );
  if (!turnstileValid) {
    return json({ ok: false, message: "The security check expired or was not accepted. Please try again." }, 400);
  }

  const safeName = escapeHtml(fields.name);
  const safeEmail = escapeHtml(fields.email);
  const safeSubject = escapeHtml(fields.subject);
  const safeMessage = escapeHtml(fields.message).replace(/\n/g, "<br>");

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: { name: "Impact Pockets Website", email: env.CONTACT_FROM },
      replyTo: { name: fields.name, email: fields.email },
      subject: `Website inquiry: ${fields.subject}`,
      text: `Name: ${fields.name}\nEmail: ${fields.email}\nSubject: ${fields.subject}\n\n${fields.message}`,
      html: `<h1>Impact Pockets website inquiry</h1><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><p><strong>Message:</strong><br>${safeMessage}</p>`
    });
  } catch (error) {
    console.error("contact_delivery_failed", error instanceof Error ? error.name : "UnknownError");
    return json({ ok: false, message: "Your message could not be delivered. Please email us directly." }, 502);
  }

  return json({ ok: true, message: "Thank you. Your message has been sent." });
}
