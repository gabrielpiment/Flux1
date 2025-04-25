import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Flux1/', // Nome do seu repositório
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}) 