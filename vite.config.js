import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  base: "/the-singles-portfolio/", // <-- base path para GitHub Pages
  plugins: [vue(), vuetify({ autoImport: true })],
});
