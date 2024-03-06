import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Additional SCSS/Sass options
        // For example, you can set up global variables here
        // or configure other Sass options.
      },
    },
  }
})
