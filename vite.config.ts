import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      injectRegister: 'auto',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      manifest: {
        name: "Cânticos Mocidade",
        short_name: "Cânticos",
        description: "App de letras dos cânticos da mocidade",
        theme_color: "#f8fafc",
        background_color: "#f8fafc",
        icons: [
          {
            src: "web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
