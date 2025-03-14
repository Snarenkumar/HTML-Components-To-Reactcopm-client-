import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Manually load .env variables

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/html-to-reactcomp/",
});
