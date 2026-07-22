# Go for Launch Project Record

- Project: Impact Pockets website
- Repository: `https://github.com/ImpactPockets/impactpockets-www.git`
- Canonical hostname: `https://www.impactpockets.com`
- Source revision: `72921002b9c7a6ed2f69b379481122e14cae2d89`
- Go for Launch revision: `4ae5a424c83ffe81c90bf3c6af11f5652fd22812`
- Required local command: `npm run verify`

## Source contract

The checked-in root HTML, CSS, JavaScript, and image assets are authoritative. Astro must not reinterpret, rewrite, or redesign their visible content. `src/layouts/LegacyDocument.astro` is the migration boundary.

Permitted nonvisual transformations are canonical routing, metadata, semantic bridge text that remains visually hidden, intrinsic image metadata, broken local-path normalization, and the Cloudflare-protected contact endpoint.

## Routes

| Canonical route | Source file |
|---|---|
| `/` | `index.html` |
| `/about-impact-pockets/` | `about-impact-pockets.html` |
| `/our-process/` | `our-process.html` |
| `/our-services/` | `our-services.html` |
| `/contact-us/` | `contact-us.html` |

Cloudflare uses the trailing-slash policy required by the current Go for Launch static-route verifier. Legacy `.html` behavior must be tested during staging redirect verification.

## Hard stop

Do not deploy a new staging or production candidate while `npm run verify` fails. A successful build, healthy live host, or visual match does not replace the complete release contract.
