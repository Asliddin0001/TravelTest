/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#FF715B",
      textInfo: "#A79997",
      darkWhite: "#F8F8F8",
      textColor: '#2c2c2c'
    },
    fontFamily: {
      notoSerif: "Noto Serif, serif",
    },
    container: {
      padding: {
        DEFAULT: '1.8vw',
        lg: '30px'
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1280px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
