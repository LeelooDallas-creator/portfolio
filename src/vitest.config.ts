// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 🧠 Important : active le DOM
    globals: true,         // permet d’utiliser `describe`, `it`, etc. sans import
    setupFiles: './vitest.setup.ts',
  },
});