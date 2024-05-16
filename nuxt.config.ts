export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      githubId: process.env.NUXT_PRIVATE_GITHUB_ID,
      googleClientId: process.env.NUXT_PRIVATE_GOOGLE_CLIENT_ID,
      githubSecret: process.env.NUXT_PRIVATE_GITHUB_SECRET,
      googleClientSecret: process.env.NUXT_PRIVATE_GOOGLE_CLIENT_SECRET,
    }
  },
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
})
