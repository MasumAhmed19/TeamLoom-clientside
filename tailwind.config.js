const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      color:{
        c1: '#8C52FF',
        c2: '#8F03FF'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
  ],
}