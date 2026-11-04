export type ProjectStatus =
  | "prototype"
  | "simulation"
  | "working-demo"
  | "operational"
  | "unverified";

export interface Profile {
  displayName: string;
  headline: string;
  professionalGoal: string;
  contactChannels?: ContactChannel[];
}

export interface EducationEntry {
  id: string;
  title: string;
  institution?: string;
  startDate?: string;
  endDate?: string;
  status: "current" | "completed" | "unverified";
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "network" | "systems" | "security" | "support" | "development";
  description: string;
  projectSlugs: string[];
  evidenceStatus: "reviewed" | "pending";
}

export interface MediaAsset {
  id: string;
  sourcePath: string;
  publicPath: string;
  caption: string;
  altText: string;
  reviewStatus: "pending" | "approved" | "rejected";
  privacyReview: boolean;
}

export interface ProjectCaseStudy {
  context: string;
  objectives: string[];
  workPerformed: string[];
  outcome?: string;
  limitations: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  statusLabel: string;
  caseStudy: ProjectCaseStudy;
  technologies: string[];
  status: ProjectStatus;
  results: string[];
  limitations: string[];
  mediaIds: string[];
  relatedProjectSlugs: string[];
  contentStatus: "draft" | "owner-reviewed" | "publishable";
  media?: ProjectImage[];
}

export interface ContactChannel {
  type: "github" | "linkedin" | "email";
  value?: string;
  approved: boolean;
}

export interface CVDocument {
  publicPath: string;
  approved: boolean;
  lastReviewed?: string;
}

const projectStatuses: ProjectStatus[] = [
  "prototype",
  "simulation",
  "working-demo",
  "operational",
  "unverified",
];

export function isProjectStatus(value: string): value is ProjectStatus {
  return projectStatuses.includes(value as ProjectStatus);
}

export function isSafeProjectSlug(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

export function isPublishableContactChannel(
  channel: ContactChannel,
): channel is ContactChannel & { value: string; approved: true } {
  return channel.approved && Boolean(channel.value?.trim());
}
