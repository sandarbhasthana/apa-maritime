// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  server: {
    // Fix WebSocket connection issues
    host: true,
    port: 4321
  },
  vite: {
    server: {
      // Ensure WebSocket works properly
      hmr: {
        clientPort: 4321
      }
    },
    ssr: {
      external: ["svgo"]
    },
    build: {
      cssMinify: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto"
  }
});
