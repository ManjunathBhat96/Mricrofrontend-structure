import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './Products': './src/Products.jsx'
      },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  server: { port: 5002 }
})
