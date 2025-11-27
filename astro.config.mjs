// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
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
