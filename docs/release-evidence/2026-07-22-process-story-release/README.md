# Impact Pockets Semantic Process Story Release

## Release Identity

- Released: 2026-07-22
- Canonical site: `https://www.impactpockets.com`
- Git candidate: `51aa1424209da1df03f7b7345eba9c934169022c`
- Go for Launch revision: `59247c60f2bda03731ccf7f7dfa9cb948b4ae82b`
- Staging Worker version: `cf6958e4-6d86-4bd5-b2b1-600d5a217dd8`
- Production Worker version: `1c0509fa-74f6-4717-babe-d790cc9aebb5`
- Production routes: `www.impactpockets.com/*` and `impactpockets.com/*`

The exact compiled staging artifact was promoted to production. No source or build change occurred between final staging acceptance and production deployment.

## Scope

Six large process graphics and ten supporting process icon references were replaced with nine semantic HTML stories across Home, Our Process, and Our Services. Every statement and sequence encoded in the original graphics remains present as readable page text. The original files remain in the repository as migration evidence but are no longer referenced by the public pages.

The complete content and layout matrix is in `docs/layout-and-process-story-audit.md`.

## Local Go For Launch Gates

- Astro Check: 0 errors, 0 warnings, 0 hints
- Unit tests: 15 passed
- Browser suite: 30 passed and 3 intentional project skips
- Interface quality: 50 checks, 0 errors, 0 warnings
- Visual composition: 60 artboard checks across Chromium and WebKit
- Sitemap: 5 canonical routes
- SEO, images, brand assets, site health, semantic SEO, render sharpness, and side navigation: passed
- Content quality: 0 errors and 1 reviewed navigation-label warning
- Open Graph: 5 approved immutable cards reused without byte changes
- JavaScript-disabled story check: full text visible at opacity 1 with zero horizontal overflow
- Reduced-motion story check: full text visible, progress complete, zero horizontal overflow

## Staging Acceptance

Google PageSpeed Insights passed the exact staging candidate:

| Strategy | Performance | Accessibility | Best Practices | SEO | FCP | LCP |
|---|---:|---:|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 100 | 0.9 s | 1.8 s |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.4 s |

An initial staging run exposed reduced contrast while offscreen motion elements waited to enter the viewport. Production was blocked. The reveal treatment was corrected to retain full text opacity, the candidate was rebuilt, and both PageSpeed strategies then returned all eight required category scores of 100.

Playwright WebKit on an iPhone profile returned the exact commit marker on all five routes, found all nine semantic stories, and measured zero horizontal overflow.

## Native Safari Acceptance

- Simulator: `Impact Pockets Launch 2026-07-22`
- Runtime: iOS 26.5
- UDID: `50DAA997-6B4B-4716-9C9D-EA9CBABB5999`
- Staging: Home, Our Process, and Our Services stories rendered with readable cards, clear connectors, and no clipping
- Staging mobile navigation: opened and displayed all five public destinations
- Staging form: managed Turnstile reached Success and the Worker returned `Thank you. Your message has been sent.`
- Production: the canonical Our Process route rendered the discovery story and all three questions without clipping or horizontal overflow

The form retained `hello@impactpockets.com` as the public and sender address. The destination remains restricted to `lane@impactpockets.com` by the Cloudflare Email binding.

## Production Verification

- All five canonical routes returned release marker `51aa1424209da1df03f7b7345eba9c934169022c`
- All five canonical routes returned the correct canonical URL
- Home returned 2 semantic stories, Our Process returned 5, and Our Services returned 2
- Production WebKit measured zero horizontal overflow on every route
- `sitemap.xml`, `robots.txt`, and `js/process-stories.js` returned HTTP 200
- The apex route redirected to the matching `www` route and preserved the query string
- The legacy About route redirected directly to `/about-impact-pockets/` and preserved the query string
- The Cloudflare zone cache was purged after deployment

## Production Observability

The immediate 23.9-hour advisory query returned 2 RUM route groups and 17,916 edge requests. The report contained no blocking findings. Its 5xx advisory reflects historical requests in the rolling window, including the previously investigated Early Hints crawler responses, while live canonical, curl, WebKit, native Safari, and PageSpeed checks all succeeded.

The machine-readable report is stored at `artifacts/cloudflare-observability-baseline.json`.
