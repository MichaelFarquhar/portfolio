import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://portfolio.mikefarquhar.net/dist',
    integrations: [
        mdx(),
        tailwind(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
});
