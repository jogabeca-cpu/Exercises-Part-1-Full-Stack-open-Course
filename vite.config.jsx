import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Esto le enseña a Vite cómo procesar tus archivos .jsx de React
export default defineConfig({
  plugins: [react()],
})