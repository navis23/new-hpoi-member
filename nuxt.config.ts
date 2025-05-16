// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1',
        title: 'HPOI Member Area',
        htmlAttrs: {
          lang: 'id',
        },
        meta: [
        // <meta name="description" content="My amazing site">
            { name: 'description', content: 'Member area Himpunan Provider Outbound Indonesia' }
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
    '@vueuse/motion/nuxt',
    '@nuxtjs/supabase',
    '@pinia-plugin-persistedstate/nuxt',

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
  },
  supabase: {
    // Options
    // redirect : false
    redirectOptions: {
      login: '/secret/login',
      callback: '/confirm',
      exclude: ['/', '/anggota/*', '/secret/daftar', '/secret/login-admin', '/secret/reset-password', '/secret/update-password', '/secret/confirm', '/secret/confirm-password', '/secret/confirm-reset', '/get-card/*'],
    }
  },
  image: {
    domains: ['https://rxabauhlxtkghurnabvr.supabase.co']
  }

})
