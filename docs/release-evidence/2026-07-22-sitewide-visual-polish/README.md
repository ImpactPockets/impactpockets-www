# Sitewide Visual Polish Release Evidence

## Release identity

- Released: 2026-07-22
- Canonical site: `https://www.impactpockets.com`
- Git candidate: `4e2b77dee4d2cad9117a54dad7aeeac5a86de00c`
- Go for Launch revision: `59247c60f2bda03731ccf7f7dfa9cb948b4ae82b`
- Staging Worker version: `8a242267-d36f-4c57-9118-4d09d3e4e719`
- Production Worker version: `64d9cbaf-5ccb-45a9-a7da-a4fe3cc0d160`
- Client artifact SHA-256: `3fcf9357be0b68200f6b17aa162f62c7448eb23299e34f5ce7888ac1261b104d`

The production client artifact hash matched the staged artifact hash. No client file changed between the audited staging deployment and production promotion.

## Visual acceptance

The rounded content treatment from Our Process is now a restrained sitewide system. Major paper panels, cards, buttons, form fields, portraits, and calls to action use one shared radius, border, surface, and shadow scale. Headers and footers remain square, full-width anchors. The five-phase rail remains specific to Our Process because it provides useful navigation for that long sequence.

The final review covered Home, About Impact Pockets, Our Process, Our Services, and Contact Us at desktop, mobile, and 320 CSS pixel widths. White-space fields were tightened, section boundaries were strengthened, desktop navigation labels no longer wrap, mobile process cards use their available width, and the Advisory Services grid no longer overlaps or clips.

## Local Go for Launch gates

The exact candidate passed `npm run verify`:

- Astro Check, 0 errors, 0 warnings, 0 hints
- Unit tests, 15 passed
- Sitemap, SEO, image, brand, site-health, semantic SEO, content-quality, render-sharpness, and side-navigation checks
- Interface quality, 50 route and viewport checks with 0 errors and 0 warnings
- Visual composition, 84 artboard checks across Chromium and WebKit
- Browser tests, 30 passed with 3 intentional viewport-specific skips
- Open Graph, 5 approved deterministic cards

The composition gate initially caught two real mobile defects, insufficient home-hero text fill at 390 pixels and an overly narrow home-process artboard at 320 pixels. Both were corrected before the passing candidate was committed.

## Staging evidence

All five staging routes returned HTTP 200 with the exact Git candidate marker and correct production canonical. `sitemap.xml`, `robots.txt`, the shared stylesheet, mobile navigation, all five process-stage anchors, long-page scrolling, the contact form, and managed Turnstile rendered successfully.

Google PageSpeed Insights produced one initial mobile Performance result of 98. The exact unchanged candidate was rechecked to distinguish measurement variance from an implementation defect. A direct follow-up returned 100, then the complete mobile and desktop category run passed:

| Strategy | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 100 | 0.9 s | 1.8 s | 0 | 0 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.4 s | 0 | 0 ms |

Live Playwright WebKit on an iPhone 15 profile passed all five routes with zero horizontal overflow, exact markers, working touch navigation, five functional process-stage anchors, and rendered Turnstile.

Native Safari passed in the dedicated `Impact Pockets Launch 2026-07-22` Simulator on iOS 26.5 with Xcode 26.6. Home, About, Services, Process Stage 04, and Contact were inspected. The native mobile menu opened and closed by touch. The Stage 04 deep link placed Investor Testing below the persistent rail with Testing active.

## Production verification

Cloudflare accepted the production deployment and cache purge. After normal edge propagation, all five public routes returned HTTP 200 with the exact candidate marker and correct canonical. The apex host returned HTTP 308 directly to the matching `www` path while preserving the query string. The public sitemap, managed robots response, and shared stylesheet returned HTTP 200.

Production Playwright WebKit passed all five routes with zero horizontal overflow, sharp header and footer logos, working mobile navigation, five functional process-stage anchors, and rendered Turnstile.

Native production Safari rendered Home, Contact, and the Stage 04 deep link on the canonical host. The Mac locked before a second production menu tap could be recorded. The same native menu interaction had already passed against the exact staged client artifact, and the live production WebKit menu interaction passed after promotion.

## Contact and delivery contract

The production Worker binding remains restricted to `lane@impactpockets.com` and permits `hello@impactpockets.com` as the sender. The public website displays `hello@impactpockets.com`. Managed Turnstile and the four required contact fields remain present. No credential or private environment value is exposed in the browser or repository.

## Cloudflare observability

The immediate post-release advisory query returned both RUM and edge datasets, 2 RUM route groups, and 19,002 edge requests. It retained one nonblocking rolling-window warning, 265 historical 5xx responses, or 1.39 percent, above the 1 percent advisory threshold. Current production curl, PageSpeed, WebKit, and native Safari requests succeeded. The report contains 0 blocking findings.

## Approval

Lane Campbell explicitly approved production after completion of the Go for Launch toolkit and approved the generated Open Graph images.
