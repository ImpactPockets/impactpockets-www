# Impact Pockets production, September 30, 2026

Released at 2026-09-30T17:03:29Z to https://www.impactpockets.com/.

Production Worker version: 586da9cd-72c2-4f5f-a3e2-a50d137bbb5e. Staging Worker version: ea704b03-8e5d-4e2b-a3cf-bbd166b577b0. Frozen staging build digest: 297bef61eacef87b328f72c83305a4607696d595543e91842263e2972ceccd48. Frozen client digest: 699d05f0326718dede02883adc09c193d34dba9601a9271d474fc92e32f9e8fe.

## Candidate and maintenance

- Astro 7.3.5, Cloudflare adapter 14.3.3, Cloudflare Vite integration 1.62.3, Vite 8.3.1, TypeScript 6.0.3, Wrangler 4.145.0, Playwright 1.63.0.
- Security overrides pin fast-uri 3.1.8 and undici 8.11.2. npm audit reports zero vulnerabilities.
- TypeScript 7 was not selected because Astro check 0.9.10 declares support for TypeScript 5 and 6.
- Source and generated output contain no rendered govsoft.us references. Historical prompt logs retain the automation policy text only.
- Build and browser validation ran on Podman host 10.13.37.151. Native Safari ran on this Mac.

## Release gates

- Astro check: 0 errors and 0 warnings, with 41 informational hints from preserved historical artifacts and test API deprecation guidance.
- Unit tests: 15 passed.
- Full browser matrix: 36 passed and 3 profile-inapplicable skips.
- Staged WebKit matrix: 24 passed and 2 profile-inapplicable skips.
- Interface quality: 50 of 50 checks passed.
- Visual composition: 96 checks passed across Chromium and WebKit.
- Native Safari: passed on iPhone 17 Pro, iOS 26.5, UDID 01472FC1-95D2-42EE-97FB-7BDA34E086D6.
- PageSpeed mobile: 100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO.
- PageSpeed desktop: 100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO.
- Execution control: production-ready with zero findings.

The staged client files and production client files were byte-identical. The staged Worker modules were retained unchanged. Only the generated Wrangler promotion configuration was replaced with the repository's documented production Worker name, routes, origin restrictions, and inherited bindings before deployment.

The first post-release WebKit attempt recorded an environment failure because both the Mac and the Podman host sinkhole static.cloudflareinsights.com, which Cloudflare injects only on the production hostname. The complete live suite was rerun without changing assertions inside the existing Playwright 1.63.0 Podman image, with that single provider hostname mapped to an authoritative address only inside the disposable container. The result was 24 passed and 2 profile-inapplicable skips.

## Live verification

- Five HTML routes returned HTTP 200 with the expected titles.
- sitemap.xml and robots.txt returned HTTP 200.
- The apex returned HTTP 308 to https://www.impactpockets.com/.
- The homepage canonical is https://www.impactpockets.com/.
- Production WebKit and iPhone-profile WebKit passed after deployment.
- Native Safari passed the production homepage, mobile menu, About route, and scrolling.

Machine-readable evidence is stored in artifacts/maintenance-2026-09-30. The temporary PageSpeed credential copy on the Podman host was removed before the production build.
