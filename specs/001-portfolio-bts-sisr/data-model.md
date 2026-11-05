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
| `headline` | Short public role/education statement | BTS SIO, option SISR, second year; only publish owner-confirmed current status. |
| `professionalGoal` | Public career goal | Seeking an IT apprenticeship, particularly in systems, networks, or IT support, as confirmed by the owner. |
| `summary` | Short introduction | Every factual claim must be source-backed or owner-confirmed. |
| `availability`, `location` | Optional public details | Omit until the exact current value is approved. |

### EducationEntry

| Field | Meaning | Validation |
|---|---|---|
| `id` | Stable content identifier | Unique. |
| `title` | Program/diploma name | Publish only confirmed titles. |
| `institution` | Institution name | Publish only an institution explicitly confirmed by the owner; CFA INSTA is confirmed for the current BTS. |
| `startDate`, `endDate` | Period | Use owner-confirmed periods; never infer a missing end date from a historical source. |
| `status` | `current`, `attended`, `completed`, or `unverified` | `attended` records a confirmed study period without claiming an awarded diploma; do not infer qualification completion. |
| `description` | Short factual context | No unsupported completion or result claims. |

### ProfessionalExperience

| Field | Meaning | Validation |
|---|---|---|
| `id` | Stable content identifier | Unique. |
| `employer`, `role` | Employer and position | Use only the four owner-confirmed CV entries. |
| `period` | Displayed year or ongoing period | Match the CV and owner-provided wording; never infer missing dates. |
| `category` | `it` or `other` | Distinguishes IT roles visually without implying a different employment status. |
| `responsibilities` | Duties shown for the role | Include only responsibilities stated in the CV or explicitly confirmed by the owner. |

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

The owner confirmed the following history: BAC STI2D option SIN during 2022–2023; one
year in BUT Informatique during 2023–2024; BTS SIO option SISR at CFA INSTA since 2025,
currently in the second year. The BTS end date is not provided. Past study records must not
be presented as awarded diplomas unless award/attainment is explicitly confirmed.

Technical themes on `/ecole` may be derived from existing project entries (for example
Linux/WSL, Bash, Cisco Packet Tracer, routing/connectivity, and web technologies), but they
must be labelled as subjects visible in portfolio projects, not as the official BTS
curriculum or as a complete list of school modules.

The CFA INSTA logo in `ancien-portfolio/images/ecole.jpg` was visually checked and may be
copied into the new public assets with descriptive alt text. It is an institutional logo,
not a portrait or a claim that the source directory can be publicly served.

### Skill evidence

Profile practices may be summarized from existing project records only when each displayed
practice links to at least one matching case study. Describe the documented activity, not
an inferred proficiency level, formal qualification, individual contribution, or current
operational ability. Legacy self-assessed levels and progress bars are not evidence.

### TechnologyWatchEntry

Represents a future editorial post with a topic, source, publication date, summary, and
connection to BTS SIO SISR. Dated reference publications may be included when their
official page confirms the exact title, organization, publication date, and URL; summaries
and technical takeaways must be reformulated and kept traceable to that source. Dynamic
alert feeds are a separate source type and must not be presented as individual publications
or assigned an unverified date. Personal findings remain unfilled until the owner studies
and approves them.

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

Legacy contact source locations may be recorded for owner review without copying the
address or URL into the migration report or application. Approval is specific to the exact
destination and does not imply approval for other channels.

## Relationships

- A project may reference zero or more reviewed media assets.
- A project may reference a related project to communicate possible overlap.
- Future technology-watch entries may identify their sources and SISR topic; no source is fabricated.
- Contact channels are optional and individually gated by approval.
