// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1',
        title: 'Griya Sambirejo Indah',
        meta: [
        // <meta name="description" content="My amazing site">
            { name: 'description', content: 'Perumahan Griya Sambirejo Indah di Jombang' }
        ],
    },
  },
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-headlessui',
    '@formkit/nuxt',
    '@vueuse/motion/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      'storeToRefs',
    ],
  },
  headlessui: {
    prefix: 'Headless'
  }

})
