# Astro maintenance, September 25, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 66665da096b542a613ff06a91eb8e6ee71d9b1c4. Toolkit: 9b5b89988ef1ce26e4c9fd3bbc83ea50c44975a5. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-25

## Verified outcome

Recorded: 2026-09-25T12:29:30.409862+00:00

Updated compatible dependencies. Fixed narrow-screen partner caption containment and process-line overlap. Kept screen-reader bridge headings fully clipped and added a test proving the visual-heading exclusion can never mask a visible heading. Enabled full interface screenshots. Rebuilt, validated and uploaded the exact frozen artifact.

The final complete private verify passes: 36 browser cases, 3 intentional platform skips, 50 interface checks and 96 composition checks. Exact staging upload and seven byte-matched HTTP 200 endpoints pass. Hosted iPhone WebKit passes. First mobile PageSpeed scores 99/100/100/100, valid audited document with no runtime warnings. Desktop was not run because the current toolkit stops at the first scored failure.

Remaining: Profile first-paint and Speed Index using the preserved audit and private frozen artifact. Make a supported fix before creating another candidate. Unlock the Mac and use a separate explicit Simulator UDID for current-candidate native acceptance. Then complete staging/mobile/desktop gates and the production canary workflow.

Native Safari: current Mac is locked. Prior candidate results are not reused. No new Simulator UDID or native pass claimed.

Staging: Exact frozen artifact uploaded to existing impactpockets-www-staging; all seven verified endpoints match candidate bytes.

Production: not deployed. GitHub: not pushed. Full evidence: [site results](</Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-25/site-results.json>).
