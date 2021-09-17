import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    manifest: true,
    outDir: "../dist",
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: './src/index.ts',
      // NOTE: We could turn off file hashes,
      //       if they start to cause git problems
      // output: {
      //   entryFileNames: `assets/[name].js`,
      //   chunkFileNames: `assets/[name].js`,
      //   assetFileNames: `assets/[name].[ext]`
      // }
    }
  }
})
