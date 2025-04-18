import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://bmmedina.dev',
  integrations: [react(), sitemap(), robotsTxt()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/sonner')) return 'sonner'
            if (id.includes('node_modules/three')) return 'three'
          },
        },
      },
    },
    plugins: [tailwindcss()],
  },
})
