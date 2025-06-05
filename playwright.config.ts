import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // dossier où mettre tes tests e2e
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    baseURL: 'http://localhost:5173',
  },

  webServer: {
    command: 'npm run dev',      // commande pour lancer ton serveur Vite
    url: 'http://localhost:5173', // URL où ton app est accessible
    timeout: 120 * 1000,         // temps max pour attendre que le serveur soit prêt
    reuseExistingServer: !process.env.CI, // réutilise un serveur existant si possible (utile en dev)
  },
});
