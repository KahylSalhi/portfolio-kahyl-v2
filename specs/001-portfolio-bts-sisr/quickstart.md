# Local Development and Validation Quickstart

This iteration adds a creative-editorial composition to the existing home page, with a
prominent lazy network scene, confirmed profile introduction, systems/network focus,
existing reviewed project images, and a contact call to action. The static network
illustration remains the fallback. No deployment configuration is included.

## Prerequisites

- Node.js `26.13.x` (see `.nvmrc` and `package.json`).
- npm.
- A current desktop or mobile browser.

## Start locally

From the repository root:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Use the navigation
to visit `/`, `/projets`, `/profil`, `/veille-technologique`, `/ecole`, and `/contact`.
Open and refresh each `/projets/:slug` route directly.

## Validate

```powershell
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

Expected outcomes:

- Type checking reports no errors.
- Unit tests cover the route registry, seven project records, and safe content rules.
- Browser tests cover direct route loading, active navigation, home return, responsive
  widths, visible focus, reduced motion, home section order, profile facts, and featured
  project data/image consistency.
- The production build completes and prerenders all six top-level pages and seven project
  details.
- No image from `ancien-portfolio/` is copied without visual privacy review.

If Playwright's browser is missing, install Chromium with:

```powershell
npx playwright install chromium
```

## Manual acceptance checks

1. Visit and refresh all thirteen content URLs; verify the correct title and page appear.
2. Follow every navigation item and use the owner's name to return home.
3. At 360 px, 768 px, and 1440 px, confirm no horizontal overflow and that navigation is usable.
4. Navigate by keyboard; check focus visibility, link names, and current-page semantics.
5. Enable reduced motion; confirm content and routes remain visible, the static network
   illustration is used, and no animation is required.
6. Confirm the school page marks missing details, the watch page does not claim unperformed
   research, and the contact page contains no unapproved destination.
7. Confirm every project preview uses only the reviewed asset belonging to that project,
   and that every detail uses the correct slug and qualified facts.
8. Before adding any legacy screenshot, inspect it visually and copy only an approved image.
9. Review the homepage at 360 px, 768 px, and 1440 px: the hero, profile introduction,
   dark technical section, selected project visuals, and contact call to action must read
   as distinct sections without horizontal overflow.
10. With reduced motion or unavailable WebGL, check that the homepage identity and all
    content remain readable and that the static scene fallback is present.

Deployment and production hosting checks are deferred. Manually confirm the home scene
responds subtly to pointer input and Router, Switch, and Server descriptions are available
through keyboard-operated controls. If WebGL is unavailable, the static illustration
remains visible and usable.
