export default defineNuxtConfig({
  compatibilityDate: '2026-11-06',

  devtools: {
    enabled: true
  },


  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})

