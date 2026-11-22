import { test, expect } from '@playwright/test';

// #515: every flagship card links to a case study; unknown facts show as "pending".
const STUDIES = [
  { id: 'portfolio-v3', name: 'portfolio_v3' },
  { id: 'dialects', name: 'Dialects' },
  { id: 'finance-controls-lab', name: 'Finance Controls Lab' },
  { id: 'slide-warehouse', name: 'Slide Warehouse' },
  { id: 'lanyard', name: 'Lanyard' },
];
const PRIVATE_REPOS = ['github.com/Nerajno/lanyard', 'github.com/NerajnoLearning/finance-controls-lab'];

test.describe('Placeholder case studies (#515)', () => {
  for (const { id, name } of STUDIES) {
    const path = `/case-study/${id}`;

    test(`${id}: card links to its case study`, async ({ page }) => {
      await page.goto('/portfolio');
      await expect(
        page.locator(`[data-project="${id}"]`).getByRole('link', { name: /^Case study/ })
      ).toHaveAttribute('href', path);
    });

    test(`${id}: page renders the six-part shell with pending markers`, async ({ page }) => {
      expect((await page.goto(path)).status()).toBe(200);
      await expect(page.locator('main h1')).toHaveCount(1);
      await expect(page.locator('main h1')).toContainText(name);
      await expect(page.locator('main h2').filter({ hasText: /^0[1-6]/ })).toHaveCount(6);
      expect(await page.locator('main [data-pending]').count()).toBeGreaterThan(0);
      for (const repo of PRIVATE_REPOS) await expect(page.locator(`a[href*="${repo}"]`)).toHaveCount(0);
    });

    test(`${id}: no element past the edge at 320px`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 800 });
      expect((await page.goto(path)).status()).toBe(200);
      const overflowing = await page.evaluate(() =>
        [...document.querySelectorAll('main *')]
          .filter((el) => el.getBoundingClientRect().right > 320.5)
          .map((el) => `${el.tagName.toLowerCase()} right=${Math.round(el.getBoundingClientRect().right)}`)
      );
      expect(overflowing).toEqual([]);
    });
  }
});
