# Mark Favicon Release Evidence

## Release identity

- Released: 2026-07-23
- Canonical site: `https://www.impactpockets.com`
- Git candidate: `9bb3adef6332f13e08e4e9fbc5af3376ddf52fe2`
- Go for Launch revision: `59247c60f2bda03731ccf7f7dfa9cb948b4ae82b`
- Staging Worker version: `7042623d-7d65-40e8-a2ea-76c5e33a52c0`
- Production Worker version: `1d2a034b-4c98-4f92-a330-a8f3b4b772e2`
- Client artifact SHA-256: `f122e687a9cca004a0549f6e7b3cf688bfb63a6ff64848ad3ddd18eb2a0c960b`
- Favicon SHA-256: `936133384bd11e560b49de38d31f66e81c7cb2f2490c8dfc0fc8778a7f5c7ed6`

The production client artifact matched the exact staged candidate. The client hash remained unchanged across the final production build and deployment.

## Asset change

The previous favicon used the complete 408 by 108 pixel Impact Pockets wordmark. The replacement uses only the approved bull-and-square mark.

- The mark is an exact pixel crop from the approved source logo.
- Bull geometry, square geometry, colors, white edge treatment, orientation, and proportions are unchanged.
- The source logo remains unchanged.
- The mark is centered on a transparent 120 by 120 pixel canvas.
- The new `/favicon-mark.png` path prevents browsers from reusing the prior wordmark favicon cache entry.
- Every public route declares `/favicon-mark.png` with its exact square dimensions.

An image-generation edit was evaluated and rejected because it changed the bull geometry and introduced shading. The released asset uses the deterministic source crop.

## Local Go for Launch gates

The exact source candidate passed `npm run verify`:

- Astro Check, 0 errors, 0 warnings, 0 hints
- Unit tests, 15 passed
- Sitemap, SEO, image, brand, site-health, semantic SEO, content-quality, render-sharpness, and side-navigation checks
- Interface quality, 50 route and viewport checks with 0 errors and 0 warnings
- Visual composition, 96 artboard checks across Chromium and WebKit
- Browser tests, 30 passed with 3 intentional viewport-specific skips
- Open Graph, 5 approved deterministic cards

## Staging evidence

All five staging routes returned the exact candidate marker and `/favicon-mark.png` declaration. The staged favicon was byte-identical to the committed asset.

Google PageSpeed Insights passed the exact staged candidate at 100 for Performance, Accessibility, Best Practices, and SEO on both mobile and desktop.

Live Playwright WebKit loaded the 120 by 120 pixel favicon on all five routes with zero horizontal overflow. Native Safari rendered the exact staged bull-and-square asset in the dedicated `Impact Pockets Launch 2026-07-22` Simulator on iOS 26.5 with Xcode 26.6.

## Production verification

Cloudflare accepted the exact candidate and two full zone cache purges. All five production routes returned the exact candidate marker and `/favicon-mark.png` declaration. The live favicon matched the committed SHA-256 value.

Production Playwright WebKit loaded the square favicon on all five routes with zero horizontal overflow. Native production Safari rendered the bull-and-square asset on `www.impactpockets.com`.

The apex host returned HTTP 308 to the matching `www` path while preserving the query string.

## Contact and delivery contract

This release did not change the contact service. The production Worker binding remains restricted to `lane@impactpockets.com` and permits `hello@impactpockets.com` as the sender. Managed Turnstile and the public `hello@impactpockets.com` address remain unchanged.

## Cloudflare observability

The immediate 23.9-hour advisory query returned 1 RUM route group and 19,954 edge requests. It retained one nonblocking rolling-window warning, 382 historical 5xx responses, or 1.91 percent, above the 1 percent advisory threshold. Current production route, WebKit, native Safari, and favicon hash checks succeeded. No blocking finding was reported.

## Approval

Lane Campbell requested the bull-and-square favicon and had already approved production after completion of the Go for Launch toolkit.
