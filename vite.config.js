import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   proxy: {
      // This rule will match all API requests
      '/api': {
        target: 'http://4.154.230.175', // <-- Your API Server
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '/api') // Usually not needed if your endpoint starts with /api
      },
    },
  },
})

