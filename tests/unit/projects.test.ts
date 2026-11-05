import { describe, expect, it } from "vitest";
import { getProjectBySlug, projects } from "../../app/data/projects";
import { isSafeProjectSlug } from "../../app/data/types";

describe("portfolio project content", () => {
  it("contains the seven stable, URL-safe case-study slugs", () => {
    expect(projects).toHaveLength(7);
    expect(projects.every((project) => isSafeProjectSlug(project.slug))).toBe(
      true,
    );
    expect(projects.map((project) => project.slug)).toEqual([
      "password-checker",
      "cisco-rip",
      "system-network-diagnostic",
      "network-monitor",
      "linux-diagnostic",
      "vigilflow",
      "bash-user-manager",
    ]);
  });

  it("provides technology labels for every project-list entry", () => {
    expect(
      projects.every(
        (project) =>
          project.technologies.length > 0 &&
          project.technologies.every((technology) => technology.trim().length > 0),
      ),
    ).toBe(true);
  });

  it("does not resolve an unknown case-study slug", () => {
    expect(getProjectBySlug("not-a-real-project")).toBeUndefined();
  });

  it("labels demos and simulated behavior without inventing operational status", () => {
    expect(getProjectBySlug("password-checker")?.status).toBe("working-demo");
    expect(getProjectBySlug("cisco-rip")?.status).toBe("simulation");
    expect(getProjectBySlug("vigilflow")?.status).toBe("prototype");
    expect(
      projects.filter((project) => project.status === "operational"),
    ).toHaveLength(0);
  });

  it("keeps the assistant description rule-based and the Bash overlap qualified", () => {
    expect(getProjectBySlug("system-network-diagnostic")?.summary).toContain(
      "mots-clés",
    );
    expect(
      getProjectBySlug("bash-user-manager")?.caseStudy.limitations.join(" "),
    ).toContain("distincte");
  });

  it("references only reviewed local image copies", () => {
    const mediaSources = projects.flatMap(
      (project) => project.media?.map((image) => image.src) ?? [],
    );

    expect(mediaSources).toHaveLength(4);
    expect(
      mediaSources.every((source) => source.startsWith("/assets/images/")),
    ).toBe(true);
    expect(
      mediaSources.some((source) => source.includes("ancien-portfolio")),
    ).toBe(false);
  });

  it("associates previews only with the four reviewed project images", () => {
    expect(
      projects
        .filter((project) => project.media?.length)
        .map((project) => [project.slug, project.media?.[0].src]),
    ).toEqual([
      [
        "password-checker",
        "/assets/images/projects/password-checker-code.png",
      ],
      ["cisco-rip", "/assets/images/projects/cisco-topology.png"],
      ["vigilflow", "/assets/images/projects/vigilflow-chart.png"],
      [
        "bash-user-manager",
        "/assets/images/projects/bash-user-manager-code.png",
      ],
    ]);
  });
});
