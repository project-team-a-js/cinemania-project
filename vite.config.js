import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cinemania-project/',
  
  root: './',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  
  server: {
    port: 3000,
    open: true,
    host: true  
  },
  
  preview: {
    port: 4173,
    open: true
  }
})