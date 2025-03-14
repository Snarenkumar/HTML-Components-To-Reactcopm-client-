import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set a default value to prevent "undefined" error
const basePath = import.meta.env.VITE_BASE_PATH || "/html-components-to-react";

export default defineConfig({
  plugins: [react()],
  base: basePath,
});
