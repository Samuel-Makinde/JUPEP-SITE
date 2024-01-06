import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: process.env.VITE_EASEREADS_BASE_URL,
  //       changeOrigin: true,
  //     },
  //   },
  // },
})
