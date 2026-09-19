# Astro maintenance, September 18, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 2d344a052a68c924973673162c6704ac695e74a5. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-18

## Validation outcome

Normal private build passed. Complete offline verify passed, 15 unit and 33 browser tests, three intentional skips. Native Home, Process and Contact rendered and navigation worked; touch scrolling remains unverified and private-IP Turnstile cannot connect.

Remediation: Updated Wrangler, Workers types and Cloudflare Vite plugin; captured private mobile/desktop and existing-stage mobile Chrome traces. Existing staged homepage bytes match the previously audited homepage.

Next action: The private and existing-stage traces do not reproduce the delayed paint; preserve the prior failed PSI and avoid speculative performance edits. Complete native touch acceptance, freeze the updated dependency candidate, then stage and run the full eight-score PSI matrix.

No production deployment. Exact staging, complete native Safari and both hosted PSI strategies remain required.

Full report: /Users/lane/Dev/astro-pipeline-run-2026-09-18.md
