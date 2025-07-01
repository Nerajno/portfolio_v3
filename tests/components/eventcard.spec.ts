import { test, expect } from "@playwright/test";

test.describe("EventCard Component", () => {
  test("should render the event card with mock data", async ({ page }) => {
    await page.goto("/__tests__/eventcard-test");
    await expect(page.locator("h3")).toHaveText("Test Event");
    await expect(page.locator("body")).toContainText([
      "Test City",
      "Testland",
      "Upcoming",
      "Event Details",
    ]);
  });
});
