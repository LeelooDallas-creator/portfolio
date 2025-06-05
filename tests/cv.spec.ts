import { test, expect } from '@playwright/test';

test('page CV contient le titre principal', async ({ page }) => {
  await page.goto('http://localhost:5173/cv'); // adapte l’url locale

  await expect(page.locator('h1')).toHaveText(/Lise BARBEY – Développeuse Fullstack/i);
});

test('page CV affiche la section expériences', async ({ page }) => {
  await page.goto('http://localhost:5173/cv');
  await expect(
    page.getByRole('heading', { name: 'Expériences professionnelles' })
  ).toBeVisible();
});

