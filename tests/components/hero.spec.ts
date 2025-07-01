import { test, expect } from "@playwright/test";

test.describe("Hero Component", () => {
  test("should render the hero section", async ({ page }) => {
    await page.goto("/__tests__/hero-test");
    await expect(page.locator("h1, h2")).toHaveCount(1);
    await expect(page.locator("body")).toContainText([
      "hero",
      "portfolio",
      "developer",
    ]); // Adjust keywords as needed
  });
});
