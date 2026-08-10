# Impact Pockets production release, August 10, 2026

## Authorization and candidate

Lane Campbell explicitly approved Impact Pockets for production on August 10, 2026.

- Candidate marker: `20260810-4d4b5c911fc4`
- Staged and production client tree SHA-256: `067b1944b016c32611987495efdeb700db7b421f1c4d6b6b31313839cffdc1f4`
- Staging Worker version: `9c2de177-5e63-4fe4-bce2-7582d62aff54`
- Production Worker version: `2cd9d015-18c5-453d-9b65-7c41273f607c`

The staging and production builds used the same client artifact. The production build selected the documented production Worker configuration while retaining the byte-identical staged client tree.

## Maintenance

- Updated Cloudflare Workers types to `5.20260810.1`.
- Migrated the Open Graph rendering-input fingerprints from contract version 1 to version 2.
- Reused all five previously approved Open Graph PNG files without rewriting their bytes.
- Recorded Lane Campbell's current approval against the migrated input hashes.
- Confirmed that source and generated output contain no public `govsoft.us` destination.

## Local and browser validation

The exact candidate was built and tested on Podman host `10.13.37.151`.

- Astro Check: 0 errors, 0 warnings, 0 hints
- Unit tests: 15 passed
- Sitemap: 5 indexable pages matched
- SEO, images, brand assets, site health, semantic SEO, content quality, render sharpness, side navigation, and design-mode checks passed
- Interface quality: 50 checks passed
- Visual composition: 96 Chromium and WebKit checks passed
- Browser suite: 30 passed, 3 profile-specific skips

## Staging gates

All five staging routes returned HTTP 200 for GET and HEAD, the production canonical, and the exact candidate marker. Their response bodies were byte-identical to the staged build.

PageSpeed results for the exact staged candidate:

- Mobile attempt 1: Performance 98, Accessibility 100, Best Practices 100, SEO 100
- Mobile bounded repeat: Performance 100, Accessibility 100, Best Practices 100, SEO 100
- Desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100

The raw PageSpeed reports are preserved under `artifacts/pagespeed-2026-08-10/`.

Live staging WebKit passed all five public routes, canonical and candidate checks, horizontal-overflow checks, and the mobile navigation interaction.

Native Safari passed on the dedicated `Impact Pockets Launch 2026-07-22` iOS 26.5 Simulator with UDID `50DAA997-6B4B-4716-9C9D-EA9CBABB5999`. The homepage and contact form rendered without clipping or horizontal overflow. Screenshots are preserved under `artifacts/native-safari-2026-08-10/`.

## Production verification

Cloudflare deployed the exact production Worker configuration and client artifact. A full zone cache purge removed the prior HTML release.

- All five canonical routes returned HTTP 200 and candidate marker `20260810-4d4b5c911fc4`.
- Live HTML matched the candidate after normalizing Cloudflare's bot-management link and challenge-script injection.
- Sitemap, robots, favicon, and representative Open Graph image returned HTTP 200.
- The apex preserved the path and query while redirecting directly to the canonical `www` hostname.
- Production WebKit passed all five routes and the mobile navigation interaction.
- Native production Safari rendered the canonical homepage and contact form on the dedicated Simulator.

No DNS change, production migration, form submission, or email delivery test was performed in this release.
