import { test, expect } from '@playwright/test';

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
    for (const id of ['receipts-poll', 'blog-rag', 'tiny-desk-api']) {
      await expect(caseStudyLink(page, id)).toHaveCount(0);
    }
  });
});
