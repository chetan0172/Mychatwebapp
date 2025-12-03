import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Needed for Netlify if your app uses client-side routing (React Router)
  build: {
    outDir: 'dist',
  },
})
