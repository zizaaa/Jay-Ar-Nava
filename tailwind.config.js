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
      colors:{
        "neon":"#64ffda",
        "darkBlue":"#0a192f",
        "blue":"#016FFF",
        "gray":"#999999",
        "fadeBlue":"#26354d80",
        "fadeGray":"#E9EAEB",
        // "gray":"#ccd6f6",
        // "darkGray":"#8892b0",
        // "grayish":"#F5F5FA",
        // "night":"#121212",
        // "semiNight":"#1A1A1A",
        // "lighterGray":"#999999",
        // "darkerGray":"#333333",
        // "semiGray":"#E9EAEB",
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
  darkMode:"class"
}

