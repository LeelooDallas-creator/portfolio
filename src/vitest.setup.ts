// vitest.setup.ts
import { vi } from 'vitest';

// Mock global des fichiers image et assets importés
vi.mock('*.png', () => ({
  default: 'mocked-image.png',
}));
vi.mock('*.jpg', () => ({
  default: 'mocked-image.jpg',
}));
vi.mock('*.svg', () => ({
  default: 'mocked-image.svg',
}));
