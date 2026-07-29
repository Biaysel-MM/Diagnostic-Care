import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Diagnostic-Care/',
  build: { outDir: 'docs' },
  plugins: [vue(), tailwindcss()],
})
