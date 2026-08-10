# Services Spacing Release Evidence

## Release identity

- Released: 2026-07-23
- Canonical site: `https://www.impactpockets.com`
- Git candidate: `26c8e5c8dc2db4862e5dca96eb57820ce96df4bf`
- Go for Launch revision: `59247c60f2bda03731ccf7f7dfa9cb948b4ae82b`
- Staging Worker version: `070d2047-293a-4408-ab9c-fa3b227a731b`
- Production Worker version: `802aa04e-036c-4f06-987f-2a3733827c3e`
- Client artifact SHA-256: `ca5f2c21a9da2accd753ec13a4d8850e2585e38c29c632e0605f34d7250936ff`

The production client artifact matched the exact staged candidate. The client hash remained unchanged across the final production build and deployment.

## Presentation changes

The Services page now uses one consistent responsive rhythm while preserving its content, capabilities, artwork, routes, and brand treatment.

- The Stage 02 quote is part of the Advisory narrative instead of occupying a disconnected grid row.
- The Advisory desktop panel decreased from approximately 606 pixels to 506 pixels tall. Its desktop edge insets are approximately 73 pixels, and its mobile edge insets are approximately 55 pixels.
- Fund Incubation and Technology and AI desktop section insets now use a 56 to 72 pixel range instead of the prior 72 to 112 pixel range.
- Mobile section insets use a 48 to 56 pixel range.
- The Tax capability grid no longer carries a 50 pixel horizontal offset.
- Tax cards use equal columns, equal minimum heights, and symmetric internal padding on desktop.
- Advisory and Tax stack into full-width mobile cards without horizontal overflow.
- The Services section number now meets text contrast requirements on light panels.
- Footer group labels no longer create an invalid heading-level jump.

## Mobile navigation accessibility

Live WebKit exposed a menu behavior gap during the release review. The shared mobile menu now:

- Has an accessible name and button role.
- Reports its expanded state.
- Supports Enter, Space, touch, and Escape.
- Restores focus to the menu control after Escape.
- Closes when a navigation link is activated.

The automated iPhone WebKit test now verifies these behaviors directly.

## Local Go for Launch gates

The exact source candidate passed `npm run verify`:

- Astro Check, 0 errors, 0 warnings, 0 hints
- Unit tests, 15 passed
- Sitemap, SEO, image, brand, site-health, semantic SEO, content-quality, render-sharpness, and side-navigation checks
- Interface quality, 50 route and viewport checks with 0 errors and 0 warnings
- Visual composition, 96 artboard checks across Chromium and WebKit
- Browser tests, 30 passed with 3 intentional viewport-specific skips
- Open Graph, 5 approved deterministic cards

Desktop, tablet, mobile, and 320 pixel reviews found no horizontal overflow. Advisory, Tax, and the major Services transitions were inspected at their natural rendered sizes.

## Staging evidence

All five staging routes returned HTTP 200 with the exact Git candidate marker and correct production canonical. The public sitemap, robots response, and shared stylesheet returned HTTP 200.

Google PageSpeed Insights passed the exact staged candidate at 100 for Performance, Accessibility, Best Practices, and SEO on both mobile and desktop.

Live Playwright WebKit on an iPhone 13 profile passed all five routes with zero horizontal overflow. The Services page passed touch menu operation, Escape closure, focus restoration, and Advisory and Tax geometry checks.

Native Safari passed in the dedicated `Impact Pockets Launch 2026-07-22` Simulator on iOS 26.5 with Xcode 26.6. The Services hero, process sequence, Fund Incubation transition, Advisory narrative and cards, Technology transition, and Tax stack were inspected on the exact staged candidate.

## Production verification

Cloudflare accepted the exact candidate and a full zone cache purge. All five production routes returned HTTP 200 with the exact marker and correct canonical. The apex host returned HTTP 308 to the matching `www` path while preserving the query string. The sitemap, robots response, and shared stylesheet returned HTTP 200.

Production Playwright WebKit passed all five routes with zero horizontal overflow. The mobile menu passed accessible naming, touch, Escape, and focus restoration. Advisory and Tax passed live production geometry checks. The production contact page initialized the managed Turnstile frame and response field.

Native production Safari rendered the Services page on `www.impactpockets.com` in the pinned iOS Simulator.

## Contact and delivery contract

This release did not change the contact service. The production Worker binding remains restricted to `lane@impactpockets.com` and permits `hello@impactpockets.com` as the sender. The public site displays `hello@impactpockets.com`. Managed Turnstile and the four required contact fields remain present. No credential or private environment value is exposed in the browser or repository.

## Cloudflare observability

The immediate 23.9-hour advisory query returned 1 RUM route group and 19,310 edge requests. It retained one nonblocking rolling-window warning, 312 historical 5xx responses, or 1.62 percent, above the 1 percent advisory threshold. Current production route, PageSpeed, WebKit, and native Safari checks succeeded. No blocking finding was reported.

## Approval

Lane Campbell approved production after completion of the Go for Launch toolkit and approved the existing generated Open Graph images.
