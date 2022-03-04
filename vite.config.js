import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'path'

export default () => ({
  // set the input source path
  root: 'src',
  server: {
    strictPort: true,
    // Set host to true if you use a non-localhost php server, like laravel valet
    // host: true
  },
  build: {
    outDir: resolve(process.cwd(), 'public/dist'), // production output directory
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: resolve(process.cwd(), 'src/index.js'), // input source path for rollupjs
      output: {
        // remove hashes from file names
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  plugins: [
    // add live reload to the php pages
    liveReload([
      'content/**/*',
      'site/**/*.php'
    ], { root: process.cwd() })]
})
