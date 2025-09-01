import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import robotsTxt from 'astro-robots-txt'
import { configSite } from './src/site.config'

export default defineConfig({
  site: configSite.url,
  integrations: [sitemap(), robotsTxt(), react()],
  vite: {
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/@react-three/fiber'))
              return 'three-fiber'
            if (id.includes('node_modules/three')) return 'three-core'
            if (id.includes('node_modules/sonner')) return 'sonner-core'
            return
          },
        },
      },
    },
    plugins: [tailwindcss()],
  },
})
