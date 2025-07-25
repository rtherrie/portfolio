import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  cc: {
    modules: {
      localsConvention: "camelCase", // allows CSS modules styles
    },
  },
});
