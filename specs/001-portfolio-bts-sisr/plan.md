# Implementation Plan: Portfolio multipage BTS SIO SISR

**Branch**: `001-portfolio-bts-sisr` | **Date**: 2026-11-04 | **Spec**: [spec.md](./spec.md)

**Input**: Existing multipage React Router Framework Mode portfolio and owner-confirmed education-history update.

## Summary

The accepted multipage design, home page, and projects page remain unchanged. This increment replaces previously pending education fields with the owner's confirmed three-stage education history, current second-year BTS SIO SISR status at CFA INSTA, and clarified apprenticeship goal. Profile gets a visual study timeline; the school page identifies CFA INSTA and uses its visually reviewed local logo alongside documented project practices. No BTS end date, diploma award, experience, or contact channel is inferred. `ancien-portfolio/` remains read-only and nothing is deployed.

## Technical Context

**Language/Version**: TypeScript, React 19, Node.js 26.13.x as declared by the existing project.

**Primary Dependencies**: Existing Vite, React Router Framework Mode, Motion, Tailwind CSS, React Three Fiber, Three.js, and local font packages. `@types/three` is included as a development dependency because the installed Three.js package does not provide declarations.

**Storage**: Local, typed portfolio content and reviewed public assets; no backend.

**Testing**: Existing type-check, Vitest, and Playwright scripts. Add focused assertions for the three confirmed education records, second-year status, CFA logo and alt text, project-backed practices, no end-date/diploma/experience claims, and unchanged contact boundaries. Run type-check, unit tests, responsive/accessibility browser checks, and the production build.

**Target Platform**: Static client-rendered build for current desktop and mobile browsers. Deployment is not part of this iteration.

**Project Type**: Existing React Router Framework Mode application, extended with route modules and static prerendering.

**Performance Goals**: Leave the existing lazy scene, dependencies, and page performance unchanged; the content-only increment introduces no runtime dependencies.

**Constraints**: Preserve the visual design, routes, navigation, home page, and project index; only update shared profile wording needed for consistency, Profile and School content/data, the visually reviewed school logo asset, and related docs/tests. Do not infer diploma awards, a BTS end date, or experience; do not expose legacy contact channels, modify `ancien-portfolio/`, or deploy.

**Scale/Scope**: Maintain the accepted visual increments as historical work. For this increment, update the migration report, typed profile/education data, Profile and School copy, add one reviewed school logo asset, focused tests, and applicable Spec Kit artifacts. Preserve visual styling, `/projets`, all other route structures, shared navigation, and deployment scope.

## Constitution Check

| Principle or constraint | Plan decision | Gate |
|---|---|---|
| Verifiable Content and Privacy | Reuse only source-traceable project details; expose no unconfirmed school/contact details; review each selected image before copying. | PASS |
| Distinctive Editorial Art Direction | Preserve the accepted profile and school page layout and styles; change only factual copy/content data. | PASS |
| Accessible, Responsive Experience | Reuse existing semantic page and project links; do not introduce new motion or interaction behavior. | PASS |
| Maintainable, Lightweight Engineering | Keep profile practices in typed local data and link them to existing project records; add no dependencies. | PASS |
| Spec-First Delivery and Verification | Align implementation and checked task state with the updated specification; run build, type-check, unit, and browser validation. | PASS |
| Legacy portfolio remains read-only | Copy reviewed assets only; leave every path under `ancien-portfolio/` unchanged. | PASS |

**Pre-design gate**: PASS. This increment is limited to confirmed factual content on Profile/School, shared profile strings, and a visually reviewed logo. The home-page and projects-page designs, contact destinations, legacy folder, and deployment remain out of scope.

## Project Structure

```text
app/
├── root.tsx
├── routes.ts
├── routes/
│   ├── home.tsx
│   ├── projects.tsx
│   ├── project-detail.tsx
│   ├── profile.tsx
│   ├── technology-watch.tsx
│   ├── school.tsx
│   ├── contact.tsx
│   └── not-found.tsx
├── components/
│   ├── navigation/
│   └── editorial/
├── data/
│   ├── profile.ts
│   └── projects.ts
└── styles/
public/assets/images/          # only reviewed copied images
specs/001-portfolio-bts-sisr/   # updated feature artifacts
tests/
ancien-portfolio/              # read-only source
```

**Structure Decision**: Retain the current one-app structure. A shared application shell owns persistent navigation and route-aware active state. Route modules render distinct page content; one project detail template reads the seven local records. The project route prefix is `/projets/`, matching the user-facing French navigation.

## Architecture and Technical Decisions

### Owner-confirmed profile and education content migration

- Read the existing audit, legacy pages, current `app/data/profile.ts` and `app/data/projects.ts`, Spec Kit artifacts, and the existing image review before editing content.
- Create `docs/migration-contenu.md` first as a source map. Include file/line references and separate approved facts from self-reported historical data, stale dates, unknowns, and permission-gated contact destinations.
- Add the user-confirmed BAC STI2D option SIN (2022–2023), one year of BUT Informatique (2023–2024), and BTS SIO option SISR at CFA INSTA since 2025 to typed education data. Mark the BTS current and explicitly in its second year; leave end date absent and do not imply past diploma awards.
- Update the public goal to seeking an apprenticeship in IT, especially systems, networks, or support. Keep the profile summary natural and supported by documented project practices linked to their current case studies; omit legacy skill ratings.
- On `/profil`, render a visual, responsive chronology using the existing editorial timeline treatment. On `/ecole`, identify CFA INSTA and explain BTS SIO SISR while labelling technical topics as examples from portfolio projects, not the official curriculum.
- Visually inspect the legacy school asset, copy only the verified logo into the new public asset tree, add its provenance to the media review and migration report, and use descriptive alt text. Leave every legacy source file untouched.
- Update the Spec Kit artifacts and add regression coverage for confirmed education facts, no invented diploma/end-date/experience, project evidence, the reviewed image, and preserved contact privacy; run typecheck, all tests, responsive/a11y browser tests, and build.

The previous scene, hero, homepage, and projects-index design decisions in this plan
describe completed historical increments; they are not implementation scope for this
content migration.

### Routes and rendering

- Define `/`, `/projets`, `/profil`, `/veille-technologique`, `/ecole`, `/contact`, and `/projets/:slug` in the existing React Router route manifest.
- Use the seven stable slugs already present in the feature data model: `password-checker`, `cisco-rip`, `system-network-diagnostic`, `network-monitor`, `linux-diagnostic`, `vigilflow`, and `bash-user-manager`.
- Render a distinct, meaningful not-found page for unknown paths and unknown project slugs.
- Keep navigation present on all routes, use the router's active-link state, and make the wordmark link to `/`.
- Prerender the six top-level pages and each of the seven project URLs in `react-router.config.ts`; verify built route output and direct navigation/refresh behavior.
- Give each page a distinct French title and description.

### Content and asset migration

- Treat `docs/audit-ancien-portfolio.md` as an index of source claims, not proof of current status or personal contribution.
- Keep seven records and clearly qualify the potential overlap between Bash automation and user management.
- Describe the assistant as keyword/rule-based, VigilFlow as browser-local with simulated machine states, and the password checker as a limited pedagogical indicator.
- Use the owner-confirmed BAC STI2D SIN (2022–2023), one year of BUT Informatique (2023–2024), and BTS SIO SISR at CFA INSTA since 2025/currently in the second year. Do not infer a BTS end date, diploma award, or missing results.
- Make the technology-watch page an editorial framework for future BTS SIO SISR entries; do not invent personal research, current findings, or citations.
- Review image contents visually for identifiers, credentials, private contact data, or sensitive network details before copying them. Use meaningful alt text and captions; do not expose the legacy directory through public paths.
- Do not add a CV, private portrait, school photo, contact destination, or external submission service without explicit approval.

### Home network scene

- Keep `NetworkSceneFallback` as the initial view, loading placeholder, reduced-motion alternative, and failure fallback.
- Retain lazy import, low-power rendering settings, and semantic Router/Switch/Server controls. Scale the visual composition through the scene container and modest node/connection refinements instead of more postprocessing or complex assets.
- Preserve slow organic motion, subtle pointer parallax, low mobile device-pixel ratio, and a clear interaction boundary between the canvas and hero links.
- Keep the illustration decorative to assistive technology while semantic controls provide the equivalent technical information.

### Homepage composition

- Break the existing page-shell content into a full-bleed, charcoal hero composition with expressive oversized typography layered against the network scene. Identify the owner, program, and apprenticeship goal in the hero itself.
- Follow the hero with a concise paper-toned profile statement, a full-bleed dark technical-focus section, an editorial mosaic of three existing media-backed projects, and a bold contact band linking to `/contact`.
- Derive the selected projects from existing `projects` data by selecting records with reviewed `media`; render each record's own title, summary, status, `media[0]`, alt text, and `/projets/:slug` route.
- Use semantic headings and links. Keep entry/reveal effects decorative with content visible before motion, and retain visible focus and reduced-motion behavior.

### Homepage-only styles and responsive behavior

- Add homepage-scoped classes for visual identity changes so shared page styles and other routes do not change.
- Create asymmetry through scale, overlap, typography, color-block transitions, and editorial project layouts rather than generic cards or excessive gradients.
- Break full-bleed sections out of the constrained page shell with viewport-based margins; stack grids and control overlay positions on small screens without hiding content or causing overflow.
- Reuse local design tokens and typefaces. Do not introduce remote imagery, new fonts, invented capabilities, or external effects.

### Design and interaction

- Recompose the homepage with expressive typography, asymmetric spacing, layered scene imagery, and distinct color-block sections; retain the site's typefaces, palette, and static illustration fallback.
- Define and use exactly the requested ivory `#F5F3EE`, charcoal `#181818`, electric blue `#315BFF`, and coral orange `#FF7049`; use accents intentionally in headings, interactive elements, indices, separators, and compositions.
- Avoid excessive gradients, generic cards, and dense UI. Project previews remain editorial links with distinct, restrained hover/focus feedback.
- Use existing Motion and CSS for subtle route-entry changes, scroll reveals, navigation, and link/button feedback. Do not hide essential content before or after an animation.
- Respect reduced motion in Motion and CSS. The scene may animate slowly only when motion is allowed; keep mobile rendering inexpensive.
- Preserve visible keyboard focus, readable contrast, semantic headings, and touch access.

### Explicitly deferred

- Do not deploy, configure hosting, add a backend, or modify `ancien-portfolio/`.

### Quality and delivery

- Extend the existing test suite with route registry/prerender coverage, seven project case studies, navigation/active-state behavior, and responsive/reduced-motion/accessibility checks.
- Run `npm run typecheck`, `npm run test`, `npm run test:e2e`, and `npm run build`.
- Confirm the generated public build includes all required pages and excludes `ancien-portfolio/` and any unapproved media.

## Implementation Sequence

1. Update the homepage specification and design artifacts without changing completed route/content work.
2. Add focused home-page tests for the agreed section sequence, facts, media, links, motion, and responsive layout.
3. Recompose only the home page into the editorial hero, profile, technical-focus, selected-project, and contact sections using existing data.
4. Verify focused tests, existing routes, responsive widths, keyboard and reduced-motion behavior, type-check, and production build; do not deploy.

## Constitution Check (Post-Design)

| Gate | Result | Evidence in design |
|---|---|---|
| Content remains verifiable and private | PASS | Owner-confirmed education facts and source-traced project summaries; unapproved contact destinations remain unpublished; images require visual review. |
| Editorial identity is elevated without a rebuild | PASS | Homepage-only asymmetric composition reuses approved type, palette, scene, profile, and project data. |
| Accessible with reduced motion | PASS | Semantic navigation, active state, visible focus, touch behavior, and always-available content. |
| Maintainable and lightweight | PASS | Reuse existing router, Motion, CSS, data model, and shared project detail template. |
| Bounded visual scope and deployment | PASS | The redesign is limited to `/` and its dependencies; every other route remains unchanged and deployment is excluded. |
| Legacy content remains read-only | PASS | Reviewed files may be copied; no edit or serving path into the legacy directory. |

**Post-design gate**: PASS. All thirteen public content routes are known at build time. Their finite list permits static prerendering without adding server-side behavior.

## Complexity Tracking

No constitution violations. Thirteen static content URLs are required by the requested independent pages and seven case studies; a shared detail template and local project data avoid duplicated implementations.

## Phase 14: Zero Trust technology watch

**Scope**: Replace only the content of `/veille-technologique`, its dedicated publication
data, page-scoped visual styles, interaction component, focused tests, and directly
related Spec Kit documentation. Keep route registration, shared navigation, other page
content, legacy files, and deployment unchanged.

**Implementation**:

- Keep exact source title, organization, verified publication date, URL, paraphrased
  summary, and technical takeaway together in `app/data/technology-watch.ts`.
- Separate dated ANSSI/NIST references from the live CERT-FR alert directory; do not
  invent a specific CERT-FR alert or personal consultation date.
- Explain the Zero Trust request, identity, authorization/context, and policy-decision
  steps in an accessible React flow; simulate device compliance to demonstrate allow/deny.
- Cover MFA, least privilege, segmentation/microsegmentation, device identity, adoption
  context, benefits, limitations, and defense-in-depth compatibility.
- Relate Cisco routing, Linux/Bash, and network monitoring to SISR concepts without
  claiming an existing Zero Trust deployment. Leave the personal reflection unfilled.

**Validation**: Add unit and browser assertions for source metadata, interaction outcomes,
keyboard access, and responsive widths. Run type-check, unit tests, browser tests, and the
production build; do not deploy.
