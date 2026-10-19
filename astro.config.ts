import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'
import robotsTxt from 'astro-robots-txt'
import { configSite } from './src/site.config'

export default defineConfig({
  site: configSite.url,
  integrations: [sitemap(), robotsTxt(), react()],
  fonts: [
    {
      name: 'Orbitron',
      cssVariable: '--font-orbitron',
      provider: fontProviders.fontsource(),
      weights: [600, 700],
      subsets: ['latin'],
      styles: ['normal'],
    },
    {
      name: 'Onest',
      cssVariable: '--font-onest',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600],
      subsets: ['latin'],
      styles: ['normal'],
    },
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/@react-three')) return 'three-fiber'
            if (id.includes('node_modules/three')) return 'three-core'
            return
          },
        },
      },
    },
    plugins: [tailwindcss()],
  },
})
