import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env["BRANCH_NAME"]
    ? `https://${process.env["BRANCH_NAME"]}.flyboat-dev.biishop.org`
    : "https://flyboat.biishop.org",
});
