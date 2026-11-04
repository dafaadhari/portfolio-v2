import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel serves 404.html with a real 404 status for unknown paths.
// It is a copy of the app, so App.jsx can still render the NotFound page.
const notFoundPage = () => ({
  name: 'not-found-page',
  apply: 'build',
  writeBundle({ dir }) {
    copyFileSync(join(dir, 'index.html'), join(dir, '404.html'))
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    notFoundPage(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('i18next')) return 'vendor-i18n';
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
          }
        },
      },
    },
  },
})