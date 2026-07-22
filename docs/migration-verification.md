# Astro Migration Verification

## Outcome

The five-page Impact Pockets site is represented in Astro without redesigning the original. Each Astro page imports its corresponding checked-in HTML file as raw source. `LegacyDocument.astro` preserves the original body, stylesheet, scripts, and image assets, then applies only routing, metadata, image-dimension, and form-security transformations.

The root HTML files, `css/styles.css`, `js/main.js`, and `images/` directory remain the visual and content source of truth.

## Visual fidelity

Chromium full-page screenshots were captured at 1440 by 900 and 390 by 844. Lazy images were exercised before capture. The external Turnstile script was stubbed so the comparison measured the original layout rather than third-party widget pixels.

| Page | Desktop changed pixels | Mobile changed pixels |
|---|---:|---:|
| Home | 0 | 0 |
| About | 0 | 0 |
| Process | 0 | 0 |
| Services | 0 | 0 |
| Contact | 0 | 0 |

Reference captures are in `artifacts/visual-fidelity/source-loaded/`. Astro captures are in `artifacts/visual-fidelity/astro-loaded/`.

The production Contact page intentionally differs after Cloudflare loads the managed Turnstile widget. The original field layout and Send button remain in place. Public email references now show `hello@impactpockets.com` by owner direction, and private form delivery targets `lane@impactpockets.com`.

After the Go for Launch render-sharpness remediation, the five pages were recaptured at the same viewports. The required switch to browser-default font smoothing creates subpixel rasterization differences while preserving page dimensions, composition, spacing, and asset geometry. A controlled comparison that applies the same smoothing setting to the source remains below 0.34 percent changed pixels on every route and viewport.

## Verification

Passed locally on 2026-07-21:

- Astro Check, 0 errors, 0 warnings, 0 hints
- Unit tests, 11 passed
- Build and sitemap verification, 5 pages
- SEO, image, site-health, and semantic SEO gates
- Content quality, 0 errors and 4 inherited copy warnings
- Render sharpness, 0 findings after self-hosting the original Jost files, restoring browser-default smoothing, and declaring intentional transforms
- Side-navigation audit
- Browser coverage, 24 passed and 3 viewport-specific skips across Chromium, desktop WebKit, and iPhone WebKit

The full release chain is blocked by the current brand guide. It requires the primary logo to render at least 180 CSS pixels wide with clear space on every side. The original site renders the header logo at 136 pixels and the footer logo at 157 pixels, and the desktop header has no left clear space. `npm run verify:brand` records all three failures. Increasing the logo sizes would change the approved 1:1 layout, so that conflict has not been silently resolved.

## Release status

The corrected candidate has not been promoted to `www.impactpockets.com`. Production remains unchanged. See `cloudflare-worker-release.md` for the verified Email Sending state and the remaining staging form gate.
