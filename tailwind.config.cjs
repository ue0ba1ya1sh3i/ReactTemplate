// Declaration
/** @type {import("tailwindcss").Config} */

// Library
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  darkMode: "class",
  plugins: [flowbiteReact],

  content: [
    "./index.html", 
    "./src/**/*.{ts,tsx}", 
    ".flowbite-react/class-list.json"
  ],

  theme: {
    extend: {},
  },
}
