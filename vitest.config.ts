import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

import config from './vitest.config.js';

// Re-export the JS Vitest configuration to avoid divergence between
// vitest.config.ts and vitest.config.js. The JS file is the single
// source of truth for Vitest configuration.
export default config;
