/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     colors : {
      light : {
        primary : 'white',
        secondary : '#3E3D42',
        stroke : '#3E3D42',
      } ,

      dark : {
        primary : '#191820',
        secondary : '#CDCDCD',
        stroke : '#CDCDCD',
        text : '#7C7C7C'
      },

      button : {
        red : '#BD304F'
      }
     }
    },
  },
  plugins: [],
}

