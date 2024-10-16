import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter(), vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  resolve: {
    alias: {
      'real-ui-dev/': `${path.resolve(__dirname)}/../packages/ui/src/`,
      'real-ui-dev': `${path.resolve(__dirname)}/../packages/ui/src/index.ts`,
    }
  }
})
