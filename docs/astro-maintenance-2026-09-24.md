# Astro maintenance, September 24, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: d41207d7faae884e41c38f946443ffa7586974b2. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-24

## Verified outcome

Recorded: 2026-09-24T12:24:54.302650+00:00

Updated compatible dependencies. Deferred homepage images below the header with lazy loading and async decoding, retained eager header images and the high-priority hero preload, and added a regression test. Revalidated the full build and staged it without rebuilding. Preserved yesterday's first 99-score report separately.

Complete final private verify passed, including 36 browser tests, three intentional skips and 96 composition checks. The exact build was uploaded to the existing staging Worker, seven HTTP 200 endpoints match frozen candidate bytes. First mobile and first desktop PageSpeed each score 100 Performance, 100 Accessibility, 100 Best Practices and 100 SEO. Both have the correct final URL, successful document audits, no runtime errors and no warnings. Hosted iPhone-profile WebKit homepage load and scroll also pass.

Remaining: Unlock the Mac, select and record a dedicated explicit Simulator UDID, and complete native Safari acceptance of this exact candidate. Recheck remaining candidate-bound production approvals before promotion. Preserve both first-run all-100 PSI reports and staging identity.

Native Safari: Mac locked, no native acceptance and no new Simulator UDID claimed.

Staging: Deployed exact candidate to existing impactpockets-www-staging Worker without rebuilding; all seven checked endpoints match candidate bytes.

No production deployment or remote push. Full record: [current site results](</Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-24/site-results.json>).
