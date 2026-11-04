import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import routes from "../../app/routes";

describe("portfolio routes", () => {
  it("registers every top-level page and the project-detail route", () => {
    const paths = routes.map((route) => route.path);

    expect(paths).toEqual(
      expect.arrayContaining([
        "/",
        "/projets",
        "/projets/:slug",
        "/profil",
        "/veille-technologique",
        "/ecole",
        "/contact",
        "*",
      ]),
    );
  });

  it("provides a static not-found document for unknown deployed paths", () => {
    const notFound = readFileSync(
      new URL("../../public/404.html", import.meta.url),
      "utf8",
    );

    expect(notFound).toContain("Cette page n’existe pas.");
    expect(notFound).toContain('href="/projets"');
  });
});
