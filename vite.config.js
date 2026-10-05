import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-router")) return "router";
          if (id.includes("node_modules/framer-motion")) return "motion";
          if (id.includes("node_modules/swiper")) return "swiper";
          if (id.includes("node_modules/react-hook-form")) return "forms";
          if (id.includes("node_modules/gsap")) return "gsap";
        },
      },
    },
  },
});
