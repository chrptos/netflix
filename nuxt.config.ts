export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      githubClientId: process.env.NUXT_PRIVATE_GITHUB_CLIENT_ID,
      githubClientSecret: process.env.NUXT_PRIVATE_GITHUB_CLIENT_SECRET,
      googleClientId: process.env.NUXT_PRIVATE_GOOGLE_CLIENT_ID,
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
