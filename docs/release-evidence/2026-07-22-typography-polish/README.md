# Typography Polish Release Evidence

## Release identity

- Released: 2026-07-22
- Canonical site: `https://www.impactpockets.com`
- Git candidate: `5ef59aa92fec4557fba85bc9af979a1525ed3e5a`
- Go for Launch revision: `59247c60f2bda03731ccf7f7dfa9cb948b4ae82b`
- Staging Worker version: `2fb989ee-3e53-4c8a-af43-988fbb740616`
- Production Worker version: `20affc3d-aeb5-4d95-ae16-a655f3d31bf3`
- Client artifact SHA-256: `2e0a4b9beded60dec676f006fd449bcda782c2230934848fdf7351b3028df1fa`

The production client artifact matched the exact staged candidate. The client hash remained unchanged across the final production build and deployment.

## Presentation changes

The typography pass corrected a sitewide reading problem without changing approved content, routes, images, colors, or page structure.

- Meaningful body copy, process labels, card descriptions, and form controls now render at a minimum of 16 pixels.
- Long reading copy uses a fluid 16 to 17 pixel scale, a 1.65 to 1.7 line height, and a controlled reading measure.
- Introductory copy uses a restrained 17 to 19 pixel lead scale.
- Heading weights, tracking, line heights, and responsive sizes now create smoother transitions between page titles, section titles, and supporting copy.
- Long desktop paragraphs no longer extend beyond 900 pixels.
- Mobile copy is limited to approximately 34 characters per line where the layout permits it.
- Small 14 pixel text is limited to intentional uppercase eyebrows and navigation labels.
- The Technology and AI sequence received stronger labels to fill its desktop artboard and improve scanning.

## Local Go for Launch gates

The exact source candidate passed `npm run verify`:

- Astro Check, 0 errors, 0 warnings, 0 hints
- Unit tests, 15 passed
- Sitemap, SEO, image, brand, site-health, semantic SEO, content-quality, render-sharpness, and side-navigation checks
- Interface quality, 50 route and viewport checks with 0 errors and 0 warnings
- Visual composition, 84 artboard checks across Chromium and WebKit
- Browser tests, 30 passed with 3 intentional viewport-specific skips
- Open Graph, 5 approved deterministic cards

The composition gate initially blocked the Technology and AI section because its desktop labels filled only 11.2 to 11.4 percent of the artboard height. The label scale was corrected, and the final 84-check composition run passed.

## Staging evidence

All five staging routes returned HTTP 200 with the exact Git candidate marker and correct production canonical. The public sitemap, managed robots response, and shared stylesheet returned HTTP 200.

Google PageSpeed Insights passed the exact staged candidate:

| Strategy | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 100 | 0.9 s | 1.8 s | 0.001 | 0 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.4 s | 0.004 | 0 ms |

Live Playwright WebKit on an iPhone 15 profile passed all five routes with zero horizontal overflow, exact markers, working touch navigation, five functional process-stage anchors, and rendered Turnstile. Meaningful reading copy remained at least 16 pixels. The only smaller text was the intended uppercase eyebrow treatment.

Native Safari passed in the dedicated `Impact Pockets Launch 2026-07-22` Simulator on iOS 26.5 with Xcode 26.6. Home, About, Services, Process, Stage 04, and Contact were inspected. The mobile menu worked by touch, and the Stage 04 phase link positioned Investor Testing below the persistent rail with Testing active.

## Production verification

Cloudflare accepted the exact candidate and cache purge. All five production routes returned HTTP 200 with the exact marker and correct canonical. The apex host returned HTTP 308 to the matching `www` path while preserving the query string. The sitemap, managed robots response, and shared stylesheet returned HTTP 200.

Production Playwright WebKit passed all five routes with zero horizontal overflow, footer-logo density above 2, working mobile navigation, five process-stage anchors, and rendered Turnstile.

Native production Safari rendered the polished Home and Contact pages and opened the mobile menu successfully. The production artifact is byte-identical to the staged artifact that passed the broader native route review.

## Contact and delivery contract

This release did not change the contact service. The production Worker binding remains restricted to `lane@impactpockets.com` and permits `hello@impactpockets.com` as the sender. The public site displays `hello@impactpockets.com`. Managed Turnstile and the four required contact fields remain present. No credential or private environment value is exposed in the browser or repository.

## Cloudflare observability

The immediate 23.9-hour advisory query returned both RUM and edge datasets, 2 RUM route groups, and 18,104 edge requests. It retained one nonblocking rolling-window warning, 287 historical 5xx responses, or 1.59 percent, above the 1 percent advisory threshold. Current production curl, PageSpeed, WebKit, and native Safari checks succeeded. The report contains 0 blocking findings.

## Approval

Lane Campbell approved production after completion of the Go for Launch toolkit and approved the existing generated Open Graph images.
