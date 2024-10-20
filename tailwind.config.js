/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
       'bee': 'linear-gradient(to right, #F1C820, #FFD50D, #F1C820)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}