/** @type {import('tailwindcss').Config} */
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    './tailwind-theme.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald : ['Oswald'],
        opensans : ['Open Sans'],
      },
      colors: {
        'gsi-darkblue' : '#365b6d',
        'gsi-gold' : '#fcba56',
        'gsi-brightblue' : '#41c1ba',
        'gsi-smokewhite' : '#f2f1ec',
        'hpoi-main' : '#ff9933'
      }
    },
  },
  plugins: [
    FormKitVariants,
    require('@headlessui/tailwindcss'),
    // Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' })

  ],
}

