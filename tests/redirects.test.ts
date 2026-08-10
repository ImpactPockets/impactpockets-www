import { describe, expect, it } from "vitest";
import { canonicalRedirectPath, isAlternateProductionHostname } from "@/lib/redirects";

describe("canonical redirect paths", () => {
  it("permanently normalizes extensionless routes", () => {
    expect(canonicalRedirectPath("/about-impact-pockets")).toBe("/about-impact-pockets/");
    expect(canonicalRedirectPath("/our-process")).toBe("/our-process/");
  });

  it("maps legacy HTML routes to canonical paths", () => {
    expect(canonicalRedirectPath("/index.html")).toBe("/");
    expect(canonicalRedirectPath("/our-services.html")).toBe("/our-services/");
    expect(canonicalRedirectPath("/about-impact-pocket.html")).toBe("/about-impact-pockets/");
    expect(canonicalRedirectPath("/about-impact-pocket")).toBe("/about-impact-pockets/");
  });

  it("does not redirect canonical routes or assets", () => {
    expect(canonicalRedirectPath("/")).toBeNull();
    expect(canonicalRedirectPath("/contact-us/")).toBeNull();
    expect(canonicalRedirectPath("/images/Logo.png")).toBeNull();
  });

  it("recognizes only the alternate production hostname", () => {
    expect(isAlternateProductionHostname("impactpockets.com")).toBe(true);
    expect(isAlternateProductionHostname("IMPACTPOCKETS.COM")).toBe(true);
    expect(isAlternateProductionHostname("www.impactpockets.com")).toBe(false);
    expect(isAlternateProductionHostname("impactpockets-www-staging.biglane.workers.dev")).toBe(false);
  });
});
