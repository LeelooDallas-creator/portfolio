import { test, expect } from '@playwright/test';

test.describe('Page Projets', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects'); // adapte selon ta route
  });

  test('le titre principal est affiché', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Mes projets');
  });

  test('toutes les cartes projets sont présentes avec titres et descriptions', async ({ page }) => {
    // Vérifie qu’il y a bien 6 cartes
    const cards = page.locator('.card');
    await expect(cards).toHaveCount(6);

    // Check titres et descriptions (quelques exemples)
    await expect(cards.nth(0).locator('h2')).toHaveText('Portfolio personnel');
    await expect(cards.nth(0).locator('p')).toContainText('Ce site même');

    await expect(cards.nth(1).locator('h2')).toHaveText('Application to do');
    await expect(cards.nth(1).locator('p')).toContainText('Ma première to do list');

    await expect(cards.nth(2).locator('h2')).toHaveText("L'aillomètre d'Antrain");
  });

  test('les liens actifs ont un lien cliquable et les désactivés affichent "Lien désactivé"', async ({ page }) => {
    const cards = page.locator('.card');

    // Carte avec lien actif
    const cardWithLink = cards.nth(1);
    const link = cardWithLink.locator('a');
    await expect(link).toBeVisible();
    await expect(link).toHaveText('Voir le projet →');
    await expect(link).toHaveAttribute('href', 'https://tinylist.netlify.app/');

    // Carte avec lien désactivé
    const cardDisabled = cards.nth(0);
    const disabledSpan = cardDisabled.locator('span');
    await expect(disabledSpan).toHaveText('Lien désactivé');
  });

  test('cliquer sur un lien actif ouvre la bonne URL dans un nouvel onglet', async ({ page, context }) => {
    const cards = page.locator('.card');
    const link = cards.nth(1).locator('a');

    // Surveille l’ouverture d’un nouvel onglet
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      link.click(),
    ]);

    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://tinylist.netlify.app/');
  });
});
