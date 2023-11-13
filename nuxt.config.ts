// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  typescript: false,

  // extends: ['./layers/auth'],
  modules: ['nuxt-primevue', '@unocss/nuxt'],
  primevue: {
    options: { ripple: true },
    components: {
      exclude: ['Editor']
    }
  },
  css: ['@/assets/styles.scss'],
  app: {
    head: {
      title: 'FDN Dashboard',
      // link: [
      //   {
      //     id: 'theme-css',
      //     rel: 'stylesheet',
      //     type: 'text/css',
      //     href: '/themes/mdc-light-indigo/theme.css'
      //   }
      // ]
    }
  }
})
