import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // simule le DOM pour React
    globals: true,        // pour utiliser describe/it sans import
    setupFiles: './src/setupTests.ts', // config globale (optionnel)
     exclude: [
      'node_modules',
      '**/*.spec.ts', // optionnel si tu veux exclure tous les .spec.ts
      '**/playwright/**',
      '**/e2e/**',
      '**/dist/**',
    ],
  },
});
