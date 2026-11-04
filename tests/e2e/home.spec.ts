import { expect, test } from "@playwright/test";

test("the home page introduces Kahyl and links to the project and contact pages", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /building connections/i, level: 1 }),
  ).toBeVisible();
  await expect(page.locator(".home-hero__identity")).toContainText("Kahyl Salhi");
  await expect(
    page.locator("#accueil").getByText("Étudiant en BTS SIO, option SISR.", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page
      .locator("#accueil")
      .getByText("À la recherche d’une alternance en informatique."),
  ).toBeVisible();
  await expect(
    page.locator("#accueil").getByRole("link", { name: /voir les projets/i }),
  ).toHaveAttribute("href", "/projets");
  await expect(
    page.locator("#accueil").getByRole("link", { name: /me contacter/i }),
  ).toHaveAttribute("href", "/contact");
});

test("the home page presents its five editorial sections and reviewed project images", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("[data-home-section]")).toHaveCount(5);
  await expect
    .poll(() =>
      page.locator("[data-home-section]").evaluateAll((sections) =>
        sections.map((section) => section.getAttribute("data-home-section")),
      ),
    )
    .toEqual(["hero", "profile", "systems", "projects", "contact"]);

  const projectLinks = page.locator(".home-project");
  await expect(projectLinks).toHaveCount(3);
  await expect(projectLinks.nth(0)).toHaveAttribute(
    "href",
    "/projets/password-checker",
  );
  await expect(projectLinks.nth(1)).toHaveAttribute("href", "/projets/cisco-rip");
  await expect(projectLinks.nth(2)).toHaveAttribute("href", "/projets/vigilflow");
  await expect(page.locator(".home-project img")).toHaveCount(3);
  await expect(page.locator(".home-project img").nth(0)).toHaveAttribute(
    "src",
    "/assets/images/projects/password-checker-code.png",
  );
});

test("home page sections fit mobile, tablet, and desktop widths", async ({ page }) => {
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    await expect(page.locator("[data-home-section]")).toHaveCount(5);
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(scrollWidth, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(
      width,
    );
  }
});

test("the desktop hero gives the scene balanced space and the projects action priority", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const sceneWidthRatio = await page.locator(".home-hero__scene").evaluate(
    (scene) => scene.getBoundingClientRect().width /
      scene.parentElement!.getBoundingClientRect().width,
  );
  expect(sceneWidthRatio).toBeGreaterThanOrEqual(0.5);
  expect(sceneWidthRatio).toBeLessThanOrEqual(0.6);

  const titleFontSize = await page
    .locator(".home-hero__title")
    .evaluate((title) => Number.parseFloat(getComputedStyle(title).fontSize));
  expect(titleFontSize).toBeLessThanOrEqual(160);

  const primary = page.locator(".home-hero__primary");
  const secondary = page.locator(".home-hero__secondary");
  await expect(primary).toHaveAttribute("href", "/projets");
  await expect(secondary).toHaveAttribute("href", "/contact");
  await expect(primary).toHaveCSS("background-color", "rgb(49, 91, 255)");
  await expect(secondary).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await primary.hover();
  await expect(primary).toHaveCSS("background-color", "rgb(255, 112, 73)");
  await expect(secondary).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
});

test("hero actions remain visible and separate at mobile, tablet, and desktop widths", async ({
  page,
}) => {
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    const primary = page.locator(".home-hero__primary");
    const secondary = page.locator(".home-hero__secondary");
    await expect(primary).toBeVisible();
    await expect(secondary).toBeVisible();
    const [primaryBox, secondaryBox] = await Promise.all([
      primary.boundingBox(),
      secondary.boundingBox(),
    ]);
    expect(primaryBox).not.toBeNull();
    expect(secondaryBox).not.toBeNull();
    expect(
      primaryBox!.x + primaryBox!.width <= secondaryBox!.x ||
        secondaryBox!.x + secondaryBox!.width <= primaryBox!.x ||
        primaryBox!.y + primaryBox!.height <= secondaryBox!.y ||
        secondaryBox!.y + secondaryBox!.height <= primaryBox!.y,
    ).toBe(true);
  }
});

test("reduced motion keeps the static network illustration and accessible controls", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator(".network-fallback img")).toBeVisible();
  await expect(page.locator(".network-scene-canvas")).toHaveCount(0);

  await expect(page.locator(".network-scene")).toHaveAttribute(
    "data-scene-state",
    "reduced-motion",
  );
  const controls = page.getByRole("group", { name: "Équipements réseau" });
  const routerButton = controls.getByRole("button", { name: "Routeur" });
  const switchButton = controls.getByRole("button", { name: "Switch" });
  const serverButton = controls.getByRole("button", { name: "Serveur" });
  await expect(routerButton).toBeVisible();
  await expect(serverButton).toBeVisible();
  await routerButton.click();
  await expect(routerButton).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText(/achemine les paquets entre différents réseaux/i)).toBeVisible();
  await switchButton.click();
  await expect(switchButton).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText(/équipements d’un même réseau local/i)).toBeVisible();
  await serverButton.focus();
  await page.keyboard.press("Enter");
  await expect(serverButton).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText(/fournit des services ou des ressources/i)).toBeVisible();
});

test("the static network illustration remains when WebGL is unavailable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
      configurable: true,
      value(contextId: string, ...args: unknown[]) {
        if (contextId === "webgl" || contextId === "webgl2") return null;
        return Reflect.apply(getContext, this, [contextId, ...args]);
      },
    });
  });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");

  const scene = page.locator(".network-scene");
  await scene.scrollIntoViewIfNeeded();
  await expect(scene).toHaveAttribute("data-scene-state", "unavailable", {
    timeout: 20000,
  });
  await expect(page.locator(".network-fallback img")).toBeVisible();
  await expect(
    page.getByRole("group", { name: "Équipements réseau" }).getByRole("button"),
  ).toHaveCount(3);
});

test("the network scene loads only after its hero enters the viewport", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const NativeIntersectionObserver = window.IntersectionObserver;

    class DeferredSceneObserver extends NativeIntersectionObserver {
      private readonly sceneCallback: IntersectionObserverCallback;

      constructor(
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit,
      ) {
        super(callback, options);
        this.sceneCallback = callback;
      }

      override observe(target: Element) {
        if (target.matches(".network-scene")) {
          Object.defineProperty(window, "__triggerNetworkScene", {
            configurable: true,
            value: () => {
              const rectangle = target.getBoundingClientRect();
              const entry = {
                boundingClientRect: rectangle,
                intersectionRect: rectangle,
                isIntersecting: true,
                intersectionRatio: 1,
                rootBounds: null,
                target,
                time: performance.now(),
              } as IntersectionObserverEntry;
              this.sceneCallback([entry], this);
            },
          });
          return;
        }

        super.observe(target);
      }
    }

    Object.defineProperty(window, "IntersectionObserver", {
      configurable: true,
      value: DeferredSceneObserver,
    });
  });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");

  const scene = page.locator(".network-scene");
  await expect(scene).toHaveAttribute("data-scene-state", "fallback");
  await expect(page.locator(".network-fallback img")).toBeVisible();
  await expect(page.locator(".network-scene-canvas")).toHaveCount(0);

  await page.waitForFunction(
    () => typeof Reflect.get(window, "__triggerNetworkScene") === "function",
  );
  await page.evaluate(() => {
    const trigger = Reflect.get(window, "__triggerNetworkScene") as
      | (() => void)
      | undefined;
    trigger?.();
  });
  await expect(scene).toHaveAttribute("data-scene-state", "loading");
});

test("pointer selection of a network node updates its accessible description", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");

  const scene = page.locator(".network-scene");
  const canvas = page.locator(".network-scene-canvas canvas");
  await expect(canvas).toBeAttached({ timeout: 20000 });
  await expect(scene).toHaveAttribute("data-scene-state", "ready", {
    timeout: 20000,
  });
  await canvas.scrollIntoViewIfNeeded();

  const bounds = await canvas.evaluate((element) => {
    const rectangle = element.getBoundingClientRect();
    return {
      x: rectangle.x,
      y: rectangle.y,
      width: rectangle.width,
      height: rectangle.height,
    };
  });
  const serverButton = page.getByRole("button", { name: "Serveur" });
  let serverSelected = false;
  for (const yRatio of [0.59, 0.62, 0.65]) {
    for (const xRatio of [0.7, 0.73, 0.76, 0.79]) {
      await page.mouse.click(
        bounds.x + bounds.width * xRatio,
        bounds.y + bounds.height * yRatio,
      );
      if ((await serverButton.getAttribute("aria-pressed")) === "true") {
        serverSelected = true;
        break;
      }
    }
    if (serverSelected) break;
  }

  expect(serverSelected).toBe(true);
  await expect(serverButton).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText(/fournit des services ou des ressources/i)).toBeVisible();
});
