import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const locales = ["en", "nl", "no"]
const pages = ["", "coaching", "method", "for-cyclists", "about", "results", "packages", "faq", "knowledge", "contact", "privacy", "terms"]
const articles = ["online-coaching-vs-training-plan", "critical-power-vs-ftp", "training-around-work-and-family", "internal-vs-external-training-load", "how-often-training-plan-should-change", "gran-fondo-preparation"]

for (const locale of locales) {
  test.describe(`${locale} routes`, () => {
    for (const route of pages) {
      test(`${route || "home"} renders and passes critical accessibility checks`, async ({ page }) => {
        await page.goto(`/${locale}${route ? `/${route}` : ""}`)
        await expect(page.locator("h1")).toBeVisible()
        await expect(page.locator("html")).toHaveAttribute("lang", locale)
        const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze()
        expect(results.violations.filter((violation) => ["critical", "serious"].includes(violation.impact ?? ""))).toEqual([])
      })
    }

    for (const slug of articles) {
      test(`article ${slug} renders`, async ({ page }) => {
        await page.goto(`/${locale}/knowledge/${slug}`)
        await expect(page.locator("article.prose-shell")).toBeVisible()
        await expect(page.locator('script[type="application/ld+json"]')).not.toHaveCount(0)
      })
    }
  })
}

test("root permanently resolves to English", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveURL(/\/en$/)
})

test("language switch preserves the route", async ({ page }) => {
  await page.goto("/en/method")
  await page.locator("#site-language").selectOption("nl")
  await expect(page).toHaveURL(/\/nl\/method$/)
})

test("metadata includes canonical, alternates and social image", async ({ page }) => {
  await page.goto("/en/coaching")
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://www.tychocoaching.com/en/coaching")
  await expect(page.locator('link[rel="alternate"][hreflang="nl"]')).toHaveAttribute("href", "https://www.tychocoaching.com/nl/coaching")
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /og-image\.png/)
})

test("mobile navigation opens and remains keyboard-labelled", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/en")
  const toggle = page.locator(".menu-toggle")
  await toggle.click()
  await expect(toggle).toHaveAttribute("aria-expanded", "true")
  await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible()
})

test("intake submits localized data", async ({ page }) => {
  await page.route("**/api/intake", async (route) => route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true, submissionId: "test-id" }) }))
  await page.goto("/en/contact?package=premium")
  await page.locator("#name").fill("Test Rider")
  await page.locator("#email").fill("rider@example.com")
  await page.locator("#country").fill("Netherlands")
  await page.locator("#discipline").selectOption("road")
  await page.locator("#level").selectOption("amateur")
  await page.locator("#weeklyHours").fill("8")
  await page.locator("#powerMeter").selectOption("yes")
  await page.locator("#primaryGoal").fill("Finish my target gran fondo strongly")
  await page.locator("#platform").selectOption("intervals")
  await page.locator('input[name="consent"]').check()
  await page.getByRole("button", { name: /Send my intake/ }).click()
  await expect(page.getByText("Your intake is with me.")).toBeVisible()
})

test("unknown routes show a useful 404", async ({ page }) => {
  await page.goto("/en/this-page-does-not-exist")
  await expect(page.getByRole("heading", { name: "The road ends here." })).toBeVisible()
})

test("crawler endpoints are available", async ({ request }) => {
  const [robots, sitemap] = await Promise.all([request.get("/robots.txt"), request.get("/sitemap.xml")])
  expect(robots.ok()).toBeTruthy()
  expect(await robots.text()).toContain("Sitemap: https://www.tychocoaching.com/sitemap.xml")
  expect(sitemap.ok()).toBeTruthy()
  expect(await sitemap.text()).toContain("/no/knowledge/critical-power-vs-ftp")
})

test("field manual concept stays private and accessible", async ({ page, request }) => {
  await page.goto("/en/concept")
  await expect(page.getByRole("heading", { name: "Turn your ambition into better days on the bike." })).toBeVisible()
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/)

  const indexToggle = page.getByRole("button", { name: "Open site index" })
  await indexToggle.click()
  await expect(page.getByRole("button", { name: "Close site index" })).toHaveAttribute("aria-expanded", "true")
  await expect(page.getByRole("navigation", { name: "Concept site index" })).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(page.getByRole("button", { name: "Open site index" })).toBeFocused()

  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze()
  expect(results.violations.filter((violation) => ["critical", "serious"].includes(violation.impact ?? ""))).toEqual([])

  const sitemap = await request.get("/sitemap.xml")
  expect(await sitemap.text()).not.toContain("/en/concept")
  expect((await request.get("/nl/concept")).status()).toBe(404)
})

test("field manual concept has a reduced-motion reading mode", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/en/concept")
  await expect(page.locator('article[data-step="0"]')).toBeVisible()
  await expect(page.locator('article[data-step="1"]')).toBeVisible()
  await expect(page.locator('article[data-step="2"]')).toBeVisible()
  await expect(page.locator('article[data-step="1"] img')).toBeVisible()
})
