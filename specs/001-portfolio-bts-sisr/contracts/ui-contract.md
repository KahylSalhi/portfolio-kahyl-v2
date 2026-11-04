# User-Facing UI Contract

## Public routes

| Route | Contract |
|---|---|
| `/` | Existing editorial home and profile introduction. |
| `/projets` | Index of all seven audited projects. |
| `/profil` | Confirmed profile information; no unapproved contact values. |
| `/veille-technologique` | Editorial BTS SIO SISR watch framework, not fabricated research. |
| `/ecole` | Confirmed BTS SIO SISR information and clearly identified missing details. |
| `/contact` | Approved contact links only; explains when none are available. |
| `/projets/password-checker` | Rule-based password checker demonstration, not a complete security assessment. |
| `/projets/cisco-rip` | Cisco Packet Tracer / RIP case study with unverified details qualified. |
| `/projets/system-network-diagnostic` | Keyword/rule-based diagnostic assistant. |
| `/projets/network-monitor` | Bash host-availability demonstration; no private network details. |
| `/projets/linux-diagnostic` | Linux/WSL Bash diagnostic case study with unknowns qualified. |
| `/projets/vigilflow` | Local front-end prototype with simulated equipment states. |
| `/projets/bash-user-manager` | Bash automation/user-manager entry with possible overlap disclosed. |
| Unknown path or project slug | Useful not-found page with a return to `/projets` and the persistent navigation. |

Every listed route must load directly and after refresh in the static build.

## Shared navigation and interaction

- A persistent responsive navigation links to all six top-level routes.
- The wordmark/name always links to `/`.
- The current top-level destination is visually and programmatically identified.
- Project entries link to their corresponding detail path; every detail page links back to `/projets`.
- Links and controls have visible keyboard focus and equivalent touch behavior.
- Route transitions, scroll reveals, hover treatments, and micro-interactions are restrained. Hover never contains the only title, content, or action.
- `prefers-reduced-motion` suppresses or reduces non-essential movement without hiding content.
- The home hero may load a subtle network scene near the viewport; its static illustration remains visible during loading, when motion is reduced, and if WebGL fails. Router, Switch, and Server information is available from keyboard-operable semantic controls.
- The `/projets` list may reveal reviewed project images on pointer, focus, or touch. It never uses an unreviewed image, and its title, status, and detail link remain available without hover.

## Home page art direction

- `/` presents the owner identity and BTS SIO SISR context with a prominent creative-editorial hero built around the “BUILDING CONNECTIONS” theme and the existing network scene.
- The home page continues with a concise factual profile introduction, a contrasting systems/network section, selected project visuals, and a typographic contact call to action.
- Featured home projects link to their existing detail routes and take their text and any media from the existing project record; no project or asset is invented.
- The hero scene remains lazy, decorative to screen readers, and optional. The static fallback and all text, links, and project content work without WebGL and with reduced motion.
- The desktop hero balances the unchanged “BUILDING CONNECTIONS” wording with an approximately 50–60%-width sculptural network; its blue-forward, depth-layered primitives use only restrained highlights and no post-processing. “Voir les projets” is the primary action and “Me contacter” the secondary action.
- The three semantic equipment controls remain synchronized with the corresponding scene nodes; mobile layout, keyboard access, reduced motion, and the static fallback remain available.
- Full-bleed sections, typography, and image layouts are scoped to the home page. The shared navigation, project index, case studies, and other page routes retain their existing design and behavior.

## Content and media

- Public facts must be supported by approved content or the legacy audit and must not imply unverified dates, personal contribution, measured outcomes, or deployments.
- School institution, dates, and previous education specifics remain identified as unconfirmed until verified.
- The technology-watch page provides a reusable editorial structure and makes no claim that personal research is already complete.
- A legacy image is only copied to the new public asset area after visual review for privacy and relevance. If no safe image is confirmed, the text remains complete without it.
- No file under `ancien-portfolio/` is modified or served directly.
- Contact links appear only when their exact destination is approved.

## No backend or deployment

There is no user account, message-submission service, or monitoring API. This increment
does not include deployment; all pages and links continue to work if the optional 3D scene
does not load.
