/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
  './components/**/*.{html,js}',,
  "./src/**/*.{html,js}",
  "'*.{html,js}'"],
  theme: {
    fontFamily:{
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors:{
        productgreen :'#788570'
      }
    },
  },
  plugins: [],
}

