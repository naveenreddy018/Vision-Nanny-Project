import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Opens the browser automatically
  },
  build: {
    outDir: "dist",
  },
  base: "/", // Ensures correct asset paths
});
