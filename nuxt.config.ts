export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@sidebase/nuxt-auth', 'nuxt-icon'],
  auth: {
    // baseURL: process.env.AUTH_ORIGIN,
    provider: {
        type: 'authjs'
    }
  },
  // modules: ["@sidebase/nuxt-auth"],
  // auth: {
  //   baseURL: process.env.AUTH_ORIGIN,
  //   enableGlobalAppMiddleware: true, // サイト全体で認証を必要にする
  // },
})
