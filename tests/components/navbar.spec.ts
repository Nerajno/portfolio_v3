import { test, expect } from "@playwright/test";

test.describe("Navbar Component", () => {
  test("should render the navbar", async ({ page }) => {
    await page.goto("/__tests__/navbar-test");
    await expect(page.locator("nav")).toBeVisible();
    await expect(page.locator("body")).toContainText(["Home", "About", "Blog"]); // Adjust keywords as needed
  });
});
