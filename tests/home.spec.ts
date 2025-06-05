import { test, expect } from '@playwright/test';

test.describe('Page d’accueil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('la page se charge correctement', async ({ page }) => {
    await expect(page.getByRole('link', { name: /À propos de moi/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Mes projets/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Mon Parcours/ })).toBeVisible();
  });

  test('les liens de carte redirigent vers la bonne page', async ({ page }) => {
    await page.getByRole('link', { name: /À propos de moi/ }).click();
    await expect(page).toHaveURL(/.*\/about/);
    await page.goBack();

    await page.getByRole('link', { name: /Mes projets/ }).click();
    await expect(page).toHaveURL(/.*\/projects/);
    await page.goBack();

    await page.getByRole('link', { name: /Mon Parcours/ }).click();
    await expect(page).toHaveURL(/.*\/cv/);
  });
});
