/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#A02279",
        grey:  "#F1F3F9",
        borderline: "#A3A3A3",
        inputbg: "rgba(247,247,247,0.1)",

      },
      fontFamily:{
        redrose: 'Red Rose'
      }
    },
    screens:{
      sm: "400px",
      md: "768px",
      lg: "1023px",
      xl: "1280px"
    }
  },
  plugins: [],
}
