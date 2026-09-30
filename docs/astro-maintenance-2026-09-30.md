# Astro maintenance, September 30, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: e8b1374d00ea1b267427e40037c8818860951ca1. Toolkit: 1275b680e3cc3c2d0446fdb346891f92f25ce4d5. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-30

## Final validation outcome

The final candidate passed complete private verification on the Podman host, including dependency audit, Astro check, 15 unit tests, build, sitemap, SEO, AEO, image, brand, site health, semantic SEO, content quality, render sharpness, side navigation, interface quality, visual composition, and 36 browser tests with 3 profile-inapplicable skips.

No active public legacy GovSoft destination required replacement. Generated HTML scan has zero govsoft.us references.

Xcode 27 Device Hub replaced the missing Simulator.app workflow. Native Safari passed on an isolated iPhone 17 Pro simulator running iOS 26.5, UDID 01472FC1-95D2-42EE-97FB-7BDA34E086D6. Staging and production screenshots are preserved under artifacts/maintenance-2026-09-30/native-safari.

The exact candidate was deployed to https://impactpockets-www-staging.biglane.workers.dev and passed 24 staged WebKit tests with 2 profile-inapplicable skips. PageSpeed returned 100 for Performance, Accessibility, Best Practices, and SEO for both mobile and desktop.

Production Worker version 586da9cd-72c2-4f5f-a3e2-a50d137bbb5e was deployed to https://www.impactpockets.com/. All five HTML routes, sitemap.xml, and robots.txt returned HTTP 200. The apex redirects to the canonical www hostname with HTTP 308. The canonical link is correct.

Post-release WebKit passed 24 tests with 2 profile-inapplicable skips in the existing Playwright 1.63.0 Podman image. The host DNS policy sinkholes Cloudflare's injected analytics hostname, so the isolated browser container mapped that provider hostname to its current authoritative address without changing host DNS or test assertions. Native Safari then passed the production homepage, mobile menu, About route, and scrolling on the same explicit UDID.

See [production evidence](release-evidence/2026-09-30-production/README.md) and [portfolio report](/Users/lane/Dev/astro-pipeline-run-2026-09-30.md) for the complete run context.
