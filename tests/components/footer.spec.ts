import { test, expect } from "@playwright/test";

test.describe("Footer Component", () => {
  test("should render the footer", async ({ page }) => {
    await page.goto("/__tests__/footer-test");
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("body")).toContainText([
      "©",
      "contact",
      "portfolio",
    ]); // Adjust keywords as needed
  });
});
