import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  const plugins: PluginOption[] = [
    react(),

    // 💨 Compresión Gzip y Brotli para reducir el peso de los archivos
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024, // solo comprime archivos mayores a 1KB
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),

    // 📱 Progressive Web App (mejor SEO y carga rápida en móviles)
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "IMG/logo.webp"],
      manifest: {
        name: "Deportivo Aztlán",
        short_name: "Aztlán",
        description:
          "Instalaciones deportivas modernas con canchas, alberca y clases de danza.",
        theme_color: "#004aad",
        icons: [
          {
            src: "IMG/logo.webp",
            sizes: "192x192",
            type: "image/webp",
          },
        ],
      },
    }),
  ];

  return {
    plugins,
    publicDir: "./public",
    base: "/DeportivoAztlan/",
    build: {
      outDir: "dist",
      sourcemap: false,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 🔹 Divide librerías grandes en chunks separados
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    server: {
      port: 5173,
      open: true,
    },
  };
});
