// Librarys
import { defineConfig, loadEnv } from "vite"
import path from "node:path"

// Plugins
import react from "@vitejs/plugin-react-swc"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  // Environments
  const title = env.VITE_TITLE || "Template"
  const short_title = env.VITE_SHORT_TITLE || "Template"
  const description = env.VITE_DESCRIPTION || "This is my unique template"
  const google_serch_id = env.VITE_GOOGLE_SERCH_ID || "e8NVKf0_iFGhrZwPdG0593cOyZ4UexL5m9N-ILjvCOY"

  return {
    resolve: { 
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },

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
        name: "html",

        transformIndexHtml(html) {
          html.replace(
            /<title>.*<\/title>/, 
            `<title>${title}</title>`
          )
          
          .replace(
            /<meta name="description" content=".*">/,
            `<meta name="description" content="${description}">`
          )

          .replace(
            /<meta name="google-site-verification" content=".*">/,
            `<meta name="google-site-verification" content="${google_serch_id}">`
          )

          return html
        }
      },

      VitePWA({
        injectRegister: "auto",
        registerType: "autoUpdate",

        devOptions: {
          enabled: false
        },

        includeAssets: [
          "favicons/*", 
          "index.html"
        ],

        manifest: {
          name: title,
          short_name: short_title,
          description: description,
          start_url: "/",
          scope: "/",
          display: "standalone",
          orientation: "any",
          theme_color: "#E5E7EB",
          background_color: "#E5E7EB",

          icons: [
            {
              purpose: "any",
              sizes: "96x96",
              src: "/favicons/any_96.png",
              type: "image/png"
            },

            {
              purpose: "any",
              sizes: "192x192",
              src: "/favicons/any_192.png",
              type: "image/png"
            },

            {
              purpose: "any",
              sizes: "512x512",
              src: "/favicons/any_512.png",
              type: "image/png"
            }
          ]
        },

        workbox: {
          cleanupOutdatedCaches: true,
          globPatterns: ["**/*"],

          globIgnores: [
            "sw.js", 
            "workbox-*.js"
          ],
        }
      })
    ]
  }
})
