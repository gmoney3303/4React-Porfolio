import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    enviroment: "happy-dom",
    setupFiles: "./src/tests/setup.js",
  },
  assetsInclude: ["**/*.JPG", "**/*.jpeg", "**/*.png", "**/*.gif", "**/*.svg"],
});
