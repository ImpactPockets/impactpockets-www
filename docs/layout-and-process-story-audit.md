# Layout And Process Story Audit

## Scope

This review covers all five public routes at expanded desktop, compact desktop, tablet, mobile, and 320 CSS pixel widths. It also covers Chromium, Playwright WebKit, JavaScript-disabled rendering, reduced-motion rendering, horizontal overflow, section gaps, and every raster graphic that explained a process or sequence.

The implementation uses Go for Launch revision `59247c60f2bda03731ccf7f7dfa9cb948b4ae82b`.

## Findings By Route

### Home

The specialization graphic was too small relative to its section on desktop. The mobile stylesheet reduced the original launch process image to zero width and height, so mobile visitors received the heading and button without the actual three-step process.

Both graphics are now semantic ordered lists. The specialization story becomes a vertical connected sequence on mobile. The launch process becomes a vertical timeline on mobile and a stepped sequence on desktop. Section spacing now uses a consistent responsive rhythm instead of fixed 150 pixel gaps.

### About Impact Pockets

This route does not contain a process graphic. The two partner profiles now sit in individual paper-toned panels with consistent portrait treatment and tighter spacing between them. The value points use the same white card surface used elsewhere, and the FAQ starts after a deliberate section break instead of an oversized white field.

### Our Process

The discovery and proforma graphics contained important text that was not exposed to assistive technology. At phone width, the graphics and supporting cards became small, pale, and visually disconnected from their stage headings. Stage 2, Stage 4, and Stage 5 also depended on small raster icons to establish sequence.

The route now contains five semantic stage stories plus a sixth partnership story. Discovery questions, business analysis checks, proforma design, investor testing, formal launch responsibilities, and General Partnership roles are readable HTML. The layouts use an ordered visual path on desktop and a consistent vertical timeline on mobile. All stage content remains visible when JavaScript is disabled.

The initial semantic conversion still inherited legacy flex, position, and card rules. Those rules pushed the hero card outside its artboard, stranded the Stage 4 outcome below the step cards, split Stage 5 into unrelated columns, and left oversized empty cards in the partnership section. The revised page replaces those hybrids with one narrative system:

- A native five-stage anchor rail remains below the site header and identifies the active stage as the reader scrolls.
- Stage 1 turns the three discovery questions into a connected decision path.
- Stage 2 turns the operating review into a proof sequence ending in Capital Follows Track Record.
- Stage 3 retains the dark proforma blueprint and its three complete structural elements.
- Stage 4 connects feedback, alignment, and material optimization to one explicit market-readiness outcome.
- Stage 5 uses a four-step launch timeline instead of two disconnected card columns.
- Our Role in Your Fund connects the two conditional compensation roles to the shared commitment statement.
- How Funds Make Money and Why Ohio now render as equal, complete cards instead of an offset layout that could hide the first card.

Desktop stages use balanced alternating columns. Tablet and mobile stages put the narrative before the visual, then convert every visual sequence into a single connected vertical path. Section spacing is capped with responsive values so adjoining sections do not create the large empty fields visible in the rejected layouts.

The persistent stage rail remains specific to this route. It is functional navigation for a long sequential story. Repeating it on short, non-sequential routes would add visual noise without adding orientation.

### Our Services

The fund incubation and technology graphics compressed into small images on mobile and left large quiet areas around copy that was difficult to read. Both are now full-width semantic stories that remain readable at 320 pixels. The alternating service layout retains its original identity while the section rhythm is more even.

Advisory Services now uses one balanced two-column grid with a full-width third capability on desktop and one readable stack on mobile. Tax Optimization is contained in a raised panel, the differentiator cards share the sitewide surface treatment, and the final call to action is a dark, bounded destination instead of an isolated block of text in a white field.

A follow-up spacing review found that the Advisory quote rendered outside its primary grid, the Tax capability group was shifted 50 pixels beyond its intended right padding, and major Services sections used 72 to 112 pixel insets that created excessive blank transitions. The revised layout keeps the Advisory quote with its narrative, vertically balances the capability grid, removes the Tax offset, and gives all three Tax cards equal responsive geometry. Major section insets now use a 56 to 72 pixel desktop rhythm and a 48 to 56 pixel mobile rhythm. Advisory Services and Tax Optimization are now marked visual artboards, increasing automated composition coverage from 84 to 96 checks across Chromium and WebKit.

### Contact Us

This route does not contain a process graphic. The address, public `hello@impactpockets.com` email, and form are now a coordinated contact surface. The form fields use a subtle paper background, visible focus treatment, and the shared corner scale. Turnstile placement and form behavior remain intact. The FAQ rhythm is tighter, with no horizontal overflow.

## Sitewide Polish System

The rounded treatment introduced on Our Process is now a restrained sitewide system instead of a route-specific visual exception.

- Content cards use 10, 16, 24, or 28 pixel radii according to scale.
- Major pale sections use one paper surface, one border color, and one low-contrast shadow family.
- Hero artboards on Home, About, and Services use rounded lower corners, while headers and footers remain square, full-width anchors.
- Buttons use the smallest radius and a brief lift on hover or keyboard focus.
- Headings use tighter tracking and balanced wrapping. Paragraphs use improved wrapping without changing the approved copy.
- Section padding follows a responsive 58 to 96 pixel rhythm instead of unrelated fixed gaps.
- Navigation labels do not wrap at desktop widths, and every link or button maintains a 44 pixel interaction height.
- Footer spacing is tighter, the approved sharp logo is retained, and social icons remain removed.

The system groups related content without turning every element into a pill. It keeps the original navy, orange, white, and pale gray identity while making the full site feel intentionally related to the improved process page.

## Typography And Reading Refinement

The second polish pass treated legibility as a sitewide system rather than a set of isolated font-size fixes. The audit found that standard copy rendered at 14 pixels on desktop and mobile, several process labels fell below 15 pixels, long home-page paragraphs extended beyond 900 pixels, and the process page paired very large stage titles with comparatively small explanatory text.

The revised system now provides:

- A 16 pixel minimum for meaningful body copy, field text, process labels, and card descriptions.
- A fluid 16 to 17 pixel body scale with a 1.65 to 1.7 line height for longer reading.
- A restrained 17 to 19 pixel lead scale for hero and introductory copy.
- Responsive heading scales with 600 weight, balanced wrapping, and less abrupt jumps between section titles and supporting text.
- A maximum reading measure of approximately 62 characters on desktop and 34 characters on mobile for long narrative copy.
- Stronger labels in the Technology and AI sequence so the content fills its artboard and remains easy to scan.
- Native 16 pixel form controls on mobile to avoid browser zoom and preserve comfortable input reading.

Small uppercase eyebrows remain at 14 pixels because they function as navigation and section labels rather than reading copy. All other meaningful copy is at least 16 pixels. The revision preserves the approved Jost typeface, page content, hierarchy, and responsive layouts while reducing strain on desktop and mobile.

## Content Preservation Matrix

| Original graphic or icon group | Preserved story content |
|---|---|
| `images/impact-pocket-specilaize.png` | Incubating Private Equity Funds, Unlocking Untapped Opportunities, Sharing Risks |
| `images/pocket-process-diagram.png` | Fund Proforma And Legal Formation, Fundraising Strategy, Investment Distribution |
| `images/Group 1321315445.png` | What's Your Edge?, What Markets Do You Know Better Than Anyone?, Are You Ready To Place Capital? |
| Stage 2 icon group | Deep dive into your operational and financial history, Assess market potential and fundability, Identify red flags and growth levers |
| `images/performa.png` | Deal Thesis And Capital Deployment Framework, Management And Performance Fee Structure, Target IRRs And Return Waterfalls |
| Stage 4 icon group | Gather investor feedback, Gauge appetite and alignment, Optimize materials based on real world input |
| Stage 5 icon group | Entity and legal structuring, Technology and back-office setup if needed, LP agreement drafting, Recruitment services |
| Our Role plain card group | Management-team compensation condition, fund-specific technology compensation condition, shared investment of time, energy, and reputation |
| `images/our-services/fund-incobation.png` | End-To-End Fund Setup Support, Trusted Vendor Recommendations, Budget-Friendly Launch Strategies |
| `images/our-services/Group 1321315542@2x.png` | AI Use-Case Design For PE Workflows, Tech Evaluations For Investment Decisions, International Cybersecurity Expertise |

Six large infographic references and ten supporting process icon references were removed. No process concept was removed. Grammar was repaired in one discovery question, and capitalization was normalized for Recruitment services.

## Motion And Accessibility Contract

- Ordered lists and text render before JavaScript runs.
- JavaScript adds one-time, in-view sequencing only.
- Connector motion explains direction and completion rather than adding decorative movement.
- JavaScript updates the active item in the native stage rail while leaving every anchor usable without JavaScript.
- `prefers-reduced-motion: reduce` disables transitions and displays the complete story immediately.
- A JavaScript-disabled mobile check confirmed full text, opacity 1, and zero horizontal overflow.
- Public navigation and calls to action remain native links.

## Layout Evidence

- Interface quality: 5 routes, 50 browser and viewport checks, 0 errors, 0 warnings.
- Visual composition: 84 artboard checks across Chromium and WebKit passed.
- Measured horizontal overflow: 0 pixels on all five routes at 1440, 390, and 320 pixel widths.
- Minimum-width composition checks confirm the home process cards use the available panel width without clipping.
- Semantic story count: 2 on Home, 6 on Our Process, 2 on Our Services.

Final release evidence is stored with the production candidate after the complete Go for Launch staging and production gate passes.
