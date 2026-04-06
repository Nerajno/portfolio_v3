import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'Home',          path: '/' },
  { name: 'Blog',          path: '/blog' },
  { name: 'Portfolio',     path: '/portfolio' },
  { name: 'Speaking',      path: '/speaking' },
  { name: 'About',         path: '/about' },
  { name: 'Contact',       path: '/contact' },
  { name: 'Digital Garden',path: '/digital_garden' },
];

for (const { name, path } of pages) {
  test.describe(`Accessibility – ${name}`, () => {
    test('no critical or serious axe violations', async ({ page }, testInfo) => {
      await page.goto(path);

      const builder = new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']);

      // Exclude third-party Cal.com embed — its internal buttons are not ours to fix
      if (path === '/contact') {
        builder.exclude('[data-cal-namespace]');
      }

      const results = await builder.analyze();

      // Attach full report for debugging in the HTML reporter
      await testInfo.attach('axe-results', {
        body: JSON.stringify(results.violations, null, 2),
        contentType: 'application/json',
      });

      const criticalOrSerious = results.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(
        criticalOrSerious,
        `${criticalOrSerious.length} critical/serious violations on ${name}:\n` +
          criticalOrSerious.map((v) => `  [${v.impact}] ${v.id}: ${v.description}`).join('\n')
      ).toHaveLength(0);
    });

    test('skip link present and points to #main-content', async ({ page }) => {
      await page.goto(path);
      const skipLink = page.locator('a.skip-link');
      await expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('main landmark exists', async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main#main-content')).toBeVisible();
    });

    test('no horizontal scroll at 320px width', async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 568 });
      await page.goto(path);
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth, `Horizontal overflow on ${name} at 320px`).toBeLessThanOrEqual(320);
    });
  });
}

test.describe('Accessibility – Contact form inputs', () => {
  test('all inputs have visible labels', async ({ page }) => {
    await page.goto('/contact');
    const inputs = page.locator('input:not([type="hidden"]):not([type="checkbox"]), textarea');
    const count = await inputs.count();
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      if (id) {
        await expect(page.locator(`label[for="${id}"]`)).toBeVisible();
      }
    }
  });
});

test.describe('Accessibility – Navigation', () => {
  test('hamburger menu icon has aria-label on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    // astro-navbar renders a button wrapping MenuIcon
    const menuToggle = page.locator('[aria-label="Toggle navigation menu"]');
    await expect(menuToggle).toBeVisible();
  });
});
