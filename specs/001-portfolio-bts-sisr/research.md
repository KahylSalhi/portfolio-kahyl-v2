# Research: Portfolio multipage BTS SIO SISR

## 1. Existing application and routing

**Decision**: Extend the existing React Router Framework Mode app and explicit route manifest; do not replace the app or introduce a second routing system.

**Rationale**: The repository already contains the React/Vite/TypeScript foundation, shared page shell, local fonts, Motion, and a working editorial homepage. The requested feature is route/content expansion, not a greenfield rebuild.

**Alternatives considered**:

- Rebuild the homepage and application structure: rejected because the user explicitly requires preserving the existing design, technical structure, and working behavior.
- Keep all content as home-page anchors: rejected because the required sections need independent URLs.

## 2. Static route output

**Decision**: Define six top-level routes and seven explicit project detail URLs in the React Router route manifest and prerender each URL at build time.

**Rationale**: The destination list is finite, and direct links and refreshes are required without a runtime backend. Explicit prerender paths ensure the browser can request each known page independently.

**Routes**:

- `/`, `/projets`, `/profil`, `/veille-technologique`, `/ecole`, `/contact`
- `/projets/password-checker`
- `/projets/cisco-rip`
- `/projets/system-network-diagnostic`
- `/projets/network-monitor`
- `/projets/linux-diagnostic`
- `/projets/vigilflow`
- `/projets/bash-user-manager`

Unknown routes and unknown project slugs use the shared not-found treatment.

## 3. Content provenance and privacy

**Decision**: Treat the audit as a guide to legacy claims and assets, not proof of current school details, individual contribution, deployment, or outcomes. Include only confirmed profile data and clearly identify missing school details. Keep the technology-watch page as a framework for future entries.

**Rationale**: The user forbids invented personal, school, and research facts. The audit itself flags stale dates, unverified institution, project overlap, prototype behavior, and unreviewed private information.

**Alternatives considered**:

- Publish every historical portfolio claim verbatim: rejected because some values may be stale and several project claims overstate simulation/prototype behavior.
- Fill the school and watch pages with plausible dates, sources, or research: rejected because these facts were not supplied or confirmed.

## 4. Legacy image reuse

**Decision**: Visually inspect each candidate screenshot before copying it into the new public assets. Keep unreviewed or sensitive images in place and unpublished.

**Rationale**: The audit notes that screenshots may contain account names, addresses, or network details. A filename or existing reference cannot prove that the visual content is safe to publish.

**Alternatives considered**:

- Copy all images programmatically: rejected because it bypasses the required privacy review.
- Serve images directly from `ancien-portfolio/`: rejected because the legacy directory must not be modified or exposed as the new site's asset root.

## 5. Editorial visual system and motion

**Decision**: Retain the editorial typography, asymmetric composition, local fonts, and static network diagram as a fallback. The previously completed visual increment added the lazy React Three Fiber scene and reviewed-image previews on `/projets`; this increment reuses those assets and effects while reworking only the home-page composition.

**Rationale**: The scene and previews are established parts of the portfolio; rebuilding them or introducing a new system would add risk without helping the home-page art direction. React Three Fiber, Three.js, Motion, and CSS are already installed.

**Alternatives considered**:

- Uniform generic project cards or strong gradients: rejected by the requested art direction.
- Always-on motion or content hidden until reveal: rejected for performance, reduced-motion, and no-JavaScript resilience.
- A scene that blocks content, depends on hover, ignores reduced motion, or lacks a static fallback: rejected for accessibility and performance.

## 6. Verification

**Decision**: Validate the scene's lazy loading, reduced-motion/static fallback, accessible node selection, and reviewed-image project previews with existing tests. Then run type-check, browser checks, and a production build while preserving existing route coverage.

**Rationale**: These checks directly cover the requested route availability, content safety, accessibility, and responsive interactions.

**Alternatives considered**:

- Test only the home page: insufficient because all detail and editorial routes must work independently.
- Deploy a preview to validate behavior: excluded because deployment is explicitly deferred.

## 7. Creative-editorial home page

**Decision**: Compose the home page from five distinct visual movements—a dark typographic hero, editorial profile introduction, contrasting technical-focus band, mosaic of three existing reviewed-media projects, and closing contact statement. Scale the existing lazy scene in its container rather than expanding its renderer or adding 3D libraries.

**Rationale**: The current home page gives the scene little visual weight and leaves substantial blank space. A sectional art direction creates the requested rhythm while retaining the current multipage architecture and keeping the other pages stable.

**Content constraints**: Identify Kahyl Salhi, BTS SIO SISR, and the apprenticeship goal using the existing profile. Derive project links and text from the local project records. Choose only entries with existing reviewed `media`; do not infer proficiency, outcomes, or work not in the case studies.

**Motion and responsive decisions**: Use the existing Motion configuration and CSS, keep homepage content visible in server output, respect reduced motion, and preserve semantic controls outside the canvas. Full-bleed color sections use homepage-scoped styles; the selected-project composition stacks into accessible touch-size links at narrow widths.

**Alternatives considered**:

- Rebuild the shared shell or use a new page-template framework: rejected because the request is strictly homepage-only.
- Add a fourth project or new thumbnails to fill a grid: rejected because no new project or media is approved.
- Add 3D postprocessing, remote visual assets, or always-on motion: rejected for performance, factual boundaries, and reduced-motion expectations.

## 8. Targeted hero composition and scene refinement

**Decision**: Keep the accepted homepage structure intact and adjust only the hero: reduce the desktop title scale, allocate 50–60% of the available width to the existing scene, and make the project link the primary action. Refine the current graph with existing Three.js geometry, depth, blue-forward connections, varied sphere sizes, low-intensity standard materials, and restrained frame-based motion.

**Rationale**: The current composition lets the oversized title obscure much of the network. A bounded type reduction and larger independent scene area rebalance the hero without changing the approved art direction or adding packages.

**Performance/accessibility constraints**: Do not add post-processing, high-cost effects, or dependencies. Keep the scene lazy and DPR-capped, preserve semantic selection and keyboard-operable Router/Switch/Server controls, retain the static fallback, and continue to suppress scene animation under reduced motion.

**Responsive decision**: Keep the desktop scene width within the specified 50–60% range; use the current stacked mobile scene and title layout at narrow widths. Both calls to action remain visible and keyboard accessible.

## 9. Source-traceable content migration for Profile and School

**Decision**: Record exact source locations and status in `docs/migration-contenu.md`
before implementation. Preserve the current app's approved identity, BTS SIO SISR, and
apprenticeship goal. Add only technical practices supported by existing project data,
with links to those cases, and describe BTS-related technology only as themes evidenced in
projects rather than a claimed official curriculum.

**Rationale**: The old portfolio is a useful source of owner-declared history, while its
audit predates the owner's direct confirmation of the education timeline and current
institution. Subjective skill ratings, missing work-history evidence, and a possible
duplicate Bash entry remain unresolved. The current request explicitly requires no
invented claims and approval before contact details are published.

**Content boundaries**:

- Use the directly confirmed CFA INSTA, BAC STI2D option SIN (2022–2023), one year of BUT
  Informatique (2023–2024), and current second-year BTS SIO SISR since 2025. Do not infer a
  diploma award or BTS end date. The school image must be visually checked before use.
- Use case-study-backed wording for Linux/WSL, Bash automation, Packet Tracer/RIP
  v2/connectivity, and web interfaces. Do not infer proficiency, solo authorship,
  employment, formal course units, or outcomes.
- Keep exact legacy email and social destination values out of the migration report and
  app data. Record only source file/line locations and require explicit approval for each
  exact destination.
- Verify all seven current project slugs, descriptions, tools, limitations, reviewed
  images, and the unresolved Bash relationship. Do not change project-page design or
  legacy files.

**Alternatives considered**:

- Publish the entire historical timeline and school profile verbatim: rejected because
  dates, institution, status, and prior-study validation are not established as current.
- Retain self-rated skill bars: rejected because they lack a validation method and the
  request disallows invented or unconfirmed competence claims.
- Copy all old contact values into `profile.ts`: rejected because approval must be
  explicit for each destination.
- Rewrite project data or rebuild the `/projets` page during this increment: rejected
  because existing descriptions, media, and case studies already provide a traceable
  baseline and the user excluded its design.

## 10. Owner-confirmed education update

**Decision**: The owner has confirmed BAC STI2D option SIN (2022–2023), one year of BUT
Informatique (2023–2024), and BTS SIO option SISR at CFA INSTA since 2025, currently in
the second year. Represent prior periods as study history without asserting an obtained
diploma. Do not add an end date for the BTS. Update the goal to an IT apprenticeship in
systems, networks, or support.

**School asset decision**: `ancien-portfolio/images/ecole.jpg` was visually opened and
verified to be the CFA INSTA institutional logo; no individual or private detail is
visible. Its content is PNG (597 × 388 px) despite the source extension. Copy it into
`public/assets/images/school/cfa-insta-logo.png` and use descriptive alt text. Keep the
source image unchanged.

**Rationale**: Direct owner confirmation supersedes the earlier "pending confirmation"
state for the specific education and institution facts stated. It does not confirm
diploma awards, BTS completion timing, or work experience.

## 11. Source-traceable Zero Trust technology watch

**Decision**: Replace the generic technology-watch framework with a focused Zero Trust
page. Keep verified reference publications (the ANSSI guide, published 20 June 2025, and
NIST SP 800-207, published August 2020) in a dedicated local data file. Present CERT-FR
as a changing alert feed, not as a dated Zero Trust article or a cited individual alert.

**Content boundaries**: Summaries and technical takeaways are paraphrases of the official
ANSSI and NIST publication pages. No access/consultation date or personal research is
claimed. The personal-reflection section is a prompt for future completion. Relationships
to Cisco routing, Linux/Bash, and network monitoring are explicitly conceptual; they do
not claim a Zero Trust implementation in the portfolio projects.

**Interaction and performance**: Use a semantic React/CSS four-step flow with keyboard-
operable step buttons and a simulated device-compliance switch that changes the policy
outcome. Reuse installed Motion with the root reduced-motion configuration; do not add a
second Three.js scene or a dependency.

**Alternatives considered**:

- Treat each CERT-FR alert as a Zero Trust publication: rejected because the supplied URL
  is a changing directory and no specific alert was requested or source-verified.
- Publish a first-person conclusion: rejected until the owner has studied the references
  and supplies their own reflection.
- Add another Three.js scene: rejected because the explanatory interaction is well served
  by accessible DOM controls and light Motion/CSS effects.
