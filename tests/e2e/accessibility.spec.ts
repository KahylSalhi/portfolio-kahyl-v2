import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const paths = [
  "/",
  "/projets",
  "/profil",
  "/veille-technologique",
  "/ecole",
  "/contact",
  "/projets/password-checker",
  "/projets/cisco-rip",
  "/projets/vigilflow",
  "/projets/bash-user-manager",
];

for (const path of paths) {
  test(`${path} has no automated accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
}

test("reduced motion is respected without hiding route content", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/projets");

  await expect(
    page.getByRole("heading", { name: "Des idées mises à l’épreuve." }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Profil", exact: true })).toBeVisible();
});
