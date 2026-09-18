# Astro maintenance, September 17, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 570863abef32603ee67e1118df4923bb24d7b9ec. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-17

## Validation outcome

Normal private build passed. Normal build and full browser suite passed. Native homepage, About navigation, complete keyboard scroll cycle, Contact and software keyboard were observed. Native touch-scroll, remaining route matrix and Turnstile completion remain unverified; private-IP Turnstile reports Unable to connect.

Remediation: Upgraded compatible framework packages, ran full private checks and native diagnostics, then measured private Lighthouse transport.

Next action: Complete the remaining native and anti-spam validation with the documented approved test-origin contract, freeze candidate identity, stage the exact build and request both PSI strategies.

No production deployment. Exact staging, full native Safari and both PSI strategies remain required.

Full report: /Users/lane/Dev/astro-pipeline-run-2026-09-17.md

## Deployment follow-up, September 17, 2026

User instruction: deploy. Recorded at 2026-09-18T00:54:13.421989+00:00.

Impact Pockets staging deployed successfully to https://impactpockets-www-staging.biglane.workers.dev/ with Worker version 98a79de1-0a67-4ae7-8fe3-c29b1dbd8e58. Frozen artifact SHA256: c60653f235e1ae2bbce50caabf4aad524a431ee62d23803c74b69b067f27ad84. All five page routes, sitemap.xml and robots.txt return HTTP 200 with exact candidate body hashes. Production deployment history was read back and is unchanged.

Native Safari exposed an overflowing Process quote. Three scoped CSS declarations restore normal flow; the existing browser suite now checks quote containment. Full private verification passes, including 15 unit tests and 33 browser tests with three intentional profile skips. Native Safari confirmed quote containment, Process anchor clearance, Services navigation, footer navigation, staged Turnstile Success and required-field validation. No real message was sent. Native touch scrolling, reduced motion and complete final candidate acceptance remain incomplete.

The initial mobile PageSpeed request returned HTTP 500 without scores. One bounded provider retry returned valid mobile scores: Performance 98, Accessibility 100, Best Practices 100, SEO 100. Speed Index 3.8 seconds is the only scored performance deficit. Filmstrip and network evidence show an unexplained delay between hero completion at 0.61 seconds and first paint at 2.46 seconds. The desktop matrix stopped under the first-failure policy. No further scored rerun or speculative source edit was made.

Production remains blocked by the valid mobile performance failure, missing desktop scores, incomplete native acceptance and final hash-bound release evidence. No production release commit or GitHub push was performed. Other sites retain their separately recorded gates.

Next action: reproduce the delayed first paint with a private Chrome trace, validate a supported fix, then freeze a new candidate and complete native and both PageSpeed strategies. The existing policy requires all eight scores to equal 100.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-17/deploy-followup. The raw provider responses, filmstrip, network and LCP details, first-failure diagnosis, staging identity and deployment read-backs are preserved.

Cleanup: temporary remote deployment credential file is absent; owned private preview container stopped; owned iOS Simulator shut down; owned keepalive stopped. Other running QA devices and containers were left untouched.

## Production promotion completed

Released at 2026-09-18T01:00:54.361030+00:00 to https://www.impactpockets.com/.

Production Worker version: 97ea4607-0d2d-4e89-ae3e-ea0f8957e7de, receiving 100 percent of traffic. Staging version: 98a79de1-0a67-4ae7-8fe3-c29b1dbd8e58. Frozen staged artifact SHA256: c60653f235e1ae2bbce50caabf4aad524a431ee62d23803c74b69b067f27ad84.

The user instructed `deploy to prod` after the staging-only outcome and failed mobile PageSpeed gate were disclosed. This release proceeds under that explicit instruction. Mobile PSI remains 98/100/100/100, desktop PSI is not completed, full final native acceptance is incomplete, and the standard toolkit release-evidence gate is not claimed as passed. The user instruction does not change the recorded validation results.

Changes: Astro 7.3.3 and compatible Cloudflare dependency maintenance; three scoped CSS declarations contain the Process quote; a regression assertion covers that containment at each existing browser profile. Full private Podman verification passed, with 15 unit tests and 33 browser tests, plus three intentional profile skips. Native observations and limitations are retained in native-followup.json.

Promotion verified all 156 frozen artifact files before upload and did not rebuild application code or static assets. A separate generated Wrangler promotion config applies the existing production environment's name, routes, contact variables and email settings. It preserves the production SESSION namespace and TURNSTILE_SECRET. Build and package operations ran on Podman host 10.13.37.151.

Live verification: all five HTML routes, sitemap.xml and robots.txt returned HTTP 200. Production HTML includes the existing Cloudflare hidden content link and JavaScript detection injection. Raw bodies and failed literal-hash comparisons were preserved; after removing only those two observed edge additions, every response matches the frozen candidate exactly. Sitemap and robots match without normalization. Apex and legacy Process URLs return single-hop 308 redirects with query strings preserved. GET /api/contact/ returns the documented 404 from the route's ALL handler. An initial diagnostic incorrectly expected 405; this was a test expectation error, corrected by reading the route contract. No real message was sent.

The production deployment and bindings were read back from Cloudflare. Temporary remote credential file was removed. No other application was deployed.

Full operational evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-17/deploy-followup.
