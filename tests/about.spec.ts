import { test, expect } from '@playwright/test';

test.describe('Page About', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about'); // ou '/a-propos' selon ta route
  });

  test('la page se charge correctement', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /à propos de moi/i })).toBeVisible();
  });

  test('les accordéons sont fermés par défaut', async ({ page }) => {
    await expect(page.locator('text=Je suis développeuse fullstack, avec une préférence')).toHaveCount(0);
    await expect(page.locator('text=Aujourd’hui, je travaille en fullstack')).toHaveCount(0);
    await expect(page.locator('text=L’accessibilité est une valeur essentielle')).toHaveCount(0);
    await expect(page.locator('text=Comprendre les besoins réels des utilisateurs')).toHaveCount(0);
  });

  test('clic sur un titre ouvre la section correspondante', async ({ page }) => {
    const firstAccordion = page.getByRole('heading', { name: /❧ Mon parcours & sensibilité/i });
    await firstAccordion.click();
    await expect(page.locator('text=Je suis développeuse fullstack, avec une préférence')).toBeVisible();
  });

  test('recliquer sur le titre referme la section', async ({ page }) => {
    const firstAccordion = page.getByRole('heading', { name: /❧ Mon parcours & sensibilité/i });
    await firstAccordion.click();
    await firstAccordion.click(); // toggle
    await expect(page.locator('text=Je suis développeuse fullstack, avec une préférence')).toHaveCount(0);
  });
});
