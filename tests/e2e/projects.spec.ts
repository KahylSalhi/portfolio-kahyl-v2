import { expect, test } from "@playwright/test";

const slugs = [
  "password-checker",
  "cisco-rip",
  "system-network-diagnostic",
  "network-monitor",
  "linux-diagnostic",
  "vigilflow",
  "bash-user-manager",
];

for (const slug of slugs) {
  test(`project ${slug} opens directly and refreshes`, async ({ page }) => {
    await page.goto(`/projets/${slug}`);
    const title = page.locator("main#contenu h1");

    await expect(title).toBeVisible();
    await expect(
      page.getByRole("link", { name: /tous les projets/i }),
    ).toHaveAttribute("href", "/projets");
    await expect(
      page
        .getByRole("navigation", { name: "Navigation principale" })
        .getByRole("link", { name: "Projets", exact: true }),
    ).toHaveAttribute("aria-current", "page");
    await page.reload();
    await expect(title).toBeVisible();
    await expect(page).toHaveTitle(/Kahyl Salhi/);
  });
}

test("project case studies feature only their approved media and captions", async ({
  page,
}) => {
  const mediaProjects = [
    {
      slug: "password-checker",
      src: "/assets/images/projects/password-checker-code.png",
      caption: /Extrait du script/,
    },
    {
      slug: "cisco-rip",
      src: "/assets/images/projects/cisco-topology.png",
      caption: /Topologie présentée/,
    },
    {
      slug: "vigilflow",
      src: "/assets/images/projects/vigilflow-chart.png",
      caption: /Écran du graphique de démonstration/,
    },
    {
      slug: "bash-user-manager",
      src: "/assets/images/projects/bash-user-manager-code.png",
      caption: /Extrait de code sans/,
    },
  ];

  for (const project of mediaProjects) {
    await page.goto(`/projets/${project.slug}`);
    const gallery = page.getByRole("region", { name: "Visuels du projet" });
    const figure = gallery.locator("figure");

    await expect(figure).toHaveCount(1);
    await expect(figure.locator("img")).toHaveAttribute("src", project.src);
    await expect(figure.locator("img")).toHaveAttribute("alt", /.+/);
    await expect(figure.locator("figcaption")).toContainText(project.caption);
    await expect(figure.locator(".project-detail__figure-index")).toHaveText(
      "VISUEL / 01",
    );
  }
});

test("case-study media remains legible on a portrait phone with reduced motion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/projets/cisco-rip");

  const documentWidth = await page.evaluate(
    () => document.documentElement.scrollWidth,
  );
  expect(documentWidth).toBeLessThanOrEqual(360);

  const figure = page
    .getByRole("region", { name: "Visuels du projet" })
    .locator("figure");
  await figure.scrollIntoViewIfNeeded();
  await expect(figure.locator("img")).toBeVisible();
  await expect(figure.locator("figcaption")).toBeVisible();
  await expect(figure.locator("img")).toHaveCSS("opacity", "1");
});

test("project previews reveal only the matching reviewed image on hover and focus", async ({
  page,
}) => {
  await page.goto("/projets");

  await expect(page.locator(".project-index > li")).toHaveCount(7);
  const passwordProject = page.getByRole("link", {
    name: /Testeur de mot de passe/,
  });
  const passwordPreview = passwordProject.locator(".project-card__preview");
  await expect(
    passwordProject.locator(".project-card__technology"),
  ).toHaveText(["HTML", "CSS", "JavaScript"]);
  await passwordProject.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  const beforeHover = await passwordProject.boundingBox();

  await expect(passwordPreview.locator("img")).toHaveAttribute(
    "src",
    "/assets/images/projects/password-checker-code.png",
  );
  await expect(passwordPreview).toHaveCSS("opacity", "0");
  await passwordProject.hover();
  await expect(passwordPreview).toHaveCSS("opacity", "1");
  const afterHover = await passwordProject.boundingBox();
  expect(afterHover).toEqual(beforeHover);

  await page.mouse.move(0, 0);
  let projectFocused = false;
  for (let index = 0; index < 20 && !projectFocused; index += 1) {
    await page.keyboard.press("Tab");
    projectFocused = await passwordProject.evaluate(
      (element) => element === document.activeElement,
    );
  }
  expect(projectFocused).toBe(true);
  await expect(passwordPreview).toHaveCSS("opacity", "1");

  await expect(
    page
      .getByRole("link", { name: /Assistant de diagnostic système et réseau/ })
      .locator(".project-card__preview"),
  ).toHaveCount(0);
});

test("reviewed project previews remain visible and links usable on touch-sized layouts", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/projets");

  const project = page.getByRole("link", {
    name: /Infrastructure Cisco — RIP/,
  });
  const preview = project.locator(".project-card__preview");
  await expect(preview.locator("img")).toHaveAttribute(
    "src",
    "/assets/images/projects/cisco-topology.png",
  );
  await expect(preview).toHaveCSS("opacity", "1");

  await project.click();
  await expect(page).toHaveURL(/\/projets\/cisco-rip$/);
});

test("the static not-found document links back to working pages", async ({
  page,
}) => {
  await page.goto("/404.html");

  await expect(
    page.getByRole("heading", { name: "Cette page n’existe pas." }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Retour à l’accueil" }),
  ).toHaveAttribute("href", "/");
  await expect(
    page.getByRole("link", { name: "Voir les projets" }),
  ).toHaveAttribute("href", "/projets");
});
