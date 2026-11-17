import { test, expect } from '@playwright/test';

test.describe('404 page', () => {
  test('unknown route returns 404 and renders the not-found page', async ({ page }) => {
    const res = await page.goto('/this-route-does-not-exist');
    expect(res.status()).toBe(404);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toHaveText(/Not every branch gets merged/);
  });

  test('recovery links point to real pages', async ({ page }) => {
    await page.goto('/this-route-does-not-exist');
    const recovery = page.getByRole('navigation', { name: 'Recovery links' });
    const expected = { 'Back home': '/', 'See the work': '/portfolio', 'Read the blog': '/blog' };
    for (const [name, href] of Object.entries(expected)) {
      const link = recovery.getByRole('link', { name });
      await expect(link).toHaveAttribute('href', href);
      expect((await page.request.get(href)).status()).toBe(200);
    }
    await expect(page.getByRole('link', { name: 'Tell me' })).toHaveAttribute('href', '/contact');
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/this-route-does-not-exist');
    await expect(page.getByRole('link', { name: 'Back home' })).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
