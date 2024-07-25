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
        "gray":"#ccd6f6",
        "darkGray":"#8892b0",
        "grayish":"#F5F5FA",
        "night":"#121212",
        "semiNight":"#1A1A1A",
        "lighterGray":"#999999",
        "darkerGray":"#333333",
        "semiGray":"#E9EAEB",
        "blue":"#016FFF",
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
  darkMode:"class"
}

