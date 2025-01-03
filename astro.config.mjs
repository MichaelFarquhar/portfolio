import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://MichaelFarquhar.github.io',
  base: 'portfolio',
  integrations: [mdx(), tailwind(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), icon()]
});