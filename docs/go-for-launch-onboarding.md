# Go for Launch Project Onboarding Record

## Project identity

- Project: Impact Pockets website
- Repository: `https://github.com/ImpactPockets/impactpockets-www.git`
- Canonical hostname: `https://www.impactpockets.com`
- Project owner: Impact Pockets
- Technical owner: Lane Campbell
- Date reviewed: 2026-07-22
- Go for Launch revision: `646a96eaafd183b83871135c7ae8ff125b9b48bf`
- Local instruction file: `AGENTS.md`
- Project extension record: `docs/go-for-launch-project-extension.md`
- Required build or test command that invokes project extensions: `npm run verify`

## Selected workflows

- [x] Platform migration
- [ ] WordPress migration
- [ ] Webflow migration
- [x] Astro and dependency maintenance
- [x] Sitemap and technical SEO
- [ ] Answer Engine Optimization content work
- [x] Performance and accessibility
- [x] Interface geometry, responsive layout, and route-family differentiation
- [x] WebKit and native iOS Safari testing
- [x] Cloudflare deployment
- [x] Cloudflare forms, Turnstile, and Email Service
- [x] Cloudflare production RUM and edge HTTP observability
- [ ] Scheduled agent maintenance
- [ ] Optional design-system review

## External source decisions

### Source CMS, export, API, or database

- Decision: not used
- Capability supported: the checked-in legacy HTML, CSS, JavaScript, and images are the source
- Account and scope owner: Impact Pockets repository
- Paid plan approved by: not applicable
- Masked access check: local source files and Git history are readable
- Fallback or blocker: none

### Git host

- Decision: required
- Capability supported: source history, branch publication, and release traceability
- Account and scope owner: Impact Pockets GitHub organization
- Paid plan approved by: repository owner
- Masked access check: `git fetch --prune` succeeded on 2026-07-22
- Fallback or blocker: a failed push blocks publication of the release source

### Cloudflare, Turnstile, and Email Service

- Decision: required
- Capability supported: staging and production Workers, DNS route, Turnstile validation, and fixed-destination email delivery
- Account and scope owner: Cloudflare account `00 - Impact Pockets`
- Paid plan approved by: Lane Campbell in this task
- Masked access check: active zone enumeration, Worker access, and Email Sending API delivery succeeded without printing credentials
- Fallback or blocker: none, the production form passed managed Turnstile and Worker acceptance

### Cloudflare Web Analytics and edge HTTP analytics

- Decision: conditional, enabled because approved access exists
- Capability supported: production RUM baseline, LCP element diagnosis, and edge HTTP error rates
- Account and scope owner: Cloudflare account `00 - Impact Pockets`
- Account Analytics Read verified: yes
- Zone analytics read verified, if selected: yes
- Canonical RUM hostname: `www.impactpockets.com`
- Minimum samples and time window: 20 samples per route and device, 24 hours
- Enforcement mode: advisory before release, regressions after release
- Masked access check: baseline query returned 2 RUM route groups and 16,803 edge requests on 2026-07-22
- Fallback or blocker: preserve the report and retain independent PageSpeed, WebKit, and native Safari gates

### Google PageSpeed Insights and optional API credential

- Decision: required for production scoring, API credential is conditional
- Capability supported: production release scores for staging mobile and desktop
- Account and scope owner: public PageSpeed service or approved 1Password credential
- Paid plan approved by: public service requires no paid approval
- Masked access check: exact staging candidate returned eight category scores of 100
- Fallback or blocker: none

### Google Search Console

- Decision: conditional
- Capability supported: property verification and canonical sitemap submission
- Account and scope owner: Impact Pockets
- Paid plan approved by: not applicable
- Masked access check: pending approved connected access
- Fallback or blocker: record a manual handoff if approved access is unavailable, local sitemap verification remains mandatory

### Ahrefs

- Decision: optional
- Capability supported: current public crawl evidence
- Account and scope owner: not assigned for this release
- Paid plan approved by: not approved or required
- Masked access check: not performed
- Fallback or blocker: use approved first-party evidence, Ahrefs absence does not waive mandatory gates

### Analytics, site search, support, sales, and form data

- Decision: conditional
- Capability supported: Cloudflare Web Analytics and the same-origin contact form
- Account and scope owner: Impact Pockets
- Paid plan approved by: Lane Campbell in this task
- Masked access check: Cloudflare analytics query passed, email API message reached the fixed mailbox
- Fallback or blocker: none, real Worker form flows passed on staging and production

### Secret manager

- Decision: required
- Capability supported: Cloudflare, Turnstile, email, and optional PageSpeed credentials
- Account and scope owner: 1Password `AgentWork` vault
- Paid plan approved by: Lane Campbell
- Masked access check: 1Password CLI access succeeded through the approved service account
- Fallback or blocker: never place a credential in the repository, prompt output, URL, or evidence

### Design-system references

- Decision: required for brand assets, optional design-system mode is off
- Capability supported: logo provenance, palette, minimum sizes, and clear space
- Account and scope owner: Impact Pockets marketing repository
- Paid plan approved by: not applicable
- Masked access check: brand-guide and logo SHA-256 values match the approved source
- Fallback or blocker: brand asset verification is mandatory even while the optional framework gate is off

## Local and release environment

- Operating system and version: macOS 26.5.2, build 25F84
- Node and package-manager versions: Node 26.5.0, npm 11.17.0
- Chromium available: yes
- Playwright WebKit available: yes
- Full Xcode installed: yes, Xcode 26.6, build 17F113
- iOS Simulator runtime installed: yes, iOS 26.5
- Simulator device name: Impact Pockets Launch 2026-07-22
- Simulator UDID: `50DAA997-6B4B-4716-9C9D-EA9CBABB5999`
- Native Safari evidence available: yes, exact staging and production form submissions passed
- If no, qualified Mac handoff runner and owner: this Mac is qualified
- If no Mac runner exists, production status: not applicable

## Deployment contract

- Build command: `npm run build`
- Sitemap verification command: `npm run verify:sitemap`
- Full test command: `npm run verify`
- Interface quality verification command: `npm run verify:interface`
- Staging command and URL: `npm run deploy:staging`, `https://impactpockets-www-staging.biglane.workers.dev`
- Production command and project: `npm run deploy:production`, Worker `impactpockets-www`
- Canonical-host verification command: public HTTPS route, sitemap, robots, Open Graph, redirects, WebKit, and native Safari checks
- Deployment authority: Lane Campbell approved production after the complete Go for Launch gate passes

## Approval

- [x] Every selected workflow has its required inputs and completed release evidence.
- [x] Optional services are not presented as universal requirements.
- [x] Paid services have an explicit owner and approval.
- [x] External accounts passed masked access checks where required before staging.
- [x] Secrets remain outside prompts, source, logs, and evidence.
- [x] Non-Mac native Safari limitations are not applicable.
- [x] A qualified Mac runner and dedicated Simulator are assigned for the exact production candidate.
- [x] No blocked required item is being treated as complete.

Approved by: Lane Campbell, production authority in this task

Date: 2026-07-22
