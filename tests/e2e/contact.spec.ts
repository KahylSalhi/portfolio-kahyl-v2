import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";

test("the contact page presents the exact approved contact destinations", async ({
  page,
}) => {
  await page.goto("/contact");

  await expect(
    page.getByRole("heading", { name: "LET'S CONNECT.", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByText("Étudiant en deuxième année de BTS SIO, option SISR."),
  ).toBeVisible();
  await expect(
    page.getByText(
      /À la recherche d’une alternance en informatique, notamment en systèmes, réseaux ou support informatique/i,
    ),
  ).toBeVisible();

  const emailLink = page.getByRole("link", { name: /kahylsalhi@gmail\.com/ });
  const githubLink = page.getByRole("link", { name: /github\.com\/KahylSalhi/ });
  const linkedInLink = page.getByRole("link", {
    name: /linkedin\.com\/in\/kahyl-salhi-8b0110388\//,
  });

  await expect(emailLink).toHaveAttribute(
    "href",
    "mailto:kahylsalhi@gmail.com",
  );
  await expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/KahylSalhi",
  );
  await expect(githubLink).toHaveAttribute("target", "_blank");
  await expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  await expect(linkedInLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/kahyl-salhi-8b0110388/",
  );
  await expect(linkedInLink).toHaveAttribute("target", "_blank");
  await expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  await expect(
    page.getByText(/en attente de validation|à valider avant publication/i),
  ).toHaveCount(0);

  await expect(page.getByRole("heading", { name: "Mon CV" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Télécharger mon CV" }),
  ).toHaveAttribute("href", "/documents/CV_Kahyl_SALHI.pdf");
  await expect(
    page.locator('a[download][href="/documents/CV_Kahyl_SALHI.pdf"]'),
  ).toHaveCount(1);
});

test("the approved CV link downloads the PDF", async ({ page }) => {
  await page.goto("/contact");

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Télécharger mon CV" }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe("CV_Kahyl_SALHI.pdf");
  expect(await download.failure()).toBeNull();

  const downloadPath = await download.path();
  if (!downloadPath) {
    throw new Error("Playwright did not provide the downloaded CV file.");
  }
  const downloadedPdf = await readFile(downloadPath);
  expect(downloadedPdf.subarray(0, 5).toString()).toBe("%PDF-");
});

test("contact links have visible hover and keyboard-focus states", async ({
  page,
}) => {
  await page.goto("/contact");
  const emailLink = page.getByRole("link", { name: /kahylsalhi@gmail\.com/ });
  const card = page.locator(".contact-channel-card[href]").first();

  await page.getByRole("link", { name: /COORDONNÉES/ }).focus();
  await page.keyboard.press("Tab");
  await expect(emailLink).toBeFocused();
  await expect(emailLink).toHaveCSS("outline-style", "solid");

  await card.hover();
  await expect(card).toHaveCSS("transform", /matrix/);
});

for (const width of [360, 768, 1440]) {
  test(`contact page fits a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/contact");

    const documentWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(documentWidth).toBeLessThanOrEqual(width);
    await expect(
      page.getByRole("heading", { name: "LET'S CONNECT.", level: 1 }),
    ).toBeVisible();
  });
}

test("contact content remains available with reduced motion enabled", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/contact");

  await expect(
    page.getByRole("heading", { name: "LET'S CONNECT.", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Le bon canal, au bon moment." }),
  ).toBeVisible();
});
