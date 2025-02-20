const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Correct dark mode setup
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: { // Fix the key name
        c1: "#8C52FF",
        c2: "#8F03FF",
        c3: "#7201FF",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("daisyui"),
    require("preline/plugin"),
  ],
  
};
