/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'app-red': '#D03450',
        'inactive-app-red': '#DE8193',
        black: '#1D2939',
        blue: {
          55: '#7B829D',
          100: '#253661',
          200: '#475467',
        },
        gray: {
          50: '#F2F4F7',
          100: '#C6C6C6',
          200: '#EAEAEA',
          300: '#8C8C8C',
          400: '#B0B0B0',
          500: '#667085',
        },
      },
      fontFamily: {
        code: ['Code7x5', 'sans-serif'],
        graphik: ['Graphik', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/line-clamp'),
  ],
};
