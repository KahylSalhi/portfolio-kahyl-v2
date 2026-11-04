import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readRoute = (name: string) =>
  readFileSync(new URL(`../../app/routes/${name}`, import.meta.url), "utf8");

describe("editorial page copy", () => {
  it("does not publish unconfirmed school institution or dates as facts", () => {
    const school = readRoute("school.tsx");

    expect(school).toContain("DATES À CONFIRMER");
    expect(school).toContain("EN ATTENTE DE CONFIRMATION");
    expect(school).not.toContain("CFA INSTA");
  });

  it("identifies the technology watch as a framework, not completed research", () => {
    const watch = readRoute("technology-watch.tsx");

    expect(watch).toContain("Aucune recherche personnelle");
    expect(watch).toContain("Pistes de sujets");
  });
});
