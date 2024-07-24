// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA()
//   ],
//   build: {
//     chunkSizeWarningLimit: 1500,
//   },
//   // server: {
//     // proxy: {
//   //     '/api': {
//   //       target: process.env.VITE_EASEREADS_BASE_URL,
//   //       changeOrigin: true,
//   //     },
//   //   },
//   // },
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'EaseReads',
        short_name: 'EaseReads',
        description: 'Educational Site',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
