# Go for Launch Execution-Control Record

## Task envelope

- Requested outcome: Upgrade and validate the synchronized Impact Pockets Astro release source while removing the discovered source compromise.
- Acceptance owner: Lane Campbell
- Technical owner: Lane Campbell
- Date opened: 2026-08-25
- Target repository and branch: Impact Pockets website, `codex/astro-maintenance-20260824-impactpockets`
- Initial commit: `9ddda80e6d3b2a8b3f90df1d26510e38d33b1202`
- Initial working-tree state: Clean after fetch and fast-forward-only pull, then compromised `astro.config.mjs` was discovered before any project command ran.
- Go for Launch revision: `8eeae5fdda7cdde53521c8c6df674429ea4f92c8`
- Routes, systems, and environments in scope: Five public routes, contact Worker, local Podman validation on `10.13.37.151`, and dry Cloudflare packaging.
- Explicit exclusions: Production deployment, DNS changes, form delivery, production email, and production migration.
- Actions requiring separate authorization: Named Open Graph approval, staging deployment, production deployment, DNS or route mutation, and real form delivery.
- Deployment authority: No deployment is authorized by this maintenance checkpoint.
- Rollback method: Restore the pre-maintenance source revision or discard the isolated worktree after preserving evidence.

## Completion conditions

- Required functional result: Remove the obfuscated payload, update the compatible framework set, and pass the strongest safe local validation.
- Required user-visible result: No intended public content or design change.
- Required build and test commands: Execution control, incremental decision, clean install, audit, `npm run verify`, and Wrangler dry packaging.
- Required browser and device evidence: Complete Chromium and Playwright WebKit suite in Podman. Native Safari remains a production gate only after exact staging.
- Required PageSpeed evidence: Eight scores of 100 for a future exact staged candidate.
- Required human approvals: Named hash-bound Open Graph approval before staging or production.
- Required production verification: Not in scope for this maintenance checkpoint.

## Control thresholds

- Maximum unsuccessful attempts per blocker: 2
- Active investigation limit per blocker: 90 minutes
- Progress-record interval: 30 minutes of active work
- Owner-approved exception, if any: None
- Exception rationale and supporting evidence: None

These thresholds control when work pauses. They do not waive or downgrade any mandatory release gate.

## Request and transfer budget

- Lane, `application-release` or `editorial-publish`: `application-release`
- Estimated external requests: 1200
- Maximum external requests: 5000
- Estimated transfer bytes: 500000000
- Maximum transfer bytes: 1000000000
- Per-gate estimation method: Git and registry preflight plus one clean package install and one complete local browser suite. No public archive crawl is planned.
- Observed external requests: Pending
- Observed transfer bytes: Pending
- Owner approval when the maximum exceeds 10,000 requests or 1,000,000,000 bytes: Not required
- Stop evidence when a maximum was reached: Not reached

- Machine-readable control config: `execution-control.config.mjs`
- Latest control report: `artifacts/execution-control-report-20260825.json`
- Latest control report status: Candidate frozen, production blocked by external release gates

## Representative proof

- Smallest vertical slice or prototype: Restore the exact clean Astro configuration from the parent revision and prove the malicious signature is absent.
- Failure hypothesis it is intended to test: The compromise is isolated to an appended payload in `astro.config.mjs`.
- Automated checks: Repository signature scan and source diff review.
- Human reviewer: Pending owner review
- Reviewed artifact: `astro.config.mjs`
- Decision: Technical repair applied, release approval remains pending.
- Approval date: Pending

## Finding register

- Required outcome: obfuscated network and child-process payload appended to `astro.config.mjs`. Evidence: introduced by `9ddda80e`, only repository signature match. Decision: restore the clean parent configuration and validate remotely. Owner: Lane Campbell.
- Release blocker: Go for Launch branch has no tracked upstream. Evidence: clean toolkit is one ahead and zero behind `origin/main`. Decision: block production until owner-approved upstream or pin. Owner: Lane Campbell.
- Release blocker: named Open Graph approval is not current for a new candidate. Evidence: existing approval belongs to the August 10 candidate. Decision: require named approval before staging. Owner: Lane Campbell.

## Checkpoints

- `2026-08-25T08:07:55-04:00`, orientation at `9ddda80e`: synchronized the clean upstream worktree and found the appended payload before execution. Evidence: signature scan found one affected path. Blocker: source compromise. Next action: restore clean config, update dependencies, and validate in Podman.
- `2026-08-25T08:26:00-04:00`, candidate frozen as `993191fce57e846ad1547e8d17bb7e14fe3c4b1dc41a3ec2f15ece2eec5f28f7`: removed the payload, upgraded the compatible stack, added AEO discovery, and corrected mobile process spacing. Evidence: mandatory checks passed in Podman, 30 browser checks passed with 3 intentional skips, 96 composition checks passed, dry package passed. Blockers: toolkit upstream, exact staging, PageSpeed, native Safari, and named approval. Next action: obtain the reviewed toolkit upstream decision and named approval before exact staging.

## Blocker record

- Blocker: Source compromise in `astro.config.mjs`
- Candidate: No candidate frozen
- First observed: 2026-08-25T08:02:00-04:00
- Active time spent: Less than 30 minutes
- Attempt 1: Restore the exact parent configuration and rescan the repository.
- Attempt 1 result: Payload signature count changed from one to zero.
- Attempt 2: Not required.
- Attempt 2 result: Not applicable.
- Current root-cause hypothesis: Commit `9ddda80e` appended an isolated obfuscated payload to the legitimate Astro configuration.
- Remaining uncertainty: Whether the payload executed on any prior build host and whether any off-repository persistence exists.
- Evidence changed between attempts: yes
- Status: resolved in source, external host review remains recommended

## Blocker decision

- [x] Continue with a specifically supported next attempt
- [ ] Select an alternate implementation
- [ ] Escalate an external dependency
- [ ] Defer outside the active task
- [ ] Roll back to the last known-good release

- Decision owner: Automation scope
- Decision date: 2026-08-25
- Rationale: The payload is isolated to one appended source block and the clean parent configuration is exact and reviewable.
- New bounded action: Run all project commands only in a fresh Podman environment.
- Revised limit, if explicitly approved: None

## Candidate freeze

- Frozen commit: Uncommitted maintenance candidate based on `9ddda80e`
- Build identity: `993191fce57e846ad1547e8d17bb7e14fe3c4b1dc41a3ec2f15ece2eec5f28f7`
- Freeze time: 2026-08-25T08:26:00-04:00
- Incremental-build decision report: `artifacts/incremental-build-decision-20260825.json`
- Selected build mode, `standard`, `incremental`, or `forced`: `forced`
- Cache source and expected restored pages: No cache, zero restored pages
- Full-render parity evidence when incremental: Not applicable
- Features and routes included: Five public pages and the contact Worker
- Follow-up work excluded: Staging, native Safari, PageSpeed, production, and real form delivery
- Complete mandatory suite command: `npm run verify`
- Complete mandatory suite result: Passed after clearing one stale generated preview reservation and rerunning the unchanged browser candidate
- Mobile PageSpeed result: Pending
- Desktop PageSpeed result: Pending
- Chromium result: Passed
- Playwright WebKit result: Passed, including iPhone-profile WebKit
- Native iOS Safari result: Pending exact staging
- Named human approvals: Pending

Any change after this record creates a new candidate and requires the complete mandatory release suite again.

## Promotion and closeout

- Staging candidate verified: No
- Production candidate verified: No
- Canonical hostname verified: Read-only HTTP 200, correct title and canonical, older deployed release identity
- Apex or alternate hostname verified: Read-only direct 308 to `www`, path and query preserved
- Rollback readiness verified: Yes, isolated worktree and known parent configuration
- User-visible result verified: No intended user-visible change
- Final acceptance owner: Lane Campbell
- Final acceptance date: Pending
- Follow-up register location: Automation memory and the current daily run report
