import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/DevMock/', // Set the base to your repository name
  plugins: [react()],
});
