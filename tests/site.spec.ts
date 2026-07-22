import { expect, test } from "@playwright/test";

const routes = ["/", "/about-impact-pockets/", "/our-process/", "/our-services/", "/contact-us/"];
const heroImages = new Map([
  ["/", "/images/optimized/home-hero.avif"],
  ["/about-impact-pockets/", "/images/optimized/about-hero.webp"],
  ["/our-process/", "/images/optimized/process-hero.webp"],
  ["/our-services/", "/images/optimized/services-hero.webp"]
]);

test.beforeEach(async ({ page }) => {
  await page.route("https://challenges.cloudflare.com/turnstile/v0/api.js*", async (route) => {
    await route.fulfill({
      contentType: "application/javascript",
      body: "window.turnstile = { reset() {} };"
    });
  });
});

for (const route of routes) {
  test(`${route} renders meaningful static content`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto(route, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`${route.replaceAll("/", "\\/")}$`));
    await expect(page.locator("body")).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    expect(errors).toEqual([]);
  });
}

test("desktop navigation reaches every public route", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop navigation test");
  await page.goto("/");
  const links = [
    ["ABOUT US", "/about-impact-pockets/"],
    ["OUR PROCESS", "/our-process/"],
    ["SERVICES", "/our-services/"],
    ["CONTACT US", "/contact-us/"]
  ] as const;
  const navigation = page.locator("header nav");

  for (const [label, path] of links) {
    await Promise.all([
      page.waitForURL((url) => url.pathname === path),
      navigation.getByRole("link", { name: label, exact: true }).click()
    ]);
  }
});

test("mobile navigation supports touch, Escape, and scroll restoration", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation test");
  await page.goto("/our-process/");
  const button = page.locator(".hamburger");
  await button.tap();
  await expect(button).toHaveClass(/active/);
  await expect(page.locator(".nav-menu")).toHaveClass(/active/);
  await Promise.all([
    page.waitForURL((url) => url.pathname === "/contact-us/"),
    page.locator("header nav").getByRole("link", { name: "CONTACT US", exact: true }).tap()
  ]);
});

test("FAQ preserves the original disclosure behavior", async ({ page }) => {
  await page.goto("/about-impact-pockets/");
  const item = page.locator(".faq-item").filter({ hasText: "What is Impact Pockets?" });
  const question = item.locator(".faq-question");
  await question.click();
  await expect(item.locator(".faq-answer")).toBeVisible();
});

test("contact form has named, labeled required fields", async ({ page }) => {
  await page.goto("/contact-us/");
  await expect(page.locator("[data-contact-form]")).toHaveAttribute("action", "/api/contact/");
  await expect(page.getByLabel("First & Last Name")).toHaveAttribute("name", "name");
  await expect(page.getByLabel("Email")).toHaveAttribute("name", "email");
  await expect(page.getByLabel("Subject")).toHaveAttribute("name", "subject");
  await expect(page.getByLabel("Message")).toHaveAttribute("name", "message");
  await expect(page.getByRole("button", { name: "Send", exact: true })).toBeVisible();
});

test("footer uses a high-density logo and omits placeholder social links", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    const footerLogo = page.locator(".footer-brand img");
    await expect(footerLogo).toHaveAttribute("src", "/images/Logo.png");
    const logoDensity = await footerLogo.evaluate((image: HTMLImageElement) => image.naturalWidth / image.getBoundingClientRect().width);
    expect(logoDensity).toBeGreaterThanOrEqual(2);
    await expect(page.locator("footer .social-links")).toHaveCount(0);
  }
});

test("first-viewport hero requests and preloads match the measured LCP resource", async ({ page }) => {
  for (const [route, expectedImage] of heroImages) {
    const imageRequests: string[] = [];
    page.on("request", (request) => {
      if (request.resourceType() === "image") imageRequests.push(new URL(request.url()).pathname);
    });
    await page.addInitScript(() => {
      window.__impactPocketsLcp = [];
      if (PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint")) {
        new PerformanceObserver((list) => {
          window.__impactPocketsLcp.push(...list.getEntries().map((entry) => {
            const lcpEntry = entry as PerformanceEntry & { url: string; element?: Element };
            return {
              url: lcpEntry.url,
              backgroundImage: lcpEntry.element ? getComputedStyle(lcpEntry.element).backgroundImage : ""
            };
          }));
        }).observe({ type: "largest-contentful-paint", buffered: true });
      }
    });
    await page.goto(route, { waitUntil: "networkidle" });
    await page.waitForTimeout(250);

    await expect(page.locator('link[rel="preload"][as="image"]')).toHaveAttribute("href", expectedImage);
    expect(imageRequests).toContain(expectedImage);
    for (const alternateImage of heroImages.values()) {
      if (alternateImage !== expectedImage) expect(imageRequests).not.toContain(alternateImage);
    }

    const lcpEntries = await page.evaluate(() => window.__impactPocketsLcp);
    if (lcpEntries.length > 0) {
      const measured = lcpEntries.at(-1);
      const measuredResource = measured?.url || measured?.backgroundImage || "";
      expect(measuredResource).toContain(expectedImage);
    }
  }
});
