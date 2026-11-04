# Implementation Plan: Portfolio multipage BTS SIO SISR

**Branch**: `001-portfolio-bts-sisr` | **Date**: 2026-11-04 | **Spec**: [spec.md](./spec.md)

**Input**: Existing multipage React Router Framework Mode portfolio and approved targeted home-hero refinement specification.

## Summary

Preserve the accepted homepage and refine only its existing hero. Slightly reduce the “BUILDING CONNECTIONS” title, reserve 50–60% of desktop hero width for the existing lazy network scene, and refine that scene with depth, varied sphere sizes, clearer electric-blue links, subtle material highlights, and smooth pointer/organic motion. Make “Voir les projets” the visible primary action and retain “Me contacter” as secondary. Keep the existing fallback, reduced-motion behavior, responsive design, semantic controls, and bundle dependencies; do not alter any other homepage section, route, or project page, modify `ancien-portfolio/`, or deploy.

## Technical Context

**Language/Version**: TypeScript, React 19, Node.js 26.13.x as declared by the existing project.

**Primary Dependencies**: Existing Vite, React Router Framework Mode, Motion, Tailwind CSS, React Three Fiber, Three.js, and local font packages. `@types/three` is included as a development dependency because the installed Three.js package does not provide declarations.

**Storage**: Local, typed portfolio content and reviewed public assets; no backend.

**Testing**: Existing type-check, Vitest, and Playwright scripts. Add focused hero assertions for the desktop scene-width ratio and title sizing, primary/secondary CTA distinction, responsive overflow, equipment selection, and reduced-motion/fallback preservation; rerun unit/browser coverage and production build.

**Target Platform**: Static client-rendered build for current desktop and mobile browsers. Deployment is not part of this iteration.

**Project Type**: Existing React Router Framework Mode application, extended with route modules and static prerendering.

**Performance Goals**: Preserve lazy scene loading, existing dependencies, and capped rendering cost. Refine existing Three.js primitives and materials without postprocessing, remote resources, or a substantial scene-bundle increase.

**Constraints**: Preserve existing routes, global navigation, and all non-home content; use only confirmed profile data and reviewed public assets; do not modify `ancien-portfolio/`; respect reduced motion and keyboard access; do not deploy.

**Scale/Scope**: Refine the existing home hero, network-scene renderer, hero-scoped styles, related tests, and Spec Kit documents only. Preserve all remaining home sections, every other route, the global navigation, project-index behavior, and deployment boundary.

## Constitution Check

| Principle or constraint | Plan decision | Gate |
|---|---|---|
| Verifiable Content and Privacy | Reuse only source-traceable project details; expose no unconfirmed school/contact details; review each selected image before copying. | PASS |
| Distinctive Editorial Art Direction | Balance the approved editorial title with a more present sculptural network and intentional blue/coral accents without gaming effects. | PASS |
| Accessible, Responsive Experience | Use semantic navigation, active-route semantics, visible focus, touch-equivalent interactions, responsive layouts, and reduced-motion behavior. | PASS |
| Maintainable, Lightweight Engineering | Refine existing Three.js primitives/materials, preserve lazy loading, reuse semantic controls, and add no dependencies or post-processing. | PASS |
| Spec-First Delivery and Verification | Align implementation and checked task state with the updated specification; run build, type-check, unit, and browser validation. | PASS |
| Legacy portfolio remains read-only | Copy reviewed assets only; leave every path under `ancien-portfolio/` unchanged. | PASS |

**Pre-design gate**: PASS. This increment is limited to the current hero and its scene; it preserves confirmed content, reduced motion, the fallback, every other page and section, and the no-deployment boundary.

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
- Use only confirmed profile data. The current school/program information is limited to BTS SIO SISR; render institution, academic dates, and prior-study details as pending confirmation.
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
| Content remains verifiable and private | PASS | Source-traced project summaries; missing school/contact details remain pending; images require visual review. |
| Editorial identity is elevated without a rebuild | PASS | Homepage-only asymmetric composition reuses approved type, palette, scene, profile, and project data. |
| Accessible with reduced motion | PASS | Semantic navigation, active state, visible focus, touch behavior, and always-available content. |
| Maintainable and lightweight | PASS | Reuse existing router, Motion, CSS, data model, and shared project detail template. |
| Bounded visual scope and deployment | PASS | The redesign is limited to `/` and its dependencies; every other route remains unchanged and deployment is excluded. |
| Legacy content remains read-only | PASS | Reviewed files may be copied; no edit or serving path into the legacy directory. |

**Post-design gate**: PASS. All thirteen public content routes are known at build time. Their finite list permits static prerendering without adding server-side behavior.

## Complexity Tracking

No constitution violations. Thirteen static content URLs are required by the requested independent pages and seven case studies; a shared detail template and local project data avoid duplicated implementations.
