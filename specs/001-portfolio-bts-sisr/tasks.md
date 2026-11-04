# Tasks: Portfolio multipage BTS SIO SISR

**Input**: Design documents from `specs/001-portfolio-bts-sisr/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`,
`contracts/ui-contract.md`, and `quickstart.md`

**Tests**: Required for routes, case studies, navigation, responsive behavior, accessibility,
and static output.

**Organization**: Previously completed task IDs and their checked status are preserved
below. The completed homepage art-direction increment continues with this targeted
hero refinement at T081; deployment remains out of scope.

## Phase 1: Setup (Historical Completed Work)

- [X] T001 Initialize Git at `C:\Projets\portfolio-kahyl\.git` only if the workspace root is not already a Git repository; do not initialize or alter `ancien-portfolio/.git`.
- [X] T002 [P] Create root `.gitignore` entries excluding `ancien-portfolio/`, `node_modules/`, Vite/build/test outputs, local environment files, and private credentials while retaining Spec Kit and documentation files.
- [X] T003 Create `package.json`, `package-lock.json`, `vite.config.ts`, `react-router.config.ts`, and `tsconfig.json` for a React/TypeScript Vite app using React Router Framework Mode, static pre-rendering, Tailwind CSS, and the Node.js LTS-compatible package scripts.
- [X] T004 Install and configure the requested runtime dependencies in `package.json` and `vite.config.ts`: React, React DOM, React Router, Tailwind CSS, Three.js, React Three Fiber, and Motion; keep the dependency set limited to the approved stack.
- [X] T005 Add Vitest, React Testing Library, Playwright, and `@axe-core/playwright` configuration in `package.json`, `vitest.config.ts`, `playwright.config.ts`, and `tests/setup.ts`.

## Phase 2: Foundational Routes and Shared Shell

**Purpose**: Preserve the existing application foundation and configure the route list needed by all stories.

- [X] T006 Configure `react-router.config.ts` and `app/routes.ts` for `/`, `/projets`, `/profil`, `/veille-technologique`, `/ecole`, `/contact`, all seven `/projets/:slug` paths, and not-found handling.
- [X] T007 Create the shared semantic document shell, route outlet, global stylesheet imports, and not-found route in `app/root.tsx`, `app/entry.client.tsx`, and `app/routes/not-found.tsx`.
- [X] T008 Define TypeScript content types and guards in `app/data/types.ts` for Profile, EducationEntry, Skill, Project, MediaAsset, ContactChannel, and CVDocument.
- [X] T009 Create shared accessible navigation, section-link, and page-layout primitives in `app/components/navigation/SiteNavigation.tsx`, `app/components/navigation/SectionLink.tsx`, and `app/components/editorial/PageLayout.tsx`.
- [X] T010 Define initial color, type, spacing, focus, and motion tokens in `app/styles/tokens.css`, `app/styles/global.css`, and `app/styles/typography.css`.
- [X] T011 Add route-resolution and content-validation tests in `tests/unit/routes.test.ts`, `tests/unit/content-validation.test.ts`, and verify the static not-found document.

## Phase 3: User Story 1 - Persistent Multipage Navigation (Priority: P1)

**Goal**: Make every requested section an independent route with persistent, responsive,
route-aware navigation and direct refresh support.

**Independent Test**: Open, refresh, and navigate to all six top-level pages; the name
returns to `/`, and the active destination is visually and programmatically identified.

### Historical completed home tasks

- [X] T012 [P] [US1] Add landing-page journey assertions for name, BTS SIO SISR, apprenticeship wording, and project/contact links in `tests/e2e/home.spec.ts`.
- [X] T014 [US1] Add the approved public name, short profile statement, and apprenticeship goal to `app/data/profile.ts`; omit unsupported profile claims.
- [X] T015 [US1] Build the asymmetric typography-led hero in `app/routes/home.tsx` and `app/components/editorial/HeroComposition.tsx`.
- [X] T016 [US1] Implement the responsive static network illustration and descriptive fallback in `app/features/network-scene/NetworkSceneFallback.tsx` and `public/assets/images/network-scene-fallback.svg`.

### Current implementation

- [X] T051 [P] [US1] Add route and persistent-navigation browser assertions for all top-level URLs, direct refresh, active state, wordmark return, and mobile menu behavior in `tests/e2e/navigation.spec.ts`.
- [X] T052 [US1] Configure static prerendering for all thirteen content URLs in `react-router.config.ts` and register the page modules in `app/routes.ts`.
- [X] T053 [US1] Render persistent navigation and a single accessible skip link around the route outlet in `app/root.tsx` and `app/components/navigation/SiteNavigation.tsx`; link all six top-level routes, set `aria-current`, and make the wordmark return home.
- [X] T054 [US1] Add distinct route metadata and page-level main landmarks for `/`, `/projets`, `/profil`, `/veille-technologique`, `/ecole`, and `/contact` in the corresponding modules under `app/routes/`.
- [X] T055 [US1] Implement route-aware mobile navigation styles and preserve visible focus in `app/styles/global.css`.

## Phase 4: User Story 2 - Seven Project Case Studies (Priority: P1)

**Goal**: List the seven audited entries and provide truthful, directly reachable detail
pages at `/projets/:slug`.

**Independent Test**: All seven list entries link to distinct case studies; each detail
loads and refreshes directly and an unknown slug displays the not-found experience.

- [X] T056 [P] [US2] Add or update tests for the seven audited project records, stable slugs, project statuses, unresolved Bash overlap, and absence of invented results in `tests/unit/projects.test.ts`.
- [X] T057 [US2] Define the seven typed project records and factual details in `app/data/projects.ts`, using the slugs in `specs/001-portfolio-bts-sisr/data-model.md`.
- [X] T058 [US2] Build the seven-entry projects index and shared case-study detail route with status, limitations, and back links in `app/routes/projects.tsx` and `app/routes/project-detail.tsx`.
- [X] T059 [US2] Add browser coverage for all seven `/projets/:slug` URLs, direct refreshes, page titles, and back links in `tests/e2e/projects.spec.ts`.
- [X] T060 [US2] Visually inspect candidate legacy screenshots and copy only privacy-reviewed, relevant images to `public/assets/images/projects/`; do not modify any file under `ancien-portfolio/`.

## Phase 5: User Story 3 - Profile, School, and Technology Watch (Priority: P2)

**Goal**: Provide separate profile, school, and technology-watch pages without inventing
personal, educational, or research facts.

**Independent Test**: The profile uses only approved facts; the school page identifies
missing institution/date/history details; the watch page presents an editorial framework,
not fabricated completed research.

- [X] T061 [P] [US3] Add assertions for unconfirmed school details and absence of fabricated watch research in `tests/unit/editorial-pages.test.ts`.
- [X] T062 [US3] Implement `/profil`, `/ecole`, and `/veille-technologique` in `app/routes/profile.tsx`, `app/routes/school.tsx`, and `app/routes/technology-watch.tsx` using only approved local content.

## Phase 6: User Story 4 - Safe Contact Page (Priority: P2)

**Goal**: Make the contact destination discoverable without exposing an unapproved or
fabricated channel.

**Independent Test**: With no approved values configured, the page contains no empty,
fake, private, or broken link.

- [X] T063 [P] [US4] Add tests for absent and approved contact destinations in `tests/unit/contact.test.ts`.
- [X] T064 [US4] Implement `/contact` with approved-channel filtering and an explicit pending state when no destination is approved in `app/routes/contact.tsx` and `app/data/profile.ts`.

## Phase 7: User Story 5 - Lively, Accessible Visual Interactions (Priority: P1)

**Goal**: Add the specified restrained palette, page transitions, scroll reveals, project
hover/focus effects, navigation animation, and micro-interactions.

**Independent Test**: At mobile and desktop widths, verify the palette and interactions
without obscured content, keyboard-only access, or motion when reduced motion is enabled.

- [X] T065 [P] [US5] Add responsive, keyboard, reduced-motion, visible-focus, and no-horizontal-overflow checks for all required routes in `tests/e2e/responsive-accessibility.spec.ts`.
- [X] T066 [US5] Apply the requested ivory/charcoal/blue/coral palette and restrained page, project, navigation, link, and scroll effects in `app/styles/tokens.css`, `app/styles/global.css`, and the editorial components.
- [X] T067 [US5] Ensure Motion and CSS respect `prefers-reduced-motion` in `app/root.tsx` and `app/styles/global.css`; keep page content visible if animation is unavailable.

## Phase 8: Verification and Scope Boundary

**Purpose**: Historical verification for the multipage refactor and first visual improvements.

- [X] T068 Run `npm run typecheck`, `npm run test`, `npm run test:e2e`, and `npm run build`; resolve failures and confirm every expected route is prerendered.
- [X] T069 Verify no files under `ancien-portfolio/` changed and no unreviewed legacy media or private information was added to `public/`.
- [X] T070 Update this task file by checking only verified completed tasks; leave interactive 3D development and deployment for a later phase.

## Phase 9: User Story 6 - Interactive Network Scene and Project Previews

**Goal**: Add the requested interactive 3D network illustration to the existing home hero
and restrained previews to `/projets`, without changing routes or case-study content.

**Independent Test**: Check lazy loading and static fallback, pointer and keyboard node
selection, reduced motion, all four reviewed project-image mappings, touch/mobile
behavior, existing route tests, and the production build.

- [X] T071 Update `spec.md`, `plan.md`, `research.md`, `quickstart.md`, and `contracts/ui-contract.md` for the bounded visual increment while preserving the previous completed task history.
- [X] T072 Add focused unit and browser coverage for the lazy scene/fallback, reduced-motion behavior, accessible Router/Switch/Server selection, and project previews using only reviewed media in `tests/`.
- [X] T073 Implement a lazily loaded, low-cost React Three Fiber network scene and semantic node controls in `app/features/network-scene/`; preserve the static fallback in `app/components/editorial/HeroComposition.tsx`.
- [X] T074 Add pointer/focus/touch previews for only the four image-backed projects and restrained title/separator feedback in `app/routes/projects.tsx` and `app/styles/global.css`.
- [X] T075 Run focused tests plus `npm run typecheck`, `npm run test`, `npm run test:e2e`, and `npm run build`; verify responsive/reduced-motion behavior and confirm no changes under `ancien-portfolio/`. Do not deploy.

## Phase 10: User Story 7 - Creative-Editorial Home Page

**Goal**: Recompose only `/` as a distinctive, responsive editorial experience using
confirmed profile facts, the existing lazy network scene, and reviewed project media.

**Independent Test**: Verify the five home sections, the named program and apprenticeship
goal, selected-project records/media/links, reduced-motion/fallback behavior, 360/768/1440
px layouts, preserved navigation and non-home routes, type-check, tests, and build.

- [X] T076 Update `spec.md`, `plan.md`, `research.md`, `quickstart.md`, and `contracts/ui-contract.md` for the homepage-only creative direction while preserving all previous task history.
- [X] T077 Add homepage-specific browser coverage for section order, confirmed identity, selected project data/media/URLs, scene fallback, reduced motion, and responsive no-overflow behavior in `tests/e2e/home.spec.ts`.
- [X] T078 Recompose `app/components/editorial/HeroComposition.tsx` into a full-bleed typographic hero that layers the existing scene while keeping Kahyl Salhi, BTS SIO SISR, and the apprenticeship goal legible.
- [X] T079 Recompose `app/routes/home.tsx` and add homepage-scoped editorial sections/styles for profile, systems/network focus, three existing reviewed-media projects, and closing contact; add only bounded visual refinements to `app/styles/global.css`.
- [X] T080 Run `npm run typecheck`, `npm run test`, `npm run test:e2e`, and `npm run build`; inspect the home page at mobile/tablet/desktop, confirm reduced motion and scene fallback, and verify all non-home routes and `ancien-portfolio/` remain unchanged. Do not deploy.

## Phase 11: User Story 8 - Balanced Sculptural Home Hero

**Goal**: Refine only the current home hero and network scene, preserving all other
homepage sections, routes, and the project index.

**Independent Test**: At 1440 px confirm the scene occupies 50–60% of hero width and
the title is reduced; verify blue-forward 3D depth, varied nodes, visible connections,
smooth pointer selection, primary/secondary CTAs, mobile behavior, reduced motion,
fallback, type-check, tests, and build.

- [X] T081 Update `spec.md`, `plan.md`, `research.md`, and `contracts/ui-contract.md` for the targeted hero refinement while preserving completed task history.
- [X] T082 Add focused desktop scene-ratio/title and CTA assertions plus responsive, semantic node-selection, reduced-motion, and fallback coverage in `tests/e2e/home.spec.ts`.
- [X] T083 Refine only `app/components/editorial/HeroComposition.tsx`, `app/features/network-scene/NetworkSceneCanvas.tsx`, `app/features/network-scene/networkSceneData.ts`, and hero-scoped rules in `app/styles/global.css` to rebalance typography/scene size, add restrained depth/material/color refinements, and emphasize “Voir les projets”.
- [X] T084 Run `npm run typecheck`, `npm run test`, `npm run test:e2e`, and `npm run build`; verify bundle size remains substantially unchanged, desktop/mobile hero behavior, reduced-motion and fallback, and unchanged non-home pages and project index. Do not deploy.

## Dependencies and Execution Order

- T006 and T011 are foundational and precede the new route implementation.
- US1 establishes route modules and persistent navigation; US2 uses the `/projets` route and shared shell.
- US3 and US4 are content pages and may be implemented independently after the shell exists.
- US5 can proceed alongside editorial page work but must be verified against all implemented routes.
- T068-T070 depend on all in-scope implementation tasks.
- T071-T075 are limited to the previously completed network-scene and projects-index enhancements.
- T076-T080 are limited to the approved `/` redesign; do not change other routes or deploy.
- T081-T084 are limited to the accepted hero and its scene; do not change other homepage sections, other routes, or deploy.

## Parallel Opportunities

- T051 can be authored while route registration in T052 is implemented.
- T056, T061, T063, and T065 are independent test tasks.
- T057 can proceed independently from the profile, school, watch, and contact page implementations.
- T062 and T064 can proceed in parallel once T052/T053 establish the route shell.
- Visual token work in T066 can proceed alongside project content and editorial pages.

## Implementation Strategy

1. Complete route registration and persistent navigation first.
2. Deliver the projects index and seven details with truthful local content.
3. Add the profile, school, technology-watch, and contact pages.
4. Apply restrained visual and accessible interaction improvements.
5. Run the required local verification for completed work; do not deploy.
