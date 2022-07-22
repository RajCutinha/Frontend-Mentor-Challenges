// Vite Config
import { defineConfig } from "vite";
// prettier-ignore
export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist"
  },
  server: {
    port: 3000
  }
});
