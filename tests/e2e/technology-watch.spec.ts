import { expect, test } from "@playwright/test";

test("the Zero Trust flow is keyboard-operable and its policy decision responds to device state", async ({
  page,
}) => {
  await page.goto("/veille-technologique");

  await expect(
    page.getByRole("heading", { name: "ZERO TRUST." }),
  ).toBeVisible();
  const controlsStep = page.getByRole("button", {
    name: "03 Contrôles",
  });
  await controlsStep.evaluate((element) =>
    element.scrollIntoView({ block: "center", behavior: "instant" }),
  );
  await controlsStep.focus();
  await expect(controlsStep).toBeFocused();
  await controlsStep.press("Enter");
  await expect(
    page.getByRole("heading", { name: "Les droits et le contexte sont contrôlés." }),
  ).toBeVisible();

  const deviceControl = page.getByRole("button", { name: /État de l’appareil/ });
  await deviceControl.focus();
  await page.keyboard.press("Enter");
  await expect(deviceControl).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("button", { name: "04 Décision" }).click();
  await expect(page.getByText("Accès autorisé")).toBeVisible();
  await expect(
    page.getByText("Identité vérifiée et appareil conforme."),
  ).toBeVisible();

  await page.getByRole("button", { name: "03 Contrôles" }).click();
  await page.getByRole("button", { name: /État de l’appareil/ }).click();
  await page.getByRole("button", { name: "04 Décision" }).click();
  await expect(page.getByText("Accès refusé")).toBeVisible();
});

test("the watch page distinguishes dated references from the CERT-FR feed", async ({
  page,
}) => {
  await page.goto("/veille-technologique");

  await expect(page.getByText("20 juin 2025")).toBeVisible();
  await expect(page.getByText("août 2020")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Un flux, pas une publication de référence." }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Ouvrir les alertes CERT-FR" }),
  ).toHaveAttribute("href", "https://www.cert.cyber.gouv.fr/alerte");

  const newsSection = page.getByRole("region", {
    name: "L’évolution du Zero Trust en 2026",
  });
  await expect(newsSection).toBeVisible();
  await expect(
    newsSection.getByRole("article"),
  ).toHaveCount(3);
  await expect(
    newsSection.getByText("14 janvier 2026", { exact: true }),
  ).toBeVisible();
  await expect(
    newsSection.getByText("19 mars 2026", { exact: true }),
  ).toBeVisible();
  await expect(
    newsSection.getByText("15 septembre 2026", { exact: true }),
  ).toBeVisible();
  await expect(
    newsSection.getByText(/aucun statut de lecture n’est renseigné/i),
  ).toBeVisible();
  await expect(
    newsSection.getByText("Questions pour mon analyse", { exact: true }),
  ).toHaveCount(3);
  await expect(
    newsSection.getByText("Qu’est-ce que cette publication m’apprend ?", {
      exact: true,
    }),
  ).toHaveCount(3);
  await expect(
    newsSection.getByText(
      "Quel lien avec mes projets Cisco, Linux ou Bash ?",
      { exact: true },
    ),
  ).toHaveCount(3);
  await expect(
    newsSection.getByText(
      "Quelle application pourrait-on imaginer dans une entreprise ?",
      { exact: true },
    ),
  ).toHaveCount(3);
  await expect(
    newsSection.getByRole("link", { name: "Lire la publication officielle" }),
  ).toHaveCount(3);

  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const documentWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(documentWidth, `viewport ${width}px`).toBeLessThanOrEqual(width);
  }
});

test("reduced motion keeps the diagram and all page content available", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/veille-technologique");

  await expect(
    page.getByRole("heading", { name: "ZERO TRUST." }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "01 Demande" }),
  ).toBeVisible();
  const nextStep = page.getByRole("button", { name: "Étape suivante" });
  await nextStep.evaluate((element) =>
    element.scrollIntoView({ block: "center", behavior: "instant" }),
  );
  await nextStep.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("heading", { name: "L’identité est vérifiée." }),
  ).toBeVisible();
});
