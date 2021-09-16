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
      input: './src/index.ts'
    }
  }
})
