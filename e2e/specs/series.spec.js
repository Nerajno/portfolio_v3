import { test, expect } from '@playwright/test';

const URL = '/series/vue-3-fundamentals';

test.describe('Series page', () => {
  test('one h1 with the series name and a published/total progress count', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toHaveText('Vue 3 Fundamentals');
    const parts = page.locator('#series-parts > li[data-status="published"], #series-parts > li[data-status="drafting"]');
    const total = await parts.count();
    const published = await page.locator('#series-parts > li[data-status="published"]').count();
    await expect(page.locator('#series-progress')).toContainText(`${published} of ${total} published`);
  });

  test('parts are listed in series order', async ({ page }) => {
    await page.goto(URL);
    const nums = await page.locator('#series-parts > li[data-status] .font-mono.w-8').allTextContents();
    const asInts = nums.map((n) => parseInt(n, 10));
    expect(asInts).toEqual([...asInts].sort((a, b) => a - b));
  });

  test('published parts link to their post; drafting parts are not linked', async ({ page }) => {
    await page.goto(URL);
    for (const li of await page.locator('#series-parts > li[data-status="published"]').all()) {
      await expect(li.locator('a[href^="/blog/"]')).toHaveCount(1);
    }
    for (const li of await page.locator('#series-parts > li[data-status="drafting"]').all()) {
      await expect(li.locator('a')).toHaveCount(0);
      await expect(li).toContainText('Drafting');
    }
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(URL);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
