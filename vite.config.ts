// Library
import { defineConfig } from "vite";

// Plugins
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	build: {
		chunkSizeWarningLimit: 1000,
		minify: "terser",
		sourcemap: false,

		rollupOptions: {
			output: {
				assetFileNames: "assets/[name].[hash].[ext]",
				chunkFileNames: "assets/[name].[hash].js",
				entryFileNames: "assets/[name].[hash].js",

				manualChunks(id) {
					if (id.includes("node_modules")) {
						return "vendor";
					}

					return undefined;
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
				name: "Template",
				short_name: "Template",
				description: "This is a my unique template",
				start_url: "/",
				scope: "/",
				display: "standalone",
				orientation: "any",
				theme_color: "#E5E7EB",
				background_color: "#E5E7EB",

				icons: [
					{
						"purpose": "any maskable",
						"sizes": "96x96",
						"src": "/favicons/96.png",
						"type": "image/png"
					},

					{
						"purpose": "any maskable",
						"sizes": "192x192",
						"src": "/favicons/192.png",
						"type": "image/png"
					},

					{
						"purpose": "any maskable",
						"sizes": "512x512",
						"src": "/favicons/512.png",
						"type": "image/png"
					}
				]
			},

			workbox: {
				cleanupOutdatedCaches: true,
				globPatterns: ["**/*"],

				globIgnores: [
					"sw.js",
					"workbox-*.js",
					"**/*.{map,mp4,zip,mp3,pdf}"
				],

				runtimeCaching: [
					{
						urlPattern: /^https:\/\/template-ue0ba1ya1sh3i\.web\.app\/.*/,
						handler: "StaleWhileRevalidate",

						options: {
							cacheName: "local",

							expiration: {
								maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
								maxEntries: 1000
							}
						}
					}
				]
			}
		})
	]
})
