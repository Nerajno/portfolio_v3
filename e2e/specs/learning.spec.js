import { test, expect } from '@playwright/test';

test.describe('Learning template (#472)', () => {
  test('learning project renders the shared template on the learn surface', async ({ page }) => {
    const res = await page.goto('/learning-projects/vue-3-testing');
    expect(res.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('data-surface', 'learn');
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toHaveText('Testing Vue 3 like I mean it');
    await expect(page.getByText(/3 of 5 milestones/i)).toBeVisible();
    await expect(page.locator('section[aria-labelledby="milestones-heading"] li')).toHaveCount(5);
    await expect(page.locator('section[aria-labelledby="log-heading"] li').first()).toContainText('2026-11-15');
    await expect(page.locator('[data-pending="repo"]')).toBeVisible();
    await expect(page.getByText(/Graduation rule/)).toBeVisible();
  });

  test('learning plot pages build again for shipped projects', async ({ page }) => {
    for (const id of ['trapper-keeper', 'burble', 'terminus']) {
      const res = await page.goto(`/learning-plot/${id}`);
      expect(res.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('data-surface', 'learn');
      await expect(page.locator('main h1')).toHaveCount(1);
      await expect(page.getByRole('link', { name: 'full case study →' })).toHaveAttribute('href', `/case-study/${id}`);
    }
  });

  test('portfolio learning cards link to their plot and show a stage label', async ({ page }) => {
    await page.goto('/portfolio');
    await page.locator('#toggle-learning-showcase').click();
    const card = page.locator('article[data-learning-project="vue-3-testing"]');
    await expect(card).toContainText('budding');
    await expect(card.getByRole('link', { name: /Open learning plot/ })).toHaveAttribute('href', '/learning-projects/vue-3-testing');
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/learning-projects/vue-3-testing');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
