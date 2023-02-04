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
          motto: "Yaxshiroq erta uchun",
          main_description: "JDU bu Yaponiyaning Digital Knowledge Co.Ltd kompaniyasi muassisligida tashkil etilgan O‘zbekistondagi tashkilotdir. O‘zbekiston hamda Yaponiya o‘rtasida ko‘prik vazifasini o‘tab, barcha aloqador tomonlarning bugunidan ertasi yaxshiroq bo‘lishiga hissa qo‘shishni maqsad qilib olgan.",

        },
        jp: {
          welcome: "Oskari",
          motto: "より良い明日へ",
          main_description: "JDUは、日本企業デジタルナレッジ株式会社によって設立されたウズベキスタンの組織である。 ウズベキスタンと日本の架け橋として、ご協力の各位のために、より良い明日になるのにサポートすることを目指している。",

        }
      },
    },
  },
});
