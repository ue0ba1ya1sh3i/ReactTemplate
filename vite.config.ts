// Import librarys
import svgr from 'vite-plugin-svgr';
import React from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
	build: {
		chunkSizeWarningLimit: 1000,
		minify: 'terser',
		sourcemap: true,

		rollupOptions: {
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

	// Server
	server: {
		host: '0.0.0.0',
		port: 5173
	},

	// Plugins
	plugins: [
		svgr(),
		React(),
		
		// PWA
		VitePWA({
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

				// Display
				display: "standalone",
				orientation: "natural",

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
				globPatterns: [
					"**/*.{js,css,html,ico,png,svg}"
				],

				globIgnores: [
					"sw.js",
					"workbox-*.js"
				]
			}
		})
	]
})