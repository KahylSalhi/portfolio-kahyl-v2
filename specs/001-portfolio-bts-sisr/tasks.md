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

## Phase 12: User Story 9 - Source-Traceable Profile and School Migration

**Goal**: Recover useful legacy content without publishing stale education claims,
unverified skill levels, or unapproved contact details. Preserve the accepted homepage,
projects design, routes, and legacy source tree.

**Independent Test**: Trace all new Profile and School content to current approved data or
an existing project record; ensure school details remain bounded, contact channels remain
absent, all seven project/image/limitation mappings are documented, and unit, browser, type,
and production build checks pass.

- [X] T085 Update `spec.md`, `plan.md`, `research.md`, `data-model.md`, and `contracts/ui-contract.md` for the verified content migration and its privacy/evidence boundaries while preserving completed task history.
- [X] T086 Create `docs/migration-contenu.md` before page implementation, mapping profile, education, skills, seven projects, reviewed/excluded media, contact authorization, contradictions, and unavailable information to exact local source files/lines.
- [X] T087 Add focused assertions in `tests/unit/editorial-pages.test.ts` for project-backed practices, pending school details, no inferred proficiency/official course claims, and no unapproved contact data.
- [X] T088 Improve only the content/data used by `app/routes/profile.tsx` and `app/routes/school.tsx` (and necessary additions to `app/data/profile.ts`); retain current layout/styles, existing project records/media, and all other routes.
- [X] T089 Run focused unit tests, `npm run typecheck`, `npm run test`, `npm run test:e2e -- --workers=1`, and `npm run build`; verify all routes, source boundaries, project/image records, and no changes under `ancien-portfolio/`. Do not deploy.

## Dependencies and Execution Order

- T006 and T011 are foundational and precede the new route implementation.
- US1 establishes route modules and persistent navigation; US2 uses the `/projets` route and shared shell.
- US3 and US4 are content pages and may be implemented independently after the shell exists.
- US5 can proceed alongside editorial page work but must be verified against all implemented routes.
- T068-T070 depend on all in-scope implementation tasks.
- T071-T075 are limited to the previously completed network-scene and projects-index enhancements.
- T076-T080 are limited to the approved `/` redesign; do not change other routes or deploy.
- T081-T084 are limited to the accepted hero and its scene; do not change other homepage sections, other routes, or deploy.
- T085-T089 are limited to the source report and verified content on `/profil` and `/ecole`; do not change the homepage or projects design, publish personal contacts, modify `ancien-portfolio/`, or deploy.
- T090-T093 update only owner-confirmed profile and school facts plus the reviewed school logo; preserve all visual design and project records, and do not modify `ancien-portfolio/` or deploy.
- T094-T097 update only the `/veille-technologique` Zero Trust content, its local source data, scoped styles, tests, and directly related Spec Kit artifacts; do not change other route content, modify `ancien-portfolio/`, or deploy.
- T098-T100 add source-checked 2026 Zero Trust news only to the existing technology-watch data/page/styles/tests and this task file; preserve the hero, interactive flow, four principles, every other route, and `ancien-portfolio/`.
- T101-T103 update only Contact/CV placeholder data, the Contact route and scoped styles/tests, and these tasks; keep discovered legacy destinations unpublished pending owner approval, preserve other routes, leave `ancien-portfolio/` untouched, and do not deploy.
- T104-T105 update only approved Contact destinations, Contact UI/styles/tests, and these tasks; keep the unapproved CV unavailable, preserve other routes and `ancien-portfolio/`, and do not deploy.
- T106-T107 prepare only the conditional Contact CV download configuration/tests and this task file; do not copy, expose, or alter the personal PDF, do not edit Profile, preserve other routes and `ancien-portfolio/`, and do not deploy.
- T108-T110 publish only the owner-approved, locally verified Contact CV, its tests, and these tasks; preserve all other routes and `ancien-portfolio/`, and do not deploy.
- T111-T113 update only Profile experience data/UI/styles/tests and the directly related Spec Kit contract/tasks; preserve the hero, every other route, and `ancien-portfolio/`, and do not deploy.
- T114-T116 update only shared route transitions, editorial title reveals, scoped interaction styles/tests, and these tasks; preserve page content, the hero composition, 3D scene, palette, typography, and navigation, and do not deploy.
- T117-T119 update only `/projets`, project-detail presentation, project-scoped styles/tests, and related Spec Kit artifacts; preserve the seven projects, their content, approved media only, the home hero and 3D scene, all other routes, and `ancien-portfolio/`; do not deploy.

## Phase 13: User-Confirmed Education History

**Goal**: Replace superseded pending school details with the owner-confirmed study history
and current BTS status. Keep the existing art direction and project index intact.

**Independent Test**: Check the Profile timeline at mobile/tablet/desktop, exact periods and
current second-year label, CFA INSTA logo rendering and alt text, project-backed practices,
no invented degree/end date/experience, all existing routes, and full test/build checks.

- [X] T090 Update `spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/ui-contract.md`, and `quickstart.md` for owner-confirmed education, current status, school logo, and the exact unknowns that remain.
- [X] T091 Add focused unit and browser assertions for all three study periods, current second-year status and apprenticeship goal, no diploma award/BTS end date/experience claim, CFA logo provenance/alt text, and responsive Profile/School layouts.
- [X] T092 Add typed education history and update only the content of Profile/School and shared profile strings for consistency; copy the visually reviewed CFA logo to `public/assets/images/school/cfa-insta-logo.png` and record it in `media-review.md` and `docs/migration-contenu.md`. Do not change the home or projects design/data.
- [X] T093 Run focused tests, typecheck, all unit and browser tests, and production build; verify responsive behavior, accessibility, routes/project records, no legacy modifications, and no deployment.

## Phase 14: Zero Trust Technology Watch

**Goal**: Build the existing `/veille-technologique` route into a complete, source-traceable
Zero Trust learning page with an accessible interactive flow. Keep documented references
separate from current alerts and leave the personal reflection for later completion.

**Independent Test**: Check official titles/dates and links, distinguish CERT-FR's dynamic
feed from publications, operate both policy outcomes by keyboard, verify all educational
topics and the unfilled personal reflection, and test 360/768/1440 px layouts.

- [X] T094 Update the feature specification, plan, research, data model, UI contract, quickstart, and task sequence for the source-verified Zero Trust page and its personal-content boundaries.
- [X] T095 Add typed, updateable publication/feed data and implement the existing technology-watch route with educational sections, responsive editorial styling, source timeline, BTS links, and a four-stage interactive flow; do not add dependencies or a second 3D scene.
- [X] T096 Add unit and browser tests for exact official publication metadata, feed/reference separation, claims boundaries, interactive allow/deny decisions, keyboard use, and responsive widths.
- [X] T097 Run type-check, unit tests, browser tests, and production build; verify the 360/768/1440 px rendering, preserve other routes and all `ancien-portfolio/` content, and do not deploy.

## Phase 15: 2026 Zero Trust News Timeline

**Goal**: Add a responsive editorial chronology of three official 2026 publications to
`/veille-technologique`, with source links, accessible summaries, technical takeaways,
SISR connections, and unanswered prompts for the owner's future analysis.

**Independent Test**: Verify official titles, dates, organizations, and URLs; check that
each card is marked as selected rather than personally read/analyzed, contains the three
questions without answers, renders without horizontal overflow at 360/768/1440 px, and
respects reduced motion.

- [X] T098 Verify publication metadata and add typed local data for the NSA Zero Trust guidelines, NIST secure DNS deployment guide, and NIST IR 8587; preserve the existing ANSSI 2025 and NIST 2020 references.
- [X] T099 Add the “L’évolution du Zero Trust en 2026” vertical editorial timeline with responsive cards, restrained Motion reveals/hover, per-publication unanswered analysis questions, and scoped reduced-motion behavior; do not alter the hero, interactive flow, four principles, or other routes.
- [X] T100 Add focused metadata/content/responsive browser tests, run TypeScript, unit and full browser suites, and production build; verify no changes under `ancien-portfolio/` and do not deploy.

## Phase 16: Contact Page and CV Publication Gate

**Goal**: Build an editorial Contact page for the confirmed second-year BTS SIO SISR
student and IT apprenticeship search. Keep email, GitHub, LinkedIn, and CV links hidden
until exact destinations/files are owner-approved; do not imply a form service exists.

**Independent Test**: Check confirmed profile/goal copy, no unapproved active contact links,
CV download absent without an approved PDF, accessibility, reduced motion, and
360/768/1440 px layout. Keep legacy source files unchanged.

- [X] T101 Verify current contact UI/data patterns, record legacy contact candidates for owner validation without adding their values to application assets, and search the repository for a valid current CV PDF.
- [X] T102 Implement the Contact-only editorial page, responsive scoped styles, explicit contact approval slots, and optional approved-CV configuration without publishing unapproved destinations or displaying inactive links.
- [X] T103 Add Contact unit/browser/accessibility/responsive coverage; run type-check, tests, and build; verify no modifications to non-Contact pages or `ancien-portfolio/`, and do not deploy.

## Phase 17: Owner-Approved Contact Destinations

**Goal**: Publish only the three professional contact destinations explicitly approved
by the owner. Preserve the existing Contact design, leave the CV download unavailable,
and keep all other routes and `ancien-portfolio/` unchanged.

**Independent Test**: Assert the exact `mailto:` and HTTPS destinations, safe new-tab
attributes on external profiles, visible hover and keyboard-focus states, automated
accessibility, reduced motion, and 360/768/1440 px layouts.

- [X] T104 Store only the three owner-approved Contact destinations in `app/data/contact.ts`; render clear interactive links on Contact with exact external URLs and safe new-tab attributes, remove pending-approval copy, and retain the CV publication gate.
- [X] T105 Update Contact unit/browser tests and Contact navigation expectation for exact destinations, link behavior, keyboard focus, hover, accessibility, reduced motion, and responsive widths; run type-check, tests, and build, check the scoped diff and `ancien-portfolio/`, and do not deploy.

## Phase 18: Private CV Integration Preparation

**Goal**: Prepare the exact CV download path while keeping the button and PDF unpublished
until the final PDF is present and the owner gives definitive publication approval.
Prepare an experience-content outline without changing Profile or inventing CV missions.

**Independent Test**: Assert the exact configured path, no download button in Contact while
the CV is unapproved, no CV copied into `public/`, and no changes to Profile or the legacy
folder. Verify the production prerender contains no CV download link.

- [X] T106 Set the Contact CV path to `/documents/CV_Kahyl_SALHI.pdf` while tracking file presence and approval separately; preserve the gated button and add regression coverage for the path and hidden button.
- [X] T107 Validate the privately supplied PDF locally without publishing it; run Contact tests, type-check, and production build; inspect prerendered Contact HTML and build output for absence of the download link/PDF. Provide a factual Profile experience proposal from the CV while leaving the Profile page unchanged; verify `ancien-portfolio/` remains untouched and do not deploy.

## Phase 19: Owner-Approved CV Publication

**Goal**: Publish the owner-approved, privacy-checked CV from the Contact page without
changing other pages, the legacy portfolio, or the design.

**Independent Test**: Confirm the PDF opens, extractable text contains no phone number,
Playwright downloads the exact PDF, and the production client build contains it.

- [X] T108 Confirm the exact public PDF is valid, contains no extractable phone number, and no older CV is present in public resources.
- [X] T109 Enable the CV publication gate and update Contact unit/browser tests, including a real Playwright download check.
- [X] T110 Run focused tests, type-check, production build, and confirm the PDF is copied to the build output; do not deploy.

## Phase 20: Profile Professional Experiences

**Goal**: Add the four CV-backed professional experiences to `/profil`, emphasizing
IT experience while preserving the existing Profile design language and all other routes.

**Independent Test**: Verify the exact four roles, periods, and responsibilities, accessible
list and headings, distinct IT styling, responsive layouts, reduced-motion behavior, tests,
type-check, and production build. The Profile page must not expose a phone number.

- [X] T111 Add typed Profile data for the four owner-provided, CV-backed experiences without introducing unverified dates or duties.
- [X] T112 Add an accessible, responsive Profile timeline with clear IT/non-IT distinction and restrained reveal animations; add unit and browser regression coverage.
- [X] T113 Run focused tests, type-check, and production build; verify no phone-number content or changes outside Profile, its tests, and Spec Kit; do not deploy.

## Phase 21: Shared Interaction Refinement

**Goal**: Refine existing route transitions, section-title reveals, buttons, and project
card hover behavior without changing page content, visual identity, or the home hero scene.

**Independent Test**: Exercise client-side navigation and browser history, direct routes,
reduced motion, visible keyboard focus, touch-sized project previews, accessibility,
responsive layouts, type-check, and production build.

- [X] T114 Refine the shared route enter transition to a brief opacity/transform motion and disable it for reduced-motion preferences.
- [X] T115 Add a restrained, readable title reveal and polish button/project-card micro-interactions without layout shifts or mouse-only mobile behavior.
- [X] T116 Add Playwright coverage for route transitions, reduced motion, and stable project-card layout; run unit/browser/accessibility/responsive checks, type-check, and production build. Do not deploy.

## Phase 22: Editorial Project Index and Case Studies

**Goal**: Give the existing seven-project list and detail pages a more expressive
editorial-tech presentation using only current project data and reviewed media.

**Independent Test**: Verify all seven existing projects and their copy remain intact,
technology labels come from each project record, only reviewed images render, detail
captures are accessible and gently revealed, portrait layouts do not overflow, reduced
motion keeps media visible, and all unit/browser/accessibility/type/build checks pass.

- [X] T117 Improve the existing project-list hierarchy with expressive section numbers, project-record technology labels, and refined approved-image previews; retain the list structure and all copy.
- [X] T118 Recompose existing project captures and technical case-study sections with accessible numbered media, editorial spacing, subtle reveal/hover treatments, and portrait-responsive styling.
- [X] T119 Add and run project-index/detail regression, accessibility, reduced-motion, portrait-responsive, type-check, and production-build checks; verify `ancien-portfolio/` and all out-of-scope pages remain unchanged. Do not deploy.

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
