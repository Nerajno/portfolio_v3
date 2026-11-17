import { test, expect } from '@playwright/test';

// Open the first post shown in the list. Uses the href directly instead of
// waiting for `networkidle`, which analytics scripts never let settle.
async function openFirstPost(page) {
  await page.goto('/blog');
  const href = await page.locator('#blog-posts > li:not([hidden]) h2 a').first().getAttribute('href');
  expect(href).toMatch(/^\/blog\/[^/]+$/);
  const res = await page.goto(href);
  expect(res.status()).toBe(200);
  return href;
}

test.describe('Blog index (#341)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('renders on the teach surface with one h1', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('data-surface', 'teach');
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toHaveText('My MetaData');
  });

  test('shows a featured post and a paginated list', async ({ page }) => {
    await expect(page.locator('#featured-post h2 a')).toHaveAttribute('href', /^\/blog\/[^/]+$/);
    const visible = page.locator('#blog-posts > li:not([hidden])');
    await expect(visible).toHaveCount(7);
    // The featured post is not repeated in the unfiltered list
    const featuredHref = await page.locator('#featured-post h2 a').getAttribute('href');
    await expect(page.locator(`#blog-posts > li:not([hidden]) a[href="${featuredHref}"]`)).toHaveCount(0);
  });

  test('pagination moves between pages', async ({ page }) => {
    const firstTitle = await page.locator('#blog-posts > li:not([hidden]) h2').first().textContent();
    await page.getByRole('button', { name: 'Page 2' }).click();
    await expect(page.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page');
    await expect(page.locator('#blog-posts > li:not([hidden]) h2').first()).not.toHaveText(firstTitle);
    await page.locator('#prev-page').click();
    await expect(page.locator('#blog-posts > li:not([hidden]) h2').first()).toHaveText(firstTitle);
  });

  test('search filters and clearing restores every post (#373)', async ({ page }) => {
    const total = await page.locator('#blog-posts > li').count();
    await page.locator('#search').fill('vue');
    await expect(page.locator('#featured-post')).toBeHidden();
    await expect(page.locator('#blog-status')).toHaveText(/\d+ posts? found/);
    const matches = await page.locator('#blog-posts > li:not([hidden])').count();
    expect(matches).toBeGreaterThan(0);

    await page.locator('#search').fill('zzzz-no-such-post');
    await expect(page.locator('#no-results')).toBeVisible();

    await page.locator('#search').fill('');
    await expect(page.locator('#featured-post')).toBeVisible();
    await expect(page.locator('#blog-posts > li')).toHaveCount(total); // nothing was removed from the DOM
    await expect(page.locator('#blog-posts > li:not([hidden])')).toHaveCount(7);
  });

  test('series filter shows only that series', async ({ page }) => {
    const series = await page.locator('#series-filter option').nth(1).getAttribute('value');
    await page.locator('#series-filter').selectOption(series);
    const items = page.locator('#blog-posts > li:not([hidden])');
    await expect(items.first()).toBeVisible();
    for (const value of await items.evaluateAll((els) => els.map((el) => el.dataset.series))) {
      expect(value).toBe(series);
    }
  });

  test('topic chip fills the search', async ({ page }) => {
    const chip = page.locator('.topic-chip').first();
    const tag = await chip.getAttribute('data-tag');
    await chip.click();
    await expect(page.locator('#search')).toHaveValue(tag);
    await expect(page.locator('#featured-post')).toBeHidden();
  });

  test('sidebar links to series pages and RSS', async ({ page }) => {
    const seriesLink = page.locator('section[aria-labelledby="series-heading"] a').first();
    const href = await seriesLink.getAttribute('href');
    expect(href).toMatch(/^\/series\/[^/]+$/);
    expect((await page.request.get(href)).status()).toBe(200);
    await expect(page.getByRole('link', { name: 'RSS feed →' })).toHaveAttribute('href', '/rss.xml');
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});

test.describe('Blog post', () => {
  test('navigates from the index to a post', async ({ page }) => {
    const href = await openFirstPost(page);
    expect(page.url()).toContain(href);
    await expect(page.locator('main h1')).toBeVisible();
    expect(await page.locator('main time').count()).toBeGreaterThan(0);
  });

  test('renders markdown content', async ({ page }) => {
    await openFirstPost(page);
    const prose = page.locator('main .prose').first();
    await expect(prose).toBeVisible();
    expect(await prose.locator('p').count()).toBeGreaterThan(0);
  });

  // Blog posts currently emit duplicate meta descriptions (one inside <main>).
  // Fixed with the post template in #342; re-enable there.
  test.fixme('has exactly one meta description', async ({ page }) => {
    await openFirstPost(page);
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  });

  test('images in posts have alt text', async ({ page }) => {
    await openFirstPost(page);
    const images = page.locator('main .prose img');
    for (let i = 0; i < (await images.count()); i++) {
      expect(await images.nth(i).getAttribute('alt')).not.toBeNull();
    }
  });

  test('external links open safely', async ({ page }) => {
    await openFirstPost(page);
    const links = page.locator('main .prose a[target="_blank"]');
    for (let i = 0; i < Math.min(await links.count(), 5); i++) {
      await expect(links.nth(i)).toHaveAttribute('rel', /noopener/);
    }
  });

  test('blog link in nav returns to the index', async ({ page }) => {
    await openFirstPost(page);
    await page.locator('nav a:has-text("Blog")').first().click();
    await expect(page).toHaveURL(/\/blog\/?$/);
  });
});
