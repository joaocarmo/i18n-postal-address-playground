import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

const libVersion = pkg.dependencies['i18n-postal-address']

export default defineConfig({
  plugins: [react()],
  base: '/i18n-postal-address-playground/',
  define: {
    __LIB_VERSION__: JSON.stringify(libVersion),
    __AUTHOR_NAME__: JSON.stringify(pkg.author.name),
    __AUTHOR_URL__: JSON.stringify(pkg.author.url),
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
})
