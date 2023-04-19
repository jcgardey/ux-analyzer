const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        yellow: '#FFE15D',
        orange: '#F49D1A',
        red: '#DC3535',
        grey: '#f5f5f5',
      },
    },
  },

  plugins: [],
};

