import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

// Elimina la importación y cualquier uso de screenGraphPlugin

export default defineConfig(({ mode }): { plugins: PluginOption[]; publicDir: string; base: string; css: any } => {
  const plugins: PluginOption[] = [
    react()
    // Ya no agregues screenGraphPlugin aquí
  ];

  return {
    plugins,
    publicDir: "./public",
    base: "./",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  };
});