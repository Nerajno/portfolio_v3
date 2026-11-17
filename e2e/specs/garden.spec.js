import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const { notes } = JSON.parse(readFileSync(new URL('../../src/data/garden-notes.json', import.meta.url), 'utf8'));
const count = (stage) => (stage === 'all' ? notes.length : notes.filter((n) => n.stage === stage).length);

test.describe('Digital garden (#471)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/digital_garden');
  });

  test('renders on the learn surface with one h1', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('data-surface', 'learn');
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toHaveText('Digital garden');
  });

  test('stage counts come from the note data', async ({ page }) => {
    for (const stage of ['all', 'seedling', 'budding', 'evergreen']) {
      await expect(page.locator(`.stage-filter[data-stage="${stage}"] [data-count]`)).toHaveText(String(count(stage)));
    }
    await expect(page.locator('.garden-note')).toHaveCount(notes.length);
  });

  test('stage filter narrows the grid and is keyboard operable', async ({ page }) => {
    const budding = page.locator('.stage-filter[data-stage="budding"]');
    await budding.focus();
    await page.keyboard.press('Enter');
    await expect(budding).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.stage-filter[data-stage="all"]')).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('.garden-note:visible')).toHaveCount(count('budding'));
    await expect(page.locator('#garden-status')).toHaveText(`Showing ${count('budding')} budding notes`);

    await page.locator('.stage-filter[data-stage="all"]').click();
    await expect(page.locator('.garden-note:visible')).toHaveCount(notes.length);
  });

  test('note cards link to the garden', async ({ page }) => {
    const links = page.locator('.garden-note a');
    const n = await links.count();
    for (let i = 0; i < n; i++) {
      await expect(links.nth(i)).toHaveAttribute('href', /^https:\/\/garden\.developingdvlpr\.com\/note\/[a-z0-9-]+$/);
      await expect(links.nth(i)).toHaveAttribute('rel', /noopener/);
    }
  });

  test('graduation band and essay section', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'the blog' })).toHaveAttribute('href', '/blog');
    await expect(page.getByRole('link', { name: 'the portfolio' })).toHaveAttribute('href', '/portfolio');
    const details = page.locator('details:has(h2:text("Why a digital garden?"))');
    await expect(details).not.toHaveAttribute('open');
    await details.locator('summary').click();
    await expect(details.getByText('Progress is a process.')).toBeVisible();
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
