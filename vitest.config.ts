// vitest.config.ts
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'v8', // or 'v8'
      all: true,
    },
  },
});
