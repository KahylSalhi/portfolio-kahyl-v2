<!--
Sync Impact Report
Version change: not established (unfilled scaffold) -> 1.0.0
Modified principles:
- Scaffold principle 1 -> I. Verifiable Content and Privacy
- Scaffold principle 2 -> II. Distinctive Editorial Art Direction
- Scaffold principle 3 -> III. Accessible, Responsive Experience
- Scaffold principle 4 -> IV. Maintainable, Lightweight Engineering
- Scaffold principle 5 -> V. Spec-First Delivery and Verification
Added sections:
- Design, Accessibility, and Performance Constraints
- Architecture and Delivery Workflow
Removed sections: None
Follow-up TODOs:
- Confirm the original ratification date; it is not established by the available project
  records.
-->

# Portfolio BTS SIO SISR Constitution

## Core Principles

### I. Verifiable Content and Privacy

Every public claim about education, skills, projects, experience, or results MUST be
supported by information or evidence reviewed by the portfolio owner. The site MUST NOT
invent qualifications or experience. It MUST distinguish prototypes, simulations, and
working applications, and MUST identify information that still needs confirmation before
publication. Private contact details, credentials, secrets, and sensitive information MUST
NOT be published without explicit approval.

### II. Distinctive Editorial Art Direction

The visual identity MUST follow the Hybrid Minimal 3D direction: an editorial, asymmetric
composition with generous space, oversized typography, and a restrained palette of ivory
`#F5F3EE`, charcoal `#181818`, and sparingly used electric blue `#315BFF`. Space Grotesk,
Inter, and IBM Plex Mono are the designated typefaces. The design MUST avoid generic card
layouts, excessive gradients, and pervasive glassmorphism. Three-dimensional elements MUST
support the portfolio's network-infrastructure theme rather than act as decoration alone.

### III. Accessible, Responsive Experience

All pages and interactions MUST work across supported mobile, tablet, and desktop sizes and
remain usable with keyboard navigation, assistive technology, and reduced-motion settings.
Motion MUST respect `prefers-reduced-motion`; essential information MUST remain available
when animation or 3D rendering is disabled or unavailable. Semantic structure, readable
contrast, visible focus, and meaningful alternative text are required for relevant content.

### IV. Maintainable, Lightweight Engineering

The site MUST use React and TypeScript with Vite and Tailwind CSS. Reusable components and
clearly separated content, presentation, and behavior MUST be used where they reduce
duplication and support maintainability. Three-dimensional scenes MUST use React Three
Fiber and Three.js; interface animation MUST use Motion. The implementation MUST provide
a usable non-3D fallback, load heavyweight visual assets only when needed, and avoid
requiring paid services for core functionality.

### V. Spec-First Delivery and Verification

Feature work MUST follow the Spec Kit workflow. A feature specification MUST be reviewed
and approved before implementation begins. Plans and tasks MUST be prepared and reviewed
before substantial implementation. Reusable components, tests for important behavior, and
the smallest relevant build, type-check, or test validation MUST be included in delivery.
Changes MUST NOT modify `ancien-portfolio/`; it is a read-only source for verified content
and approved reusable assets.

## Design, Accessibility, and Performance Constraints

- The 3D scene MUST represent network infrastructure, remain visually secondary to the
  portfolio's content, and have a static or non-3D fallback.
- Animations MUST be restrained, non-essential, and disabled or reduced when the user
  requests reduced motion.
- Images, fonts, and 3D assets MUST be selected and optimized for responsive delivery.
- No paid service, remote font, or third-party integration may be required for the site's
  essential content or navigation.
- Content migrated from the former portfolio MUST be checked for accuracy and privacy.
  Stale dates, skill ratings, links, screenshots, and personal details MUST be reviewed
  before publication.

## Architecture and Delivery Workflow

- The implementation MUST keep profile, education, skills, and project content structured
  separately from layout where practical, so factual updates do not require redesigning
  page components.
- Project case studies MUST state the context, verified contribution, tools actually used,
  outcome, and limitations when that information is available. Unknown details MUST remain
  explicitly unresolved rather than inferred.
- Specifications MUST define user-visible behavior and acceptance criteria. The user MUST
  validate the specification before coding.
- Important interactions MUST have focused tests or documented manual verification where
  automated testing is not applicable.
- Before completion, changes MUST be checked against the approved specification, this
  constitution, and the project's applicable build, type, accessibility, and test checks.

## Governance

This constitution governs portfolio design, content migration, implementation, and review.
Amendments MUST be made through a documented Spec Kit workflow, explain their impact, and
be reviewed before implementation practices relying on them are changed. Constitution
versions use Semantic Versioning: MAJOR for incompatible changes to principles or
governance, MINOR for new principles or materially expanded requirements, and PATCH for
clarifications that do not change obligations. Every implementation review MUST verify
content accuracy and privacy, design and accessibility constraints, technical requirements,
and compliance with the approved specification. Any exception MUST be documented and
approved before the affected work proceeds.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): confirm original adoption date | **Last Amended**: 2026-11-04
