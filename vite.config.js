import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      // Khi gặp đường dẫn bắt đầu bằng /api, nó sẽ chuyển sang backend
      '/api': {
        target: 'http://localhost:1337', // Đổi port này thành port backend của bạn
        changeOrigin: true,
        secure: false,
      },
    },
  },

})
