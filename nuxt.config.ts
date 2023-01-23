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
    vueI18n: {
      legacy: false,
      locale: "uz",
      messages: {
        uz: {
          welcome: "Xush kelibsiz!",
        },
        jp: {
          welcome: "いらっしゃいませ！",
        },
      },
    },
  },
});
