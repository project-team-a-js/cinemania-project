import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    // Dev için '/', Production için '/cinemania-project/'
    base: command === 'serve' ? '/' : '/cinemania-project/',
    
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
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
      // JS files path fix
      {
        name: 'fix-js-paths',
        generateBundle(options, bundle) {
          if (command === 'build') {
            Object.keys(bundle).forEach(fileName => {
              const file = bundle[fileName];
              
              // JS dosyalarını işle
              if (file.type === 'chunk' && file.code) {
                file.code = file.code.replace(
                  /(['"`])(\.\/[^'"`]*\.html)(['"`])/g,
                  `$1/cinemania-project/$2$3`
                );
              }
            });
          }
        }
      }
    ],
    server: {
      port: 3000,
      open: true,
    },
  };
});