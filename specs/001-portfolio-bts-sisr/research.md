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
