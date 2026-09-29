# Astro maintenance, September 28, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 714f658cc01a73c1574db40d768121a8b83655c6. Toolkit: 9b5b89988ef1ce26e4c9fd3bbc83ea50c44975a5. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-28

## Current run outcome

Recorded 2026-09-28T12:21:57.626765+00:00. Normal build: passed.

Normal build, diagnostics, unit, sitemap, SEO, health, semantic, editorial, sharpness and interface checks pass. Browser suite: 36 passed and 3 intentional skips. Complete verification and isolated composition verification both fail WebKit desktop incubation vertical fill, 47.2% versus required 48%. A targeted motion diagnostic measures 50.4% at rest, so the suite-state discrepancy requires a deterministic reproduction, not a lowered threshold. One unscored hosted trace records 11 requests, 100615 bytes, hero response end 431 ms and first/LCP paint 560 ms. It does not reproduce the preserved September 25 PSI failure.

Updated @cloudflare/vite-plugin 1.60.2 to 1.61.0, @cloudflare/workers-types 5.20260927.1 to 5.20260928.1, wrangler 4.141.0 to 4.142.0. Preserved prior work, completed tracked-upstream fetch and qualified fast-forward-only pull, installed and validated on Podman. Preserved first-failure filmstrip and gathered one bounded unscored hosted browser trace plus an isolated motion-state diagnostic.

Next action: Reproduce the composition suite state against the isolated motion diagnostic, resolve the discrepancy without lowering the 48% threshold, then qualify unlocked native Safari and the exact staging artifact. Preserve the first scored PSI failure; run a new full matrix only after a supported fix and candidate qualification.

Blocker scope: Local release validation, staging and production. No staging or production deployment or Git push. Native Safari is blocked by the locked session. Current candidate mobile and desktop PageSpeed evidence is unavailable; all required scores remain 100.
