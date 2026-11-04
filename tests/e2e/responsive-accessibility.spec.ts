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
  "/projets/system-network-diagnostic",
  "/projets/network-monitor",
  "/projets/linux-diagnostic",
  "/projets/vigilflow",
  "/projets/bash-user-manager",
];

test("all required routes fit mobile, tablet, and desktop viewports", async ({
  page,
}) => {
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });

    for (const path of paths) {
      await page.goto(path);
      const documentWidth = await page.evaluate(
        () => document.documentElement.scrollWidth,
      );

      expect(documentWidth, `${path} at ${width}px`).toBeLessThanOrEqual(width);
    }
  }
});

test("keyboard users can reach the menu and visible links", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.keyboard.press("Tab");

  await expect(page.getByRole("link", { name: "Aller au contenu" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(".wordmark")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(".site-nav__toggle")).toBeFocused();
});
