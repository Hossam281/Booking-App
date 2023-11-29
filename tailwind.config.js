/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans:  ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

