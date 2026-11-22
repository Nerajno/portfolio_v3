import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGE = '/case-study/isnerandodoneyet';
const caseStudyLink = (page, id) =>
  page.locator(`[data-project="${id}"]`).getByRole('link', { name: /^Case study/ });

test.describe('IsNerandoDoneYet case study', () => {
  test('portfolio card links to the case study', async ({ page }) => {
    await page.goto('/portfolio');
    await expect(caseStudyLink(page, 'isnerandodoneyet')).toHaveAttribute('href', PAGE);
  });

  test('other featured cards keep a pending case study', async ({ page }) => {
    await page.goto('/portfolio');
    for (const id of ['portfolio-v3', 'dialects', 'finance-controls-lab', 'slide-warehouse', 'lanyard']) {
      await expect(caseStudyLink(page, id)).toHaveCount(0);
    }
  });

  test('page renders the six-part story', async ({ page }) => {
    const res = await page.goto(PAGE);
    expect(res.status()).toBe(200);
    await expect(page.locator('main h1')).toHaveText('IsNerandoDoneYet — a public finish line for my side projects');
    await expect(page.locator('main h2').filter({ hasText: /^0[1-6]/ })).toHaveCount(6);
    await expect(
      page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Artifacts' })
    ).toHaveAttribute('href', '/portfolio');
  });

  test('evidence links point to real places', async ({ page }) => {
    await page.goto(PAGE);
    const evidence = page.getByRole('complementary', { name: 'Evidence' });
    const posts = [
      '/blog/skills-to-bills-demonstrated-competency',
      '/blog/start-with-the-end-in-mind-developers-side-project-survival-guide',
    ];
    for (const href of ['https://isnerandodoneyet.com/', 'https://github.com/Nerajno/isnerandodoneyet-com', ...posts]) {
      await expect(evidence.locator(`a[href="${href}"]`)).toHaveCount(1);
    }
    for (const href of posts) {
      expect((await page.request.get(href)).status(), href).toBe(200);
    }
  });

  test('card click opens the page', async ({ page }) => {
    await page.goto('/portfolio');
    await caseStudyLink(page, 'isnerandodoneyet').click();
    await expect(page).toHaveURL(new RegExp(`${PAGE}/?$`));
    await expect(page.locator('main h1')).toContainText('IsNerandoDoneYet');
  });

  test('no horizontal overflow at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    expect((await page.goto(PAGE)).status()).toBe(200);
    // Layout sets overflow-x: hidden on html/body, so scrollWidth hides overflow; measure elements instead.
    // Content inside its own horizontal scroll box (e.g. a code block) is allowed; the box itself must fit.
    const overflowing = await page.evaluate(() =>
      [...document.querySelectorAll('main *')]
        .filter((el) => !el.parentElement?.closest('main [class*="overflow-x-auto"]'))
        .filter((el) => el.getBoundingClientRect().right > 320.5)
        .map((el) => `${el.tagName.toLowerCase()} right=${Math.round(el.getBoundingClientRect().right)}`)
    );
    expect(overflowing).toEqual([]);
  });

  test('no serious axe violations in dark theme', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
    expect((await page.goto(PAGE)).status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    const serious = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
    expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
  });

  const section = (page, n) => page.locator(`section[aria-labelledby="s-${n}"]`);

  test('problem names cost and constraints', async ({ page }) => {
    await page.goto(PAGE);
    await expect(section(page, '01')).toContainText('Cost:');
    await expect(section(page, '01')).toContainText('Constraints:');
  });

  test('approach explains the stack choice', async ({ page }) => {
    await page.goto(PAGE);
    await expect(section(page, '03')).toContainText('Why this stack:');
  });

  test('data model is shown', async ({ page }) => {
    await page.goto(PAGE);
    const fig = section(page, '03').locator('figure').filter({ has: page.locator('figcaption', { hasText: /^Data model/ }) });
    await expect(fig).toHaveCount(1);
    await expect(fig.locator('pre code')).toContainText('"status"');
  });

  test('outcome shows before and after per criterion', async ({ page }) => {
    await page.goto(PAGE);
    const rows = section(page, '05').locator('li');
    expect(await rows.count()).toBeGreaterThanOrEqual(3);
    for (const text of await rows.allTextContents()) expect(text).toContain('→');
  });

  test('every /decisions link lands on a real record', async ({ page }) => {
    await page.goto(PAGE);
    const hrefs = await page.locator('main a[href^="/decisions"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
    const html = await (await page.request.get('/decisions')).text();
    for (const href of hrefs) {
      const id = href.split('#')[1];
      expect(id, `${href} has no #anchor`).toBeTruthy();
      expect(html, `${href} has no matching record`).toContain(`id="${id}"`);
    }
  });

  test('related posts link back to the case study', async ({ page }) => {
    for (const post of [
      '/blog/skills-to-bills-demonstrated-competency',
      '/blog/start-with-the-end-in-mind-developers-side-project-survival-guide',
    ]) {
      expect((await page.goto(post)).status(), post).toBe(200);
      expect(await page.locator(`main a[href="${PAGE}"]`).count(), post).toBeGreaterThanOrEqual(1);
    }
  });

  test('shows a screenshot of the live product', async ({ page }) => {
    await page.goto(PAGE);
    const fig = page.locator('main header + figure');
    await expect(fig.locator('figcaption')).toHaveText(/^The live board/);
    const img = fig.locator('img');
    await expect(img).toHaveAttribute('alt', /\S/);
    await expect.poll(() => img.evaluate((el) => el.complete && el.naturalWidth)).toBeGreaterThan(0);
  });

  test('operations note covers observability and secrets', async ({ page }) => {
    await page.goto(PAGE);
    await expect(page.getByRole('complementary', { name: 'Running it' })).toContainText(/secrets/i);
  });
});
