# Impact Pockets Production Release Evidence

## Release identity

- Released: 2026-07-22
- Canonical site: `https://www.impactpockets.com`
- Git candidate: `a9a0db7b64af31c9496c2a896ff8e214a0580ed9`
- Go for Launch revision: `646a96eaafd183b83871135c7ae8ff125b9b48bf`
- Staging Worker version: `6bd62a0c-1519-4c0f-a67e-23cb48cf89f7`
- Production Worker version: `a0622d37-f8ff-4c98-82db-e2dbbb3eaf3f`
- Production routes: `www.impactpockets.com/*` and `impactpockets.com/*`

The production deployment used the same compiled artifact that passed staging. No source or build change occurred between the final staging gates and production promotion.

## Local Go for Launch gates

The final `npm run verify` passed:

- Astro Check, 0 errors, 0 warnings, 0 hints
- Unit tests, 15 passed
- Sitemap, 5 canonical routes
- SEO, images, brand assets, site health, and semantic SEO
- Content quality, 0 errors and 1 reviewed repetition advisory for the route label `Our Process`
- Render sharpness and side navigation
- Interface quality, 50 checks with 0 errors and 0 warnings
- Visual composition, 24 artboard checks
- Playwright, 27 passed and 3 intentional viewport-specific skips across Chromium, desktop WebKit, and iPhone WebKit
- Open Graph, 5 approved deterministic cards

`npm audit --omit=dev` reported 0 production vulnerabilities. The complete development tree reports 5 high advisories through the latest `miniflare`, which still pins `sharp` 0.34.5. The site uses `sharp` 0.35.3 directly, and the affected Miniflare dependency is build and local-emulation tooling that is not included in the deployed Worker. npm's proposed forced repair would downgrade Wrangler to an incompatible older release, so no unsafe override or downgrade was applied.

The optional Codacy local scan could not initialize because this repository is not enrolled in Codacy. This is not a Go for Launch release gate. The failed installer exposed its own API token in an error, so the generated files were removed, the token was rotated, the replacement was stored in 1Password, and the exposed token was verified revoked.

## One-to-one conversion evidence

The five routes preserve the approved source composition, content, native navigation, and assets. Initial controlled captures matched at 0 changed pixels at 1440 by 900 and 390 by 844. After the required browser-default font-smoothing change, controlled comparisons remained below 0.34 percent changed pixels on every route and viewport, with page dimensions, spacing, composition, and asset geometry preserved.

The source and converted full-page captures remain available locally in `artifacts/fidelity-comparison/`. Generated screenshots are intentionally ignored by Git because they total about 30 MB. The durable comparison result and conditions are recorded here and in `docs/migration-verification.md`.

## Staging performance

Google PageSpeed Insights passed the exact candidate:

| Strategy | Performance | Accessibility | Best Practices | SEO | FCP | LCP |
|---|---:|---:|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 100 | 0.9 s | 1.8 s |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.4 s |

The home hero is served as AVIF at its approved dimensions. The production AVIF and all five approved Open Graph PNG files returned HTTP 200 with the expected media types.

## Browser and form verification

- Dedicated Simulator: `Impact Pockets Launch 2026-07-22`
- iOS runtime: 26.5
- Simulator UDID: `50DAA997-6B4B-4716-9C9D-EA9CBABB5999`
- Staging native Safari: exact candidate rendered, managed Turnstile reached Success, Worker accepted the form, and the page displayed `Thank you. Your message has been sent.`
- Production native Safari: exact candidate rendered, managed Turnstile reached Success, Worker accepted the form, and the page displayed `Thank you. Your message has been sent.`
- Production Chromium and WebKit: all five routes returned 200 with the exact release marker and correct canonical URL

The public address is `hello@impactpockets.com`. The Cloudflare Email binding is restricted to the destination `lane@impactpockets.com` and the allowed sender `hello@impactpockets.com`. The Turnstile secret and email credentials remain outside the repository and browser output.

## Canonical routing

The following checks passed with query strings preserved:

- `/index.html` redirects directly to `/`
- `/about-impact-pocket.html` redirects directly to `/about-impact-pockets/`
- `/about-impact-pocket` redirects directly to `/about-impact-pockets/`
- Apex legacy URLs redirect directly to the matching canonical `www` URL
- Other apex paths redirect directly to the same path on `www`

All five page responses contain the exact release marker and canonical URL. `sitemap.xml` contains five routes. `robots.txt` advertises `https://www.impactpockets.com/sitemap.xml`.

## Cloudflare observability

The 24-hour advisory query returned both RUM and edge data with 2 RUM route groups and 16,803 edge requests. The single aggregate edge advisory was traced to Cloudflare's internal Early Hints crawler. Every sampled 504 had `requestSource=earlyHintsCache`, an internal Early Hints user agent, and no origin response. Public curl, Chromium, WebKit, PageSpeed, and native Safari requests remained successful.

Early Hints was disabled after this diagnosis because the Worker-served static site does not need the crawler and the internal failures polluted the edge error metric. Cloudflare may continue reporting already queued internal cache probes during setting propagation. Those probes remain identifiable by `requestSource=earlyHintsCache` and do not represent visitor-facing 504 responses. No secret or visitor data appears in the report.

## Approval

Lane Campbell explicitly approved production after Go for Launch completion and approved the generated Open Graph images. Production promotion occurred only after the exact candidate passed all hard gates above.
