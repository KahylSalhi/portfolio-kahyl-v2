import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", currentLink: "Accueil", heading: "Building Connections." },
  { path: "/projets", currentLink: "Projets", heading: "Des idées mises à l’épreuve." },
  {
    path: "/profil",
    currentLink: "Profil",
    heading: "Curieux des systèmes. Attentif aux connexions.",
  },
  {
    path: "/veille-technologique",
    currentLink: "Veille",
    heading: "ZERO TRUST.",
  },
  { path: "/ecole", currentLink: "École", heading: "Mon école et ma formation." },
  { path: "/contact", currentLink: "Contact", heading: "LET'S CONNECT." },
];

for (const item of pages) {
  test(`${item.path} loads directly and after refresh`, async ({ page }) => {
    await page.goto(item.path);
    await expect(page.locator("main#contenu")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: item.heading, level: 1 }),
    ).toBeVisible();
    await expect(
      page
        .getByRole("navigation", { name: "Navigation principale" })
        .getByRole("link", { name: item.currentLink, exact: true }),
    ).toHaveAttribute("aria-current", "page");

    await page.reload();
    await expect(
      page.getByRole("heading", { name: item.heading, level: 1 }),
    ).toBeVisible();
  });
}

test("the owner's name returns to home", async ({ page }) => {
  await page.goto("/ecole");
  await page.locator(".wordmark").click();

  await expect(page).toHaveURL("/");
  await expect(
    page.getByRole("heading", { name: "Building Connections.", level: 1 }),
  ).toBeVisible();
});

test("route changes use a short enter transition", async ({ page }) => {
  await page.goto("/ecole");
  await page.waitForTimeout(350);
  await page
    .getByRole("navigation", { name: "Navigation principale" })
    .getByRole("link", { name: "Contact", exact: true })
    .click();

  await expect(page).toHaveURL("/contact");
  await expect
    .poll(() =>
      page.locator(".route-transition").evaluate((element) =>
        element
          .getAnimations()
          .filter((animation) => animation.playState === "running")
          .map((animation) => animation.effect?.getTiming().duration),
      ),
    )
    .toContain(280);
});

test("route changes do not animate when reduced motion is requested", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/ecole");
  await page
    .getByRole("navigation", { name: "Navigation principale" })
    .getByRole("link", { name: "Contact", exact: true })
    .click();

  await expect(page).toHaveURL("/contact");
  await expect
    .poll(() =>
      page.locator(".route-transition").evaluate((element) =>
        element
          .getAnimations()
          .filter((animation) => animation.playState === "running"),
      ),
    )
    .toHaveLength(0);
});

test("browser back and forward keep route navigation working", async ({
  page,
}) => {
  await page.goto("/ecole");
  await page
    .getByRole("navigation", { name: "Navigation principale" })
    .getByRole("link", { name: "Profil", exact: true })
    .click();
  await expect(page).toHaveURL("/profil");

  await page.goBack();
  await expect(page).toHaveURL("/ecole");
  await expect(
    page.getByRole("heading", { name: "Mon école et ma formation." }),
  ).toBeVisible();

  await page.goForward();
  await expect(page).toHaveURL("/profil");
  await expect(
    page.getByRole("heading", {
      name: "Curieux des systèmes. Attentif aux connexions.",
    }),
  ).toBeVisible();
});

test("the mobile menu opens and closes after navigation", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const menuButton = page.locator(".site-nav__toggle");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("link", { name: "École", exact: true }).click();

  await expect(page).toHaveURL("/ecole");
  await expect(
    page.getByRole("button", { name: "Ouvrir le menu" }),
  ).toHaveAttribute("aria-expanded", "false");
});
