import { expect, test } from "@playwright/test";

test("profile presents the confirmed education timeline and current BTS status", async ({
  page,
}) => {
  await page.goto("/profil");

  const experiences = page.getByRole("list", {
    name: "Expériences professionnelles",
  });
  await expect(experiences).toBeVisible();
  const casinoHeading = experiences.getByRole("heading", {
    name: "Stage Support IT",
  });
  await casinoHeading.scrollIntoViewIfNeeded();
  await expect(
    casinoHeading,
  ).toBeVisible();
  await expect(experiences.getByText("Groupe Casino")).toBeVisible();
  await expect(
    experiences.getByText(
      "Remplacement de composants : SSD, RAM, batterie et périphériques.",
    ),
  ).toBeVisible();
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  for (const role of [
    "Employé polyvalent",
    "Animateur école",
    "Stage Support et découverte SI",
  ]) {
    const heading = experiences.getByRole("heading", { name: role });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  }
  await expect(
    page.locator(".profile-experience--it"),
  ).toHaveCount(2);
  await expect(
    page.locator(".profile-experience--other"),
  ).toHaveCount(2);

  await expect(page.getByRole("list", { name: "Parcours scolaire" })).toBeVisible();
  await expect(page.getByText("2022 — 2023")).toBeVisible();
  await expect(page.getByText("2023 — 2024")).toBeVisible();
  await expect(page.getByText("Depuis 2025")).toBeVisible();
  await expect(
    page.getByText("Étudiant en deuxième année de BTS SIO, option SISR."),
  ).toBeVisible();
  await expect(page.getByText("CFA INSTA", { exact: true })).toBeVisible();
  await expect(
    page.getByText(
      /alternance en informatique, notamment en systèmes, réseaux ou support informatique/i,
    ),
  ).toBeVisible();
});

test("profile experiences remain available with reduced motion enabled", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/profil");

  const experiences = page.getByRole("list", {
    name: "Expériences professionnelles",
  });
  const casinoHeading = experiences.getByRole("heading", {
    name: "Stage Support IT",
  });
  await casinoHeading.scrollIntoViewIfNeeded();
  await expect(casinoHeading).toBeVisible();
  const axaHeading = experiences.getByRole("heading", {
    name: "Stage Support et découverte SI",
  });
  await axaHeading.scrollIntoViewIfNeeded();
  await expect(axaHeading).toBeVisible();
});

test("school page uses the reviewed local CFA INSTA logo and confirmed details", async ({
  page,
}) => {
  await page.goto("/ecole");

  const logo = page.getByRole("img", { name: "Logo du CFA INSTA" });
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute(
    "src",
    "/assets/images/school/cfa-insta-logo.png",
  );
  await expect(page.getByText("CFA INSTA", { exact: true })).toBeVisible();
  await expect(
    page.getByText(/J’y suis actuellement en deuxième année/i),
  ).toBeVisible();
  await expect(page.getByText(/programme officiel/i)).toBeVisible();
  await expect(logo).toHaveJSProperty("naturalWidth", 597);
});

for (const width of [360, 768, 1440]) {
  test(`profile and school fit a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });

    for (const route of ["/profil", "/ecole"]) {
      await page.goto(route);
      const documentWidth = await page.evaluate(
        () => document.documentElement.scrollWidth,
      );
      expect(documentWidth, `${route} overflows at ${width}px`).toBeLessThanOrEqual(
        width,
      );
    }
  });
}
