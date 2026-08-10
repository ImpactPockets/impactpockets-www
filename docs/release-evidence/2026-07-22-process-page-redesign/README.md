# Our Process Redesign Release Evidence

## Release identity

- Released: 2026-07-22
- Canonical page: `https://www.impactpockets.com/our-process/`
- Git candidate: `36e4a5e66ea19bb59515a0bda527d7fbe7fb906c`
- Go for Launch revision: `59247c60f2bda03731ccf7f7dfa9cb948b4ae82b`
- Staging Worker version: `e9d6b7d9-4dfa-4586-b200-32177d691cc0`
- Production Worker version: `d2b98c78-0d88-4adb-8d90-a7cd1a58f2cf`

Production was built from the same committed source candidate that passed staging. The Cloudflare zone cache was purged after deployment, and every public route then returned the exact candidate marker.

## Story and layout acceptance

The page now presents five fund formation stages and the Impact Pockets partnership model as six semantic HTML stories. The original process context remains present in text, while CSS and progressive JavaScript provide connected sequences, active-stage navigation, reveal motion, and reduced-motion support.

The final layout review covered the hero, conversation, all five stages, partnership role, economics, Ohio context, call to action, navigation, footer, desktop, mobile, and no-JavaScript behavior. Stage 04, Stage 05, and the partnership story were reviewed directly in staging and production WebKit and native Safari.

## Local Go for Launch gates

The final `npm run verify` passed:

- Astro Check, 0 errors, 0 warnings, 0 hints
- Unit tests, 15 passed
- Sitemap, SEO, images, brand assets, site health, and semantic SEO
- Content quality, 0 errors and 0 warnings
- Interface quality, 50 checks with 0 errors and 0 warnings
- Visual composition, 84 artboard checks across Chromium and WebKit
- Browser tests, 30 passed and 3 intentional viewport-specific skips
- Open Graph, 5 approved deterministic cards

The build now minifies the legacy and route override stylesheets before inlining them. The Our Process HTML payload decreased from about 168 KB to about 127 KB. The hero image is an eager, high-priority WebP image layer with stable dimensions, while preserving the approved gradient, crop, and composition.

## PageSpeed

Google PageSpeed Insights passed the exact staging candidate:

| Strategy | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 100 | 1.0 s | 1.7 s | 0 | 0 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.4 s | 0 | 0 ms |

The PageSpeed review found and drove two real corrections before release: orange text contrast was raised to WCAG compliance, and the process hero was changed from a CSS background LCP candidate to a directly discoverable image element.

## Browser and device verification

- Staging WebKit, iPhone 15 profile: exact marker, 6 stories, active Stage 04 and Stage 05 tracking, full hero image, and 0 horizontal overflow
- Production WebKit, iPhone 15 profile: exact marker, 6 stories, active Stage 04 tracking, heading below the sticky stage rail, and 0 horizontal overflow
- Dedicated Simulator: `Impact Pockets Launch 2026-07-22`
- iOS runtime: 26.5
- Simulator UDID: `50DAA997-6B4B-4716-9C9D-EA9CBABB5999`
- Native Safari staging: hero, Stage 04, Stage 05, and partnership story reviewed
- Native Safari production: hero and Stage 04 reviewed after cache purge

The Mac was locked during the release review, so native Safari evidence was captured directly from the dedicated simulator with route and section deep links. The exact screenshots remain in the ignored local `output/native-safari/` evidence directory.

## Contact integration

The contact implementation was not changed by this release. The exact staging candidate still exposed one same-origin form with four required user fields and the `/api/contact/` Worker action, and the managed Turnstile challenge loaded. A real staging and production form delivery had already passed earlier on 2026-07-22 with the same contact code.

The production Worker binding remains restricted to `lane@impactpockets.com`, permits `hello@impactpockets.com` as the sender, and exposes no email credential to the browser. The public site displays `hello@impactpockets.com`.

## Production verification

All five public routes returned HTTP 200 with candidate `36e4a5e66ea19bb59515a0bda527d7fbe7fb906c` and the correct `www` canonical. `sitemap.xml`, `robots.txt`, `process-stories.js`, and the optimized process hero returned HTTP 200. The apex host returned HTTP 308 to `https://www.impactpockets.com/`.

## Cloudflare observability

The post-release advisory query returned both RUM and edge data for a 24-hour window, 2 low-sample RUM route groups, and 18,710 edge requests. It recorded one nonblocking aggregate warning: 281 historical 5xx responses, or 1.50 percent, above the 1 percent advisory threshold. Current production curl, WebKit, PageSpeed, and native Safari requests all succeeded after deployment and cache purge. This aggregate advisory is retained for monitoring and is not presented as current release traffic.

## Approval

Lane Campbell explicitly approved production after completion of the Go for Launch gates and approved the generated Open Graph images.
