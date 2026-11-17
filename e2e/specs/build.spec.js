import { test, expect } from '@playwright/test';

test.describe('How I build', () => {
  test('build surface, one h1, owner content pending', async ({ page }) => {
    await page.goto('/how-i-build');
    await expect(page.locator('html')).toHaveAttribute('data-surface', 'build');
    await expect(page.locator('main h1')).toHaveText('How I build');
    for (const key of ['workflow', 'ai-split', 'data-handling']) {
      await expect(page.locator(`[data-pending="${key}"]`)).toHaveCount(1);
    }
    await expect(page.locator('[data-pending="scorecard"]')).toHaveCount(5);
  });

  test('build sub-nav marks the current page', async ({ page }) => {
    await page.goto('/how-i-build');
    const nav = page.getByRole('navigation', { name: 'Build pages' });
    await expect(nav.getByRole('link', { name: 'how-i-build' })).toHaveAttribute('aria-current', 'page');
    await expect(nav.getByRole('link', { name: 'decisions' })).toHaveAttribute('href', '/decisions');
  });
});

test.describe('Decision records', () => {
  test('index rows link to a full record with all four fields', async ({ page }) => {
    await page.goto('/decisions');
    await expect(page.locator('html')).toHaveAttribute('data-surface', 'build');
    const rows = page.locator('#adr-index tbody tr');
    expect(await rows.count()).toBeGreaterThan(0);
    for (const row of await rows.all()) {
      const href = await row.locator('a').getAttribute('href');
      const record = page.locator(href);
      await expect(record).toHaveCount(1);
      for (const field of ['context', 'options', 'decision', 'consequences']) {
        await expect(record.locator('dt', { hasText: field })).toHaveCount(1);
      }
      expect(await record.locator('a[href^="https://github.com/"]').count()).toBeGreaterThan(0);
    }
  });

  test('status is shown as text, newest first', async ({ page }) => {
    await page.goto('/decisions');
    const statuses = await page.locator('#adr-index [data-status]').allTextContents();
    for (const s of statuses) expect(['accepted', 'superseded']).toContain(s.trim());
    const dates = await page.locator('#adr-index time').evaluateAll((els) => els.map((e) => e.getAttribute('datetime')));
    expect(dates).toEqual([...dates].sort().reverse());
  });
});

for (const path of ['/how-i-build', '/decisions']) {
  test(`${path} works at 375px without horizontal page scroll`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}
