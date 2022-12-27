import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env["BRANCH_NAME"] !== undefined ? `https://${process.env["BRANCH_NAME"]}.flyboat-dev.biishop.org` : "https://flyboat.biishop.org",
})
