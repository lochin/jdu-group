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
          education_card_title: "Ta'lim",
          education_card_description: "Yaponiya ta'lim standartlari asosida O‘zbekiston ta’lim sohasi rivoji uchun hissa qo‘shishni maqsad qilgan loyihalarni o‘z ichiga oladi.Hozirda JDU Universiteti, JDU Academy hamda JDU Kids xizmatlari yo‘lga qo‘yilgan.",
          business_card_title: "Biznes",
          business_card_description: "Yaponiya kompaniyalariga O‘zbekiston bilan o‘zaro  manfaatli hamkorlikka kirishishga yordam berishni ko‘zda tutuvchi loyihalar. Hozirda JDU Systems va JDU Consulting xizmatlari yo‘lga qo‘yilgan.",
          jdu_title: "Yaponiya Raqamli Universiteti",
          jdu_aim: "Maqsadi:",
          jdu_aim_description: "Yaponiya oliy ta’lim standartlari asosida global miqyosda faoliyat olib boradigan malakali kadrlar tayyorlash.",
          jdu_advantage: "JDUda o‘qishning afzalliklari:",
          jdu_advantage_one: "O‘zbekistonda turgan holda Yaponiya universiteti diplomini qo‘lga kiritish",
          jdu_advantage_two: "Yaponiyada ishga joylashish imkoniyati",
          jdu_advantage_three: "O‘qish davomida ishlab tajriba va daromad olish",
          jdu_advantage_four: "Birdaniga uchta diplomni qo‘lga kiritish",
          jdu_academy_title: "JDU Academy",
          jdu_academy_aim: "Maqsadi:",
          jdu_academy_aim_description: "JDUda o‘qishni maqsad qilgan abituriyentlar uchun tayyorlov kurslarini olib boradi. Shuningdek, respublikamizning boshqa universitetlarida o‘qishni maqsad qilgan abituriyentlar ham bizning akademiyada o‘zlarini qiziqtirgan fanlardan tahsil olishlari mumkin.",
          jdu_academy_subjects_title: "O‘qitiladigan fanlar:",
          jdu_academy_subject_one: "Matematika",
          jdu_academy_subject_two: "Yapon tili",

        },
        jp: {
          welcome: "Oskari",
          motto: "より良い明日へ",
          main_description: "JDUは、日本企業デジタルナレッジ株式会社によって設立されたウズベキスタンの組織である。 ウズベキスタンと日本の架け橋として、ご協力の各位のために、より良い明日になるのにサポートすることを目指している。",
          education_card_title: "教育",
          education_card_description: "日本の教育水準に基づき、ウズベキスタンの教育分野の発展に寄与することを目的とした事業。 現在、JDUユニバーシティ、JDUアカデミー、JDUキッズのサービスを開始しています。",
          business_card_title: "ビジネス",
          business_card_description: "日本企業がウズベキスタンと相互に有益な協力を行うことを支援することを目的としたプロジェクト。 現在、JDU SystemsおよびJDU Consultingサービスが開始されています。",
          jdu_title: "JDU大学",
          jdu_aim: "目的：",
          jdu_aim_description: "日本の高等教育水準に基づき、グローバルに活躍できる人材を育成する。",
          jdu_advantage: "JDUで学ぶメリット:",
          jdu_advantage_one: "ウズベキスタン滞在中に日本の大学卒業証書を取得",
          jdu_advantage_two: "日本での仕事の機会",
          jdu_advantage_three: "在学中の実務経験と収入",
          jdu_advantage_four: "度に3つのディプロマを取得",
          jdu_academy_title: "JDUアカデミー",
          jdu_academy_aim: "目的：",
          jdu_academy_aim_description: "JDUで勉強しようとする志願者のための準備コースを実施します。 私たちの共和国の他の大学で勉強しようとする志願者は、私たちのアカデミーで興味のある科目を勉強することもできます。",
          jdu_academy_subjects_title: "教えられた科目",
          jdu_academy_subject_one: "数学",
          jdu_academy_subject_two: "日本語",

        }
      },
    },
  },
});
