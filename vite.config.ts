import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

export default defineConfig(({ mode }): { plugins: PluginOption[]; publicDir: string; base: string; css: any } => {
  const plugins: PluginOption[] = [
    react()
  ];

  return {
    plugins,
    publicDir: "./public",
    base: '/DeportivoAztlan/',
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  };
});
