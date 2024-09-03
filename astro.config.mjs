import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { resolve } from 'path';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  vite: {
    resolve: {
      alias: {
        '@cv': resolve('./cv.json')
      }
    }
  }
});