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

          jdu_kids_title: "JDU Kids",
          jdu_kids_aim: "Maqsadi:",
          jdu_kids_aim_description: "Yaponiya ta'lim standartlari asosida O‘zbekiston yoshlari rivojiga hissa qo‘shish.",
          jdu_kids_subjects_title: "O‘qitiladigan fanlar",
          jdu_kids_subject_one: "Sun'iy intellektga asoslangan mental arifmetika",
          jdu_kids_subject_two: "Kids English",
          jdu_kids_subject_three: "Matematika (tayyorgarlik jarayonida)",
          jdu_kids_subject_four: "Mantiqiy fikrlash (tayyorgarlik jarayonida)",
          
          jdu_systems_title: "JDU Systems",
          jdu_systems_aim: "Maqsadi:",
          jdu_systems_aim_description: "Yaponiya kompaniyalari uchun IT xizmatini taklif etish.",
          jdu_systems_services_title: "Taklif etiladigan xizmat turlari:",
          jdu_systems_service_one: "Dasturlash",
          jdu_systems_service_two: "Dizayn",
          jdu_systems_advantages_title: "JDU Systems afzalliklari",
          jdu_systems_advantage_one: "Yapon tili va IT bilimlariga ega talabalarning ko‘pligi",
          jdu_systems_advantage_two: "Yapon xodimlarining Bridge sifatida loyiha boshqaruvchisi bo‘lib biriktirilganligi",
          jdu_systems_advantage_three: "Yaponcha ishlash usuli va ish sifati",



        },
        jp: {
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
          
          jdu_kids_title: "JDUキッズ",
          jdu_kids_aim: "目的：",
          jdu_kids_aim_description: "日本の教育水準に基づき、ウズベキスタンの青少年育成に貢献すること",
          jdu_kids_subjects_title: "教わる科目：",
          jdu_kids_subject_one: "人工知能に基づく暗算",
          jdu_kids_subject_two: "キッズイングリッシュ",
          jdu_kids_subject_three: "数学（準備中）",
          jdu_kids_subject_four: "ロジカルシンキング（準備中）",
          
          jdu_systems_title: "JDUシステムズ",
          jdu_systems_aim: "目的：",
          jdu_systems_aim_description: "日系企業向けITサービスの提供",
          jdu_systems_services_title: "提供するサービスの種類",
          jdu_systems_service_one: "プログラミング",
          jdu_systems_service_two: "デザイン",
          jdu_systems_advantages_title: "JDUシステムのメリット",
          jdu_systems_advantage_one: "日本語やITスキルを身につけた学生が多数在籍",
          jdu_systems_advantage_two: "ブリッジプロジェクトマネージャーとして日本人社員を配置",
          jdu_systems_advantage_three: "日本の働き方と仕事の質",


        }
      },
    },
  },
});
