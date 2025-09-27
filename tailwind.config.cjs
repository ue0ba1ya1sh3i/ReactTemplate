/** @type {import("tailwindcss").Config} */

const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

const settings = {
  darkMode: "class",
  plugins: [flowbiteReact],

  content: [
    "./index.html", 
    "./src/**/*.{ts,tsx}", 
    ".flowbite-react/class-list.json"
  ],

  theme: {
    extend: {
      "colors": {
        "main": {
          "50": "var(--color_50)",
          "100": "var(--color_100)",
          "200": "var(--color_200)",
          "300": "var(--color_300)",
          "400": "var(--color_400)",
          "500": "var(--color_500)",
          "600": "var(--color_600)",
          "700": "var(--color_700)",
          "800": "var(--color_800)",
          "900": "var(--color_900)",
          "950": "var(--color_950)"
        }
      }
    }
  }
}

module.exports = settings
