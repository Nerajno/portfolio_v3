import { test, expect } from '@playwright/test';

test.describe('Changelog', () => {
  test('lists entries newest first, grouped by month, each linked', async ({ page }) => {
    await page.goto('/changelog');
    await expect(page.locator('main h1')).toHaveText('Changelog');
    const months = await page.locator('#changelog section h2 time').evaluateAll((els) => els.map((e) => e.getAttribute('datetime')));
    expect(months.length).toBeGreaterThan(0);
    expect(months).toEqual([...months].sort().reverse());
    const items = page.locator('#changelog li');
    expect(await items.count()).toBeGreaterThan(0);
    for (const li of await items.all()) {
      await expect(li.locator('a[href^="https://"]')).toHaveCount(1);
    }
  });

  test('home "Last updated" matches the newest changelog month', async ({ page }) => {
    await page.goto('/changelog');
    const newest = await page.locator('#changelog section h2 time').first().getAttribute('datetime');
    await page.goto('/');
    await expect(page.locator('time').filter({ hasText: /\d{4}/ }).first()).toHaveAttribute('datetime', newest);
    await expect(page.getByRole('link', { name: 'Full changelog →' })).toHaveAttribute('href', '/changelog');
  });

  test('footer links to the changelog', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer').getByRole('link', { name: 'Changelog' })).toHaveAttribute('href', '/changelog');
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/changelog');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
