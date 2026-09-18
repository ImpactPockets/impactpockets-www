# Impact Pockets production, September 17, 2026

Released at 2026-09-18T01:00:54.361030+00:00 to https://www.impactpockets.com/.

Production Worker version: 97ea4607-0d2d-4e89-ae3e-ea0f8957e7de, receiving 100 percent of traffic. Staging version: 98a79de1-0a67-4ae7-8fe3-c29b1dbd8e58. Frozen staged artifact SHA256: c60653f235e1ae2bbce50caabf4aad524a431ee62d23803c74b69b067f27ad84.

The user instructed `deploy to prod` after the staging-only outcome and failed mobile PageSpeed gate were disclosed. This release proceeds under that explicit instruction. Mobile PSI remains 98/100/100/100, desktop PSI is not completed, full final native acceptance is incomplete, and the standard toolkit release-evidence gate is not claimed as passed. The user instruction does not change the recorded validation results.

Changes: Astro 7.3.3 and compatible Cloudflare dependency maintenance; three scoped CSS declarations contain the Process quote; a regression assertion covers that containment at each existing browser profile. Full private Podman verification passed, with 15 unit tests and 33 browser tests, plus three intentional profile skips. Native observations and limitations are retained in native-followup.json.

Promotion verified all 156 frozen artifact files before upload and did not rebuild application code or static assets. A separate generated Wrangler promotion config applies the existing production environment's name, routes, contact variables and email settings. It preserves the production SESSION namespace and TURNSTILE_SECRET. Build and package operations ran on Podman host 10.13.37.151.

Live verification: all five HTML routes, sitemap.xml and robots.txt returned HTTP 200. Production HTML includes the existing Cloudflare hidden content link and JavaScript detection injection. Raw bodies and failed literal-hash comparisons were preserved; after removing only those two observed edge additions, every response matches the frozen candidate exactly. Sitemap and robots match without normalization. Apex and legacy Process URLs return single-hop 308 redirects with query strings preserved. GET /api/contact/ returns the documented 404 from the route's ALL handler. An initial diagnostic incorrectly expected 405; this was a test expectation error, corrected by reading the route contract. No real message was sent.

The production deployment and bindings were read back from Cloudflare. Temporary remote credential file was removed. No other application was deployed.

Full operational evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-17/deploy-followup.
