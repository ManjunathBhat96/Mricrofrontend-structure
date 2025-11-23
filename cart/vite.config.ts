import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'Cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/Cart.jsx'
      },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  server: { port: 5003 }
})
