// Library
import { defineConfig as settings } from "vite";

// Plugins
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa"

const plugin = {
  react: react,
  pwa: VitePWA,
};

export default settings({
	build: {
		chunkSizeWarningLimit: 1000,
		minify: "terser",
		sourcemap: true,

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

	server: {
		host: "0.0.0.0",
		port: 5173
	},

	plugins: [
		plugin.react(),

		plugin.pwa({
			injectRegister: "auto",
			registerType: "autoUpdate",

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
				theme_color: "#4F46E5",
				background_color: "#f9fafb",

				icons: [
					{
						"purpose": "any maskable",
						"sizes": "96x96",
						"src": "/favicons/x96.png",
						"type": "image/png"
					},

					{
						"purpose": "any maskable",
						"sizes": "192x192",
						"src": "/favicons/x192.png",
						"type": "image/png"
					},

					{
						"purpose": "any maskable",
						"sizes": "512x512",
						"src": "/favicons/x512.png",
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
