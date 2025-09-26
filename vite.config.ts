// Library
import { defineConfig, loadEnv } from "vite"

// Plugins
import react from "@vitejs/plugin-react-swc"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig(({ mode }) => {
  // Value
  const env = loadEnv(mode, process.cwd(), "")

  // Environments
  const VITE_TITLE = env.VITE_TITLE || "Template"
  const VITE_SHORT_TITLE = env.VITE_SHORT_TITLE || "Template"
  const VITE_DESCRIPTION = env.VITE_DESCRIPTION || "This is my unique template"

  return {
    build: {
      chunkSizeWarningLimit: 500,
      minify: "terser",
      sourcemap: false,

      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash].[ext]",
          chunkFileNames: "assets/[name].[hash].js",
          entryFileNames: "assets/[name].[hash].js",

          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return "librarys"
            } else {
              throw new Error("node_module not found")
            }
          }
        }
      }
    },

    esbuild: {
      target: "es2020"
    },

    server: {
      host: "0.0.0.0",
      port: 5173
    },

    plugins: [
      react(),

      {
        name: "settings_html",
        transformIndexHtml(html) {
          return html
            .replace(/<title>.*<\/title>/, `<title>${VITE_TITLE}</title>`)
            .replace(
              /<meta name="description" content=".*">/,
              `<meta name="description" content="${VITE_DESCRIPTION}">`
            )
        }
      },

      VitePWA({
        injectRegister: "auto",
        registerType: "autoUpdate",

        devOptions: {
          enabled: false
        },

        includeAssets: ["favicons/*", "index.html"],

        manifest: {
          name: VITE_TITLE,
          short_name: VITE_SHORT_TITLE,
          description: VITE_DESCRIPTION,
          start_url: "/",
          scope: "/",
          display: "standalone",
          orientation: "any",
          theme_color: "#E5E7EB",
          background_color: "#E5E7EB",

          icons: [
            {
              purpose: "any maskable",
              sizes: "96x96",
              src: "/favicons/96.png",
              type: "image/png"
            },

            {
              purpose: "any maskable",
              sizes: "192x192",
              src: "/favicons/192.png",
              type: "image/png"
            },

            {
              purpose: "any maskable",
              sizes: "512x512",
              src: "/favicons/512.png",
              type: "image/png"
            }
          ]
        },

        workbox: {
          cleanupOutdatedCaches: true,
          globPatterns: ["**/*"],
          globIgnores: ["sw.js", "workbox-*.js", "**/*.{map,mp4,zip,mp3,pdf}"],
        }
      })
    ]
  }
})
