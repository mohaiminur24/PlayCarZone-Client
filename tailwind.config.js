/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white : 'white',
      main: '#0e7490',
      mainyhover: '#155e75',
      secound: '#44403c',
      button : '#fb923c',
      buttonhover: '#f97316',
    },
    fontFamily:{
      header : ['Montserrat, sans-serif'],
      para : ['Inter, sans-serif']
    }
  },
  plugins: [require("daisyui")],
}