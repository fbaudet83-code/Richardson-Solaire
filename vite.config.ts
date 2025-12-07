import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // La racine est le dossier courant
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
