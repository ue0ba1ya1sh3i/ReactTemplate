// Import library
import { defineConfig as settings } from "vite";

// Import plugins
import plugin_svgr from 'vite-plugin-svgr';
import plugin_react from "@vitejs/plugin-react-swc";
import { VitePWA as plugin_pwa } from "vite-plugin-pwa"

export default settings({
	build: {
		chunkSizeWarningLimit: 1000,
		minify: 'terser',
		sourcemap: true,

		rollupOptions: {
			// Chunk
			output: {
				assetFileNames: 'assets/[name].[hash].[ext]',
				chunkFileNames: 'assets/[name].[hash].js',
				entryFileNames: 'assets/[name].[hash].js',

				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor';
					}

					return undefined;
				}
			}
		}
	},

	server: {
		host: '0.0.0.0',
		port: 5173
	},

	plugins: [
		plugin_svgr(),
		plugin_react(),

		plugin_pwa({
			injectRegister: "auto",
			registerType: "autoUpdate",

			includeAssets: [
				"favicon/*",
				"index.html"
			],

			manifest: {
				// Profile
				name: "Template",
				short_name: "Template",
				description: "This is a my unique template",

				// Start URL
				start_url: "/",
				scope: "/",
				display: "standalone",
				orientation: "any",

				icons: [
					{
						"purpose": "any maskable",
						"sizes": "96x96",
						"src": "/favicon/x96.png",
						"type": "image/png"
					},

					{
						"purpose": "any maskable",
						"sizes": "192x192",
						"src": "/favicon/x192.png",
						"type": "image/png"
					},

					{
						"purpose": "any maskable",
						"sizes": "512x512",
						"src": "/favicon/x512.png",
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
					"*.map"
				],

				runtimeCaching: [
					{
						urlPattern: /^https:\/\/template-ue0ba1ya1sh3i\.web\.app\/.*/,
						handler: 'StaleWhileRevalidate',
						options: {
							cacheName: 'app-files',
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