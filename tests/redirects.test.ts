import { describe, expect, it } from "vitest";
import { canonicalRedirectPath } from "@/lib/redirects";

describe("canonical redirect paths", () => {
  it("permanently normalizes extensionless routes", () => {
    expect(canonicalRedirectPath("/about-impact-pockets")).toBe("/about-impact-pockets/");
    expect(canonicalRedirectPath("/our-process")).toBe("/our-process/");
  });

  it("maps legacy HTML routes to canonical paths", () => {
    expect(canonicalRedirectPath("/index.html")).toBe("/");
    expect(canonicalRedirectPath("/our-services.html")).toBe("/our-services/");
  });

  it("does not redirect canonical routes or assets", () => {
    expect(canonicalRedirectPath("/")).toBeNull();
    expect(canonicalRedirectPath("/contact-us/")).toBeNull();
    expect(canonicalRedirectPath("/images/Logo.png")).toBeNull();
  });
});
