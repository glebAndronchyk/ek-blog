/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'app-red': '#DD424C',
        'black': '#1D2939',
        'blue': {
          100: '#253661'
        },
        'gray': {
          100: '#C6C6C6',
          200: '#EAEAEA',
          300: '#8C8C8C',
          400: '#B0B0B0',
          500: '#667085'
        },
      },
      fontFamily: {
        code: ['Code7x5', 'sans-serif'],
        graphik: ['Graphik', "sans-serif"],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
