const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  plugins: [flowbiteReact],

  content: ['./index.html', './src/**/*.{ts,tsx}', ".flowbite-react/class-list.json"],

  theme: {
    extend: {},
  },
}