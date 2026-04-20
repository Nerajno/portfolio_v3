import { test, expect } from '@playwright/test';

async function getJsonLdSchemas(page: import('@playwright/test').Page) {
  return page.$$eval(
    'script[type="application/ld+json"]',
    (els) => els.map((el) => JSON.parse(el.textContent ?? '{}'))
  );
}

test.describe('AEO JSON-LD schema smoke tests', () => {
  test('homepage has Person entity', async ({ page }) => {
    await page.goto('/');
    const schemas = await getJsonLdSchemas(page);
    const person = schemas.find(
      (s) => s['@type']?.includes?.('Person') || s['@type'] === 'Person'
    );
    expect(person).toBeDefined();
    expect(person.name).toBe('Nerando Johnson');
  });

  test('blog post has TechArticle + SpeakableSpecification', async ({ page }) => {
    await page.goto('/blog');
    const firstLink = page.locator('a[href*="/blog/"]:not(nav a)').first();
    await firstLink.waitFor({ state: 'visible' });
    await firstLink.click();
    await page.waitForLoadState('networkidle');

    const schemas = await getJsonLdSchemas(page);
    const article = schemas.find((s) => s['@type'] === 'TechArticle');
    expect(article).toBeDefined();
    expect(article.headline).toBeTruthy();
    expect(article.dateModified).toBeTruthy();

    const speakable = schemas.find(
      (s) => s.speakable?.['@type'] === 'SpeakableSpecification'
    );
    expect(speakable).toBeDefined();
  });

  test('portfolio page has CollectionPage with ItemList', async ({ page }) => {
    await page.goto('/portfolio');
    const schemas = await getJsonLdSchemas(page);
    const collection = schemas.find((s) => s['@type'] === 'CollectionPage');
    expect(collection).toBeDefined();
    expect(collection.mainEntity?.['@type']).toBe('ItemList');
    expect(collection.mainEntity?.itemListElement?.length).toBeGreaterThan(0);
  });

  test('Person entity is identical across page types', async ({ page }) => {
    const routes = ['/', '/blog', '/portfolio'];
    const entities: string[] = [];

    for (const route of routes) {
      await page.goto(route);
      const schemas = await getJsonLdSchemas(page);
      const person = schemas.find(
        (s) => s['@type']?.includes?.('Person') || s['@type'] === 'Person'
      );
      expect(person, `No Person entity on ${route}`).toBeDefined();
      entities.push(JSON.stringify(person));
    }

    expect(entities[0]).toBe(entities[1]);
    expect(entities[0]).toBe(entities[2]);
  });
});
