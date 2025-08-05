import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    // Geliştirme ortamında base URL '/',
    // Üretim ortamında GitHub Pages'in repo adı ('/cinemania-project/')
    base: isDev ? '/' : '/cinemania-project/',
    
    define: {
      [isDev ? 'global' : '_global']: {},
    },
    
    root: 'src',
    
    build: {
      sourcemap: true,
      
      rollupOptions: {
        input: {
          main: './src/index.html',
          catalog: './src/catalog.html',
          library: './src/library.html'
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      
      outDir: '../dist',
      emptyOutDir: true,
      
      // Vite'ın tüm statik dosyaların yolunu otomatik olarak 'base' ayarına göre düzeltmesini sağlar.
      assetsDir: 'assets',
    },
    
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      {
        name: 'postcss-sort-media-queries',
        config(config) {
          config.css = config.css || {};
          config.css.postcss = config.css.postcss || {};
          config.css.postcss.plugins = config.css.postcss.plugins || [];
          config.css.postcss.plugins.push(
            SortCss({
              sort: 'mobile-first',
            })
          );
        },
      },
      // JS dosyalarındaki path'leri düzeltmek için özel olarak yazdığınız plugin'i silebilirsiniz.
      // Çünkü 'base' ayarı bu işi sizin yerinize yapacaktır.
    ],
    
    server: {
      port: 3000,
      open: true,
    },
  };
});