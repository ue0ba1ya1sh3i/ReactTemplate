/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  plugins: [require("flowbite/plugin")],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {
    }
  }
}