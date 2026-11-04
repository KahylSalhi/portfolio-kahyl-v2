# Feature Specification: Portfolio multipage BTS SIO SISR

**Feature Branch**: `001-portfolio-bts-sisr`

**Created**: 2026-11-04

**Status**: Ready for implementation; owner-provided facts and media remain subject to review

**Input**: User request for an ambitious creative-editorial home-page art direction while preserving the existing multipage portfolio, verified content, accessible network scene, and deployment boundary.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Navigate independent portfolio pages (Priority: P1)

A visitor can use a persistent, responsive navigation to open the home page, projects, profile, technology watch, school journey, and contact as distinct pages. Clicking Kahyl's name returns to the home page. Every page can be opened directly, refreshed, and identified as active in the navigation.

**Why this priority**: The portfolio must no longer require scrolling a single page to discover its main sections.

**Independent Test**: Open each required URL directly, refresh it, use every navigation link, return home from the wordmark, and confirm the current destination is identified.

**Acceptance Scenarios**:

1. **Given** a visitor on any portfolio page, **When** they select a navigation item, **Then** they reach its distinct URL and the matching navigation item is identified as current.
2. **Given** a visitor on any page, **When** they click the owner's name, **Then** they return to `/`.
3. **Given** a visitor opens or refreshes `/`, `/projets`, `/profil`, `/veille-technologique`, `/ecole`, `/contact`, or `/projets/:slug` directly, **Then** the correct page renders without an error.
4. **Given** a visitor opens an unknown project slug, **Then** a useful not-found page provides a route back to projects.
5. **Given** a small-screen visitor, **When** they use the navigation, **Then** every destination remains reachable without horizontal overflow or obscured content.

### User Story 2 - Explore seven truthful project case studies (Priority: P1)

A visitor can browse all seven projects from `/projets`, see a concise factual preview, and open each dedicated case study at `/projets/:slug`.

**Why this priority**: The projects are the portfolio's primary evidence of practical learning.

**Independent Test**: Verify the seven audited entries appear once each, open all seven details by direct URL, and confirm each claim and image is supported by the legacy audit and review.

**Acceptance Scenarios**:

1. **Given** a visitor on `/projets`, **When** they browse the list, **Then** all seven audited entries are present, including the Bash automation/user-management entry, without silently merging it with another.
2. **Given** a visitor opens a project detail, **When** they read it, **Then** known context, technologies, observed work, and limitations are distinguished from missing or unconfirmed facts.
3. **Given** a case study describes a demonstration, prototype, or simulation, **Then** it does not imply real deployment, production use, measured performance, or unverified personal contribution.
4. **Given** a project uses an image from the old portfolio, **Then** that image is served from the new public assets and has been visually checked for private or identifying details.
5. **Given** two Bash entries may overlap, **Then** their relationship remains explicitly unresolved rather than claiming distinct work.

### User Story 3 - Understand the profile, school journey, and technology watch (Priority: P2)

A visitor can read a concise profile and consult separate pages for the school journey and for an editorial technology-watch framework suited to BTS SIO. Missing details are clearly identified rather than guessed. The watch page does not claim that personal research or publications have already been done.

**Why this priority**: Recruiters need context, while outdated or invented details would undermine trust.

**Independent Test**: Compare all displayed profile and education facts with the request and audit; verify unknown school names, dates, and statuses are explicitly marked as awaiting confirmation, and that the watch page distinguishes a proposed framework from completed research.

**Acceptance Scenarios**:

1. **Given** a visitor on `/profil`, **Then** the page uses only approved profile facts and does not expose unapproved contact information.
2. **Given** a visitor on `/ecole`, **Then** confirmed BTS SIO SISR information is distinguished from unconfirmed institution, dates, and prior-study details.
3. **Given** a visitor on `/veille-technologique`, **Then** they find an editorial structure suitable for BTS SIO SISR, with no fabricated personal research, dated findings, or citations.

### User Story 4 - Contact the owner safely (Priority: P2)

A visitor can open the contact page and use only channels whose exact destinations have been approved.

**Why this priority**: Contact must be discoverable without publishing private or unverified details.

**Independent Test**: With no approved values configured, verify that the page explains that public contact details are not yet available and contains no empty, fake, or broken links.

**Acceptance Scenarios**:

1. **Given** no approved public contact destination exists, **When** a visitor opens `/contact`, **Then** no personal address, social URL, form submission, or fabricated channel is shown.
2. **Given** an exact channel value is explicitly approved, **Then** only that approved destination is offered.

### User Story 5 - Experience a lively, accessible editorial design (Priority: P1)

A visitor experiences the existing minimalist editorial identity with intentional ivory, charcoal, electric blue, and coral-orange accents. Page transitions, scroll reveals, project hover treatments, navigation, and links provide restrained feedback without obscuring content or relying on hover.

**Why this priority**: The visual refresh should give the existing portfolio more character without replacing its design or weakening accessibility.

**Independent Test**: Check representative pages at mobile and desktop widths with pointer, touch, keyboard, and reduced motion; confirm readable color contrast, visible focus, and content availability before and without animation.

**Acceptance Scenarios**:

1. **Given** a visitor on any route, **When** a page loads or changes, **Then** restrained transitions preserve readable content and do not cause layout instability.
2. **Given** a visitor hovers or focuses a project, **Then** its editorial hover treatment is available without making its title or destination dependent on hover.
3. **Given** a visitor has enabled reduced motion, **Then** non-essential transitions and reveals are suppressed or reduced.
4. **Given** a visitor uses a mobile device, **Then** animations remain lightweight and no essential interaction requires hover.
5. **Given** a visitor uses a keyboard, **Then** navigation order, active-page semantics, and visible focus are clear.

### User Story 6 - Explore the network scene and project previews (Priority: P1)

A visitor sees an artistic interactive network scene beside the existing home-page introduction and can explore technical information for selected equipment using either the scene or accessible controls. On `/projets`, the visitor can reveal reviewed project imagery and discover each existing case study through restrained pointer, keyboard, and touch-friendly interactions.

**Why this priority**: These focused visual improvements bring the approved identity to life while preserving the existing editorial pages, navigation, and case-study content.

**Independent Test**: Verify the home scene loads lazily, animates gently, responds to pointer interaction, exposes Router/Switch/Server information through both pointer and keyboard-operable controls, and falls back without blocking content. On `/projets`, verify only reviewed images appear in previews on pointer, keyboard, and touch layouts.

**Acceptance Scenarios**:

1. **Given** a visitor loads the home page with WebGL available, **When** the hero enters the viewport and hydration is ready, **Then** a refined 3D network illustration loads without delaying the name, text, navigation, or project/contact links.
2. **Given** a visitor uses the network scene, **When** they select a Router, Switch, or Server node by pointer or accessible control, **Then** its corresponding technical information is available in semantic HTML.
3. **Given** WebGL is unavailable, the 3D code has not loaded, or reduced motion is enabled, **Then** the existing static illustration and all home-page content remain available.
4. **Given** a visitor moves the pointer over the scene, **Then** the network reacts subtly without taking control away from page navigation.
5. **Given** a visitor points at, tabs to, or taps a project entry, **Then** its preview may reveal a verified image associated with that project and its title, status, and case-study link remain available.
6. **Given** a project has no approved preview image or the visitor is using a touch device, **Then** no invented image is shown and the project remains discoverable through its editorial row.
7. **Given** a visitor scrolls through the project index, **Then** title and separator movement is subtle, brief, and suppressed or reduced when reduced motion is preferred.

### User Story 7 - Experience a distinctive creative home page (Priority: P1)

A visitor encounters a confident editorial home page with a typographic hero that interacts visually with the existing network scene, then discovers confirmed profile context, the systems and networking focus, selected verified projects, and the contact page through clearly differentiated sections.

**Why this priority**: The home page is the portfolio's first impression and currently under-expresses the approved Hybrid Minimal identity and the technical theme.

**Independent Test**: Check the home page at 360 px, 768 px, and 1440 px; confirm the hero visibly identifies Kahyl Salhi and BTS SIO SISR, the network scene has a prominent but non-blocking role, all four visual section treatments are present, selected projects link to existing case studies and use only reviewed media, and all content remains readable with reduced motion or without WebGL.

**Acceptance Scenarios**:

1. **Given** a visitor opens `/`, **When** the hero is displayed, **Then** an expressive BUILDING CONNECTIONS composition connects the network scene visually to the title and clearly identifies Kahyl Salhi, BTS SIO SISR, and the apprenticeship goal using confirmed profile data.
2. **Given** a visitor scrolls the home page, **When** they encounter the profile, systems/networking, selected-projects, and closing-contact sections, **Then** each section has a deliberate visual identity and a clear hierarchy without generic portfolio cards or unsupported claims.
3. **Given** the home projects section renders, **When** it displays featured work, **Then** each title, summary, status, route, and image comes from the existing project data; only existing reviewed media is displayed.
4. **Given** motion is reduced or WebGL is unavailable, **When** the visitor uses the home page, **Then** section content, project destinations, profile facts, and contact navigation remain available and legible.
5. **Given** a visitor opens `/` on a narrow screen, **When** the hero and sections adapt, **Then** the layout preserves the editorial hierarchy and introduces no horizontal scrolling or obscured content.

### User Story 8 - Explore a balanced, sculptural network hero (Priority: P1)

A visitor sees the “BUILDING CONNECTIONS” title and network scene as equally intentional parts of the desktop hero. The typography remains editorial, while the network is rendered as a deeper, more varied and interactive sculptural composition with restrained electric-blue and coral accents.

**Why this priority**: The hero is the first impression; improved equipment visibility and depth directly address the requested final visual refinement.

**Independent Test**: At desktop widths, verify that the scene occupies approximately 50–60% of the hero composition, the title no longer obscures most equipment, all three technical controls remain operable, the project action is visually primary, and reduced motion or unavailable WebGL preserves the fallback and readable content.

**Acceptance Scenarios**:

1. **Given** a visitor opens the home page on desktop, **When** the hero renders, **Then** the title is slightly smaller than the prior composition and the scene occupies 50–60% of the hero's visual width without losing the title's editorial prominence.
2. **Given** the WebGL scene is available, **When** the visitor observes or moves the pointer over it, **Then** varied, dimensional spheres and clearly visible electric-blue connections respond with slow, subtle movement and refined reflections without excessive bloom or post-processing.
3. **Given** a visitor selects Router, Switch, or Server, **When** they use either the scene node or semantic control, **Then** the corresponding equipment and description remain synchronized and keyboard-accessible.
4. **Given** a visitor reaches the hero actions, **When** they compare the two links or hover the project action, **Then** “Voir les projets” reads as the primary action and receives a restrained, distinctive hover response while “Me contacter” remains secondary.
5. **Given** the viewport is mobile, reduced motion is enabled, or WebGL is unavailable, **When** the hero adapts, **Then** it remains readable, non-overflowing, and usable with its static fallback and semantic equipment controls.

## Edge Cases

- Unknown paths and unknown project slugs show a branded not-found page with working navigation.
- A route is opened directly or refreshed on a static host; it must not rely on prior navigation state.
- The screen is narrow, text is zoomed, or a long French title wraps; content must not overflow or conceal controls.
- Reduced motion is enabled or an animation library fails to animate; all content remains visible and usable.
- No personal or school details beyond those confirmed are available; missing details remain identified as unconfirmed.
- A media file is missing, unreviewed, or contains sensitive information; do not publish it, and keep the case study readable.
- A contact channel is absent or unapproved; omit its link.
- The legacy Bash automation entry may overlap with the user-management project; keep both entries and qualify the relationship.
- WebGL initialization fails, the visitor disables motion, or the dynamic scene chunk is still loading; show the static fallback without hiding the hero.
- A selected node has no keyboard pointer equivalent; the semantic node controls must provide the same information.
- A project has no privacy-reviewed screenshot; keep its preview text-only.
- Pointer hover is unavailable on touch; project image previews remain accessible through focus/tap or stay hidden while the full link works.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST provide distinct pages at `/`, `/projets`, `/profil`, `/veille-technologique`, `/ecole`, and `/contact`.
- **FR-002**: The site MUST provide an independent detail page at `/projets/:slug` for each of the seven existing projects.
- **FR-003**: The site MUST provide persistent, responsive navigation among all six top-level pages; the owner's name MUST link to `/`, and the active route MUST be programmatically and visually identifiable.
- **FR-004**: All required routes MUST load directly and after refresh; unknown routes and project slugs MUST resolve to a useful not-found page.
- **FR-005**: The project index MUST include the seven entries identified in `docs/audit-ancien-portfolio.md`: password checker, Cisco RIP, system/network diagnostic assistant, network monitoring script, Linux diagnostic script, VigilFlow, and Bash automation/user manager.
- **FR-006**: Each project detail MUST use only claims supported by the audited source material or owner confirmation; unknown details, dates, individual contributions, and results MUST NOT be invented.
- **FR-007**: Prototype, simulation, and rule-based behavior MUST be labelled accurately; the potential overlap between the Bash entries MUST remain transparent.
- **FR-008**: Reused legacy images MUST be copied to the new site's assets only after visual review for privacy and relevance; `ancien-portfolio/` MUST NOT be modified.
- **FR-009**: The profile and school pages MUST use only confirmed information. The page MUST visibly mark important missing institution, date, and historical-study details as awaiting confirmation rather than present them as fact.
- **FR-010**: The technology-watch page MUST provide an editorial framework appropriate to BTS SIO SISR without claiming unprovided personal research, findings, or citations.
- **FR-011**: The contact page MUST show only exact public channels explicitly approved by the owner; when none are approved it MUST not render empty, invented, or broken links.
- **FR-012**: The visual system MUST retain the existing editorial minimalist structure and use ivory `#F5F3EE`, charcoal `#181818`, electric blue `#315BFF`, and coral orange `#FF7049` intentionally.
- **FR-013**: The site MUST provide restrained page transitions, scroll-based content reveals, distinctive project hover/focus feedback, animated navigation, and link/button micro-interactions.
- **FR-014**: Motion MUST respect `prefers-reduced-motion`; all essential content and actions MUST remain available without animation and hover.
- **FR-015**: Page motion and effects MUST remain usable and lightweight on mobile and MUST NOT introduce horizontal overflow or prevent navigation.
- **FR-016**: Static prerendering MUST cover every required top-level page and each of the seven project-detail URLs, and direct refreshes MUST render without error.
- **FR-017**: The existing static network illustration MUST remain available as a fallback, and the working application behavior MUST be preserved; deployment and unrelated rebuilds are excluded from this delivery.
- **FR-018**: The home page MUST provide an interactive Three.js network scene within the existing hero composition, with interconnected nodes and restrained electric-blue, charcoal, and coral details.
- **FR-019**: The network scene MUST provide slow organic motion and a subtle pointer response, but MUST NOT capture navigation gestures or make any page content depend on scene loading.
- **FR-020**: Router, Switch, and Server technical descriptions MUST be available through semantic, keyboard-operable controls as well as scene-node interaction.
- **FR-021**: The network scene MUST load only when needed, cap rendering work for mobile, respect `prefers-reduced-motion`, and show the existing static illustration if WebGL or the scene is unavailable.
- **FR-022**: The `/projets` index MUST provide restrained image previews only for projects with privacy-reviewed existing assets; titles, status, and links MUST remain available without hover.
- **FR-023**: Project previews and separators MUST provide subtle pointer/focus/touch feedback without inventing media, projects, or content.
- **FR-024**: This increment MUST preserve the existing multipage routes and content, MUST NOT modify `ancien-portfolio/`, and MUST NOT deploy the site.
- **FR-025**: The home page MUST have a distinctive editorial hero that brings together the “BUILDING CONNECTIONS” theme, the network scene, the confirmed name Kahyl Salhi, BTS SIO SISR, and the confirmed apprenticeship goal.
- **FR-026**: The home page MUST contain a concise profile introduction, a visually distinct systems/network section, selected-project compositions, and a high-contrast contact call to action, using only existing project/profile facts and routes.
- **FR-027**: Selected-project imagery on the home page MUST be drawn only from existing reviewed media attached to its matching project record; each visual MUST preserve its project title, status, and case-study destination.
- **FR-028**: Home-page scroll and entrance motion MUST remain decorative, respect reduced motion, avoid obscuring or delaying content, and preserve the existing lazy scene and static fallback behavior.
- **FR-029**: The home-page redesign MUST remain confined to `/`, its dedicated components, and page-specific styling/documentation; shared navigation and all other routes MUST retain their existing behavior.
- **FR-030**: On desktop, the home hero MUST balance its existing title with the network scene, limiting the title's size enough to preserve equipment visibility and giving the scene approximately 50–60% of the hero's visual width.
- **FR-031**: The existing network scene MUST remain lightweight and lazy-loaded while presenting varied sphere sizes and depth, refined low-intensity material highlights, clearly visible electric-blue connections, slow organic motion, and subtle pointer interaction; it MUST NOT add post-processing or dependencies.
- **FR-032**: The hero MUST retain semantic and scene-based Router, Switch, and Server selection, the static fallback, reduced-motion behavior, and an obviously primary “Voir les projets” action with “Me contacter” as its secondary action.

### Key Entities

- **Page**: One named public destination with a unique URL, page-specific title, and route-aware active navigation.
- **Network node**: An illustrative network component with a label and optional technical description exposed through accessible controls.
- **Project**: One of seven stable slugged case studies with a factual summary, observed work, status, limitations, and reviewed media where available.
- **Profile and education detail**: Public facts whose current validity is known; unconfirmed institution and study periods are explicitly pending.
- **Technology-watch framework**: Editorial prompts and topic categories, not a record of research already completed.
- **Contact channel**: Optional exact destination, visible only after owner approval.
- **Media asset**: A copied, visually reviewed legacy image with descriptive alternative text.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All six top-level routes and all seven project-detail routes load directly and after refresh in the production build.
- **SC-002**: Every top-level page is reachable from persistent navigation in at most one selection, and the wordmark returns to `/`.
- **SC-003**: All seven audited projects appear in the index, and each has a distinct detail page with no unsupported factual claim.
- **SC-004**: At 360 px, 768 px, and 1440 px viewport widths, all required routes have no horizontal page overflow and all navigation destinations remain usable.
- **SC-005**: Keyboard-only checks can reach every navigation item and primary link, with a visible focus indicator and an accessible current-page state.
- **SC-006**: With reduced motion enabled, all routes remain readable and usable and no non-essential animation is required to discover content.
- **SC-007**: The school and profile pages publish no unconfirmed institution or education dates, and the technology-watch page includes no fabricated research activity or citations.
- **SC-008**: Only approved, reviewed legacy media and approved contact destinations are published; no file under `ancien-portfolio/` is changed.
- **SC-009**: The requested palette appears in interface tokens and is applied in at least one visible title, interactive element, project number, separator, and editorial composition without excessive gradients or generic cards.
- **SC-010**: With WebGL available, the 3D illustration becomes visible after the home hero enters the viewport; with WebGL unavailable or reduced motion enabled, the static illustration remains visible and the hero's text and links remain usable.
- **SC-011**: Router, Switch, and Server information can each be opened using pointer interaction and keyboard-operated semantic controls.
- **SC-012**: On `/projets`, every displayed preview image maps to a visually reviewed asset already used by its matching case study; entries without such an image remain text-only.
- **SC-013**: At 360 px and 768 px, 3D and project-preview effects introduce no horizontal overflow, block page links, or require hover for essential information.
- **SC-014**: The home page presents the hero, profile introduction, dark systems/network section, selected projects, and contact call to action in that order, with all five regions visible and distinct at 360 px, 768 px, and 1440 px widths.
- **SC-015**: The home hero clearly exposes the confirmed name, BTS SIO SISR, and apprenticeship goal even when the 3D canvas is unavailable or reduced motion is enabled.
- **SC-016**: Every home-page selected-project link resolves to one of the seven existing project slugs, and every displayed project image matches that project's reviewed `media` data.
- **SC-017**: At 1440 px, the hero scene container occupies 50–60% of the available hero composition width and the title font size is smaller than the previous 13.2vw/12.5rem treatment.
- **SC-018**: All three equipment controls select their corresponding scene node; reduced-motion mode and scene-unavailable fallback keep the same semantic controls available.
- **SC-019**: The project CTA is visually distinguished as primary from the contact CTA, and both remain visible, keyboard-operable, and non-overlapping at 360 px, 768 px, and 1440 px.

## Assumptions

- The existing React/Vite/React Router Framework Mode app and its editorial composition are the baseline; this feature extends them rather than rebuilding the site.
- The current approved profile facts already recorded in the existing specification and application (`Kahyl Salhi`, BTS SIO SISR, seeking an IT apprenticeship) remain valid for this iteration.
- Dates, school name, current academic status, prior-study details, personal image, exact contact destinations, and project contributions are not confirmed by the present request; do not publish them as facts.
- Existing project descriptions and media in the legacy audit are source material, not independent proof of current operation. Review images before copying any into public assets.
- The existing seven project slugs are stable unless current routes or tests establish a different published contract. URLs in this specification use the requested `/projets/:slug` prefix.
- The watch page is an honest, reusable editorial framework; actual sources and personal findings can be added later by the owner.
- The interactive 3D scene and verified project images are existing approved resources; this increment may improve their home-page composition but does not expand project claims or change other routes.
