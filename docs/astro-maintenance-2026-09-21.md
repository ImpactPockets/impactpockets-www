# Astro maintenance, September 21, 2026

Recorded: 2026-09-21T08:29:01.333918-04:00

Updated Workers types, resolved lockfile and refreshed execution controls. Preserved the first hosted mobile PSI 98/100/100/100 failure and its trace diagnosis. Current private trace does not reproduce the old hero render delay, so no speculative source fix was made.

Full private verify passes, including 15 unit tests and 33 browser tests, with three intentional skips. Native menu, Contact navigation and input focus work; touch scrolling remains unverified. One throttled private Chrome trace paints at 1124ms and records hero LCP at 1180ms. This is not a hosted PSI score.

All build and browser work ran in isolated Podman containers on 10.13.37.151. No Cloudflare build or deployment was performed.

Remaining gate: Native touch acceptance and hosted performance. Finish native touch and complete form acceptance using reliable Simulator input, then freeze and stage the exact candidate and meet all eight PSI scores.

Evidence: [00-impactpockets-20260824-upstream](</Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-21/evidence/00-impactpockets-20260824-upstream>).

No production release or remote push is claimed.
