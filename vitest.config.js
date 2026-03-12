import { defineConfig } from 'vitest/config'
import { getViteConfig } from 'astro/config'

export default defineConfig(
  getViteConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'test/',
          'tests/',
          'e2e/',
          '*.config.js',
          '*.config.mjs',
          '*.config.ts',
          '.astro/',
          'dist/',
          'coverage/',
        ],
      },
      setupFiles: ['./tests/setup.js'],
      // Include test files for Astro components
      include: [
        'tests/**/*.{test,spec}.{js,mjs,ts,tsx}',
        'src/**/*.{test,spec}.{js,mjs,ts,tsx}',
      ],
    },
  })
)
