# Portfolio Content Model

## Purpose and invariants

This model describes local, public-facing content in the existing React application. It
does not imply a database or remote service. Unknown or unapproved data remains absent or
is explicitly described as unconfirmed; it is never presented as established fact.

## Entities

### Profile

| Field | Meaning | Validation |
|---|---|---|
| `displayName` | Public name | Confirmed as “Kahyl Salhi”. |
| `headline` | Short public role/education statement | BTS SIO, option SISR; do not infer the current year. |
| `professionalGoal` | Public career goal | Seeking an IT apprenticeship, as recorded in the existing approved content. |
| `summary` | Short introduction | Every factual claim must be source-backed or owner-confirmed. |
| `availability`, `location` | Optional public details | Omit until the exact current value is approved. |

### EducationEntry

| Field | Meaning | Validation |
|---|---|---|
| `id` | Stable content identifier | Unique. |
| `title` | Program/diploma name | Publish only confirmed titles. |
| `institution` | Institution name | Omit or explicitly mark unconfirmed until confirmed. |
| `startDate`, `endDate` | Period | Do not infer or present historical portfolio dates as current. |
| `status` | `current`, `completed`, or `unverified` | Do not present unverified status as fact. |
| `description` | Short factual context | No unsupported completion or result claims. |

### Project

| Field | Meaning | Validation |
|---|---|---|
| `slug` | Stable route identifier | Unique, URL-safe; detail route is `/projets/:slug`. |
| `title`, `summary` | Project identification and preview | Match the audited entry and describe it truthfully. |
| `caseStudy` | Long-form narrative | Include only source-backed context, objectives, observed work, results, and limitations. |
| `technologies` | Tools/technologies used | Include only those named by audited source material or confirmed. |
| `status` | `prototype`, `simulation`, `working-demo`, `operational`, or `unverified` | Do not claim real operation without evidence. |
| `results`, `limitations` | Observed outcome and caveats | No invented metrics or claims. |
| `mediaIds` | Associated reviewed media | Every asset exists and passes visual privacy review. |
| `relatedProjectSlugs` | Related/possibly overlapping entries | Expresses a relationship, not proof of separate work. |

The seven stable slugs are:

1. `password-checker`
2. `cisco-rip`
3. `system-network-diagnostic`
4. `network-monitor`
5. `linux-diagnostic`
6. `vigilflow`
7. `bash-user-manager`

The final entry represents the audited Bash automation/user-management entry. Its
possible overlap with the separate user-manager project remains explicit and unresolved.

### School information

The current confirmed public information is limited to BTS SIO, option SISR. Institution,
dates, current academic year, and prior-study particulars are not confirmed for this
iteration. The `/ecole` page identifies each missing detail as pending confirmation instead
of filling it with a guess.

### TechnologyWatchEntry

Represents a future editorial post with a topic, source, publication date, summary, and
connection to BTS SIO SISR. No entry is represented as completed research unless the
owner supplies and approves its source and findings. The current page may present topic
categories and a reusable editorial structure without publishing watch entries.

### MediaAsset

| Field | Meaning | Validation |
|---|---|---|
| `id` | Stable reference | Unique. |
| `sourcePath` | Legacy provenance | Never used as a public URL. |
| `publicPath` | New asset path | Must be copied into the new app's approved asset area. |
| `caption`, `altText` | Accessible explanation | Must accurately describe the actual image. |
| `reviewStatus` | `pending`, `approved`, or `rejected` | Only approved images may be copied/published. |
| `privacyReview` | Visual review for sensitive data | Must be approved before public release. |

### ContactChannel

| Field | Meaning | Validation |
|---|---|---|
| `type` | `github`, `linkedin`, or `email` | Channel type alone does not approve a destination. |
| `value` | Exact URL/address | Required for rendering and separately approved. |
| `approved` | Explicit authorization for exact value | Must be true before publication. |

No contact link renders for an absent or unapproved destination.

## Relationships

- A project may reference zero or more reviewed media assets.
- A project may reference a related project to communicate possible overlap.
- Future technology-watch entries may identify their sources and SISR topic; no source is fabricated.
- Contact channels are optional and individually gated by approval.
