/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'app-red': '#DD424C',
      'app-black': {
        100: '#353535',
        200: '#171717'
      },
      'gray': {
        100: '#C6C6C6',
        200: '#EAEAEA',
        300: '#8C8C8C',
        400: '#B0B0B0'
      },
    },
    extend: {},
  },
  plugins: [],
}
