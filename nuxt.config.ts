// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: ["uz", "jp"],
    defaultLocale: "jp",
    vueI18n: {
      fallbackLocale: "jp",
      messages: {
        uz: {
          welcome: "Xush",
        },
        jp: {
          welcome: "Oskari",
        }
      },
    },
  },
});
