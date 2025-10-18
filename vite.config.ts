// Librarys
import { defineConfig, loadEnv } from "vite"
import path from "node:path"

// Plugins
import react from "@vitejs/plugin-react-swc"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig(({ mode }) => {
  // Set variable
  const env = loadEnv(mode, process.cwd(), "")
  const requiredVars = [
    "VITE_TITLE",
    "VITE_AUTHOR",
    "SHORT_TITLE",
    "DESCRIPTION",
    "THEME_COLOR",
    "BACKGROUND_COLOR"
  ]

  // Check missing
  const env_miss = requiredVars.filter((k) => !env[k])
  if (env_miss.length > 0) {
    throw new Error(`Missing environment variables:\n${env_miss.join("\n")}`)
  }

  // Set environment variable
  const {
    VITE_TITLE: title,
    SHORT_TITLE: short_title,
    DESCRIPTION: description,
    THEME_COLOR: theme_color,
    BACKGROUND_COLOR: background_color
  } = env

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
          html
            .replace(/<title>.*<\/title>/, `<title>${title}</title>`)

            .replace(
              /<meta name="description" content=".*">/,
              `<meta name="description" content="${description}">`
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

        includeAssets: ["favicons/*", "index.html"],

        manifest: {
          name: title,
          short_name: short_title,
          description: description,
          start_url: "/",
          scope: "/",
          display: "standalone",
          orientation: "any",
          theme_color: `#${theme_color}`,
          background_color: `#${background_color}`,

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

          globIgnores: ["sw.js", "workbox-*.js"]
        }
      })
    ]
  }
})
