import { test, expect } from '@playwright/test';

// #515: six flagship projects, in this order, on /portfolio and the homepage.
const SIX = ['portfolio-v3', 'dialects', 'finance-controls-lab', 'isnerandodoneyet', 'slide-warehouse', 'lanyard'];
const HIDDEN = ['receipts-poll', 'blog-rag', 'tiny-desk-api'];
const PRIVATE_REPOS = ['github.com/Nerajno/lanyard', 'github.com/NerajnoLearning/finance-controls-lab'];

const featuredIds = (page) =>
  page.locator('article[data-project]').evaluateAll((els) => els.map((el) => el.dataset.project));

test.describe('Six flagship projects (#515)', () => {
  test('/portfolio shows the six, in order, first', async ({ page }) => {
    await page.goto('/portfolio');
    expect((await featuredIds(page)).slice(0, 6)).toEqual(SIX);
  });

  test('the three demoted cards are gone', async ({ page }) => {
    await page.goto('/portfolio');
    for (const id of HIDDEN) await expect(page.locator(`[data-project="${id}"]`)).toHaveCount(0);
  });

  test('every card shows a type and a ship status', async ({ page }) => {
    await page.goto('/portfolio');
    for (const id of SIX) {
      const card = page.locator(`article[data-project="${id}"]`);
      await expect(card.locator('div.text-xs > span.text-soft').first(), id).not.toBeEmpty();
      await expect(card.getByText(/^(Shipped|In progress)$/), id).toHaveCount(1);
    }
  });

  test('private repos show as pending, never as links', async ({ page }) => {
    await page.goto('/portfolio');
    for (const id of ['lanyard', 'finance-controls-lab']) {
      await expect(page.locator(`[data-project="${id}"] [data-pending="repo"]`), id).toHaveCount(1);
    }
    for (const repo of PRIVATE_REPOS) await expect(page.locator(`a[href*="${repo}"]`)).toHaveCount(0);
  });

  test('homepage features the same six', async ({ page }) => {
    await page.goto('/');
    expect(await featuredIds(page)).toEqual(SIX);
  });

  test('/recruiters lists the first three', async ({ page }) => {
    await page.goto('/recruiters');
    await expect(page.locator('#three-things h3')).toHaveText(['portfolio_v3', 'Dialects', 'Finance Controls Lab']);
  });

  test('portfolio ItemList schema names the six', async ({ page }) => {
    await page.goto('/portfolio');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const text = blocks.join('\n');
    for (const name of ['portfolio_v3', 'Dialects', 'Finance Controls Lab', 'IsNerandoDoneYet', 'Slide Warehouse', 'Lanyard']) {
      expect(text, name).toContain(name);
    }
  });
});

test('schema case study urls all resolve', async ({ page }) => {
  await page.goto('/portfolio');
  const text = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n');
  const paths = [...new Set([...text.matchAll(/developingdvlpr\.com(\/case-study\/[a-z0-9-]+)/g)].map((m) => m[1]))];
  expect(paths.length).toBeGreaterThan(0);
  for (const path of paths) expect((await page.request.get(path)).status(), path).toBe(200);
});
