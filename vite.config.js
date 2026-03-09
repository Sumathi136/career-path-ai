import { defineConfig } from "vite"

export default defineConfig({
  server: {
    proxy: {
      "/app": {
        target: "https://prompt-ascend-career-path.base44.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app/, "")
      }
    }
  }
})