/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      yellow: '#FFE15D',
      orange: '#F49D1A',
      red: '#DC3535',
      grey: '#f5f5f5',
    },
  },
  fontFamily: {
    sans: ['Fira Sans', 'Arial', 'sans-serif'],
  },
  plugins: [],
};
