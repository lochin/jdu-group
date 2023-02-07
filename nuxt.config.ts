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
          menu_jdu_group: "JDU GROUP",
          menu_jdu_university: "JDU UNIVERSITY",
          menu_jdu_academy: "JDU ACADEMY",
          menu_jdu_kids: "JDU KIDS",
          menu_jdu_systems: "JDU SYSTEMS",
          menu_jdu_consulting: "JDU CONSULTING",
          menu_contact_info: "BOG‘LANISH",


          more_button_text: "Batafsil...",
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

          jdu_consulting_title: "JDU Consulting",
          jdu_consulting_services_title: "Xizmat turlari:",
          jdu_consulting_service_one: "Market research",
          jdu_consulting_service_two: "Marketing",
          jdu_consulting_service_three: "Accounting",
          jdu_consulting_service_four: "Market entry support",
          jdu_consulting_chief_consultant_profile: "Chief Consultant Profile",
          jdu_consulting_chief_education_title: "Ta’lim",
          jdu_consulting_chief_education_one: "Toshkent Islom Universiteti / Xalqaro Iqtisodiy Munosabatlar",
          jdu_consulting_chief_education_two: "Yaponiya Xalqaro Universiteti / Xalqaro Munosabatlar",
          jdu_consulting_chief_education_three: "Oksford Universiteti / Biznes boshqaruv / MBA",
          jdu_consulting_chief_work_title: "Mehnat faoliyati",
          jdu_consulting_chief_work_one: "Otsuka Pharmaceutical / Xalqaro biznesni rivojlantirish",
          jdu_consulting_chief_work_two: "Nissan Motors / Xalqaro marketing",
          jdu_consulting_chief_work_three: "Digital Knowledge Co.,Ltd / Xalqaro bo`lim",
          jdu_consulting_chief_work_four: "Japan Digital University / CEO",
          
          management_title: "Boshqaruv",
          management_head_one_name: "Hiroaki Haga",
          management_head_one_occupation: 'Muassis korxona "Digital Knowledge" rahbari',
          management_head_two_name: "Mamajonov Ravshanbek",
          management_head_two_occupation: 'JDU GROUP RAHBARI',

          
          contact_title: "Biz bilan bog'lanish",
          contact_address: "Manzil",
          contact_full_address: "Toshkent shahar, Chilonzor tumani, Kichik Halqa Yo'li ko'chasi, 50.",
          contact_phone: "Telefon",
          contact_email: "Elektron pochta",

          footer_title: "Biz bilan aloqa",
          footer_description: "Bizni ushbu ijtimoiy tarmoqlardan topishingiz mumkin.",
          footer_more_info: "Ko'proq ma'lumot",
          footer_branches: "Tarmoqlarimiz"
        },
        jp: {
          menu_jdu_group: "JDUグループ",
          menu_jdu_university: "JDU大学",
          menu_jdu_academy: "JDUアカデミー",
          menu_jdu_kids: "JDUキッズ",
          menu_jdu_systems: "JDUシステムズ",
          menu_jdu_consulting: "JDUコンサルティング",
          menu_contact_info: "連絡先",

          more_button_text: "もっと...",
          motto: "より良い明日へ",
          main_description: "JDUは日本のデジタルナレッジ株式会社の出資によりウズベキスタンに設立されました。ウズベキスタンと日本の架け橋として、関わる全ての人のより良い明日を目指しています。",
          education_card_title: "教育",
          education_card_description: "日本の教育の特徴を生かし、ウズベキスタンの教育分野の発展に寄与することを目的とした事業です。 現在、JDU大学、JDUアカデミー、JDUキッズのサービスを提供しています。",
          business_card_title: "ビジネス",
          business_card_description: "日本企業とウズベキスタンが有益な関係を構築できるよう支援することを目的としたプロジェクトです。 現在、JDU SystemsおよびJDU Consultingサービスを提供しています。",
          
          jdu_title: "JDU大学",
          jdu_aim: "目的：",
          jdu_aim_description: "日本の高等教育を提供し、グローバルに活躍できる人材を育成する。",
          jdu_advantage: "JDUで学ぶメリット:",
          jdu_advantage_one: "ウズベキスタンにいながら日本の大学の卒業資格を取得できる",
          jdu_advantage_two: "日本で仕事をするチャンスを得られる",
          jdu_advantage_three: "在学中に実務経験を積み、学費の返済に充てられる",
          jdu_advantage_four: "一度に3つの学位を取得できる",
          
          jdu_academy_title: "JDUアカデミー",
          jdu_academy_aim: "目的：",
          jdu_academy_aim_description: "JDUの志願者のための準備コースを開設しています。 他の大学の志願者も、私たちのアカデミーで興味のある科目を勉強することができます。",
          jdu_academy_subjects_title: "学べる科目",
          jdu_academy_subject_one: "数学",
          jdu_academy_subject_two: "日本語",
          
          jdu_kids_title: "JDUキッズ",
          jdu_kids_aim: "目的：",
          jdu_kids_aim_description: "日本の教育方法に基づき、ウズベキスタンの青少年育成に貢献すること。",
          jdu_kids_subjects_title: "教わる科目：",
          jdu_kids_subject_one: "タブレットを使用した暗算学習法",
          jdu_kids_subject_two: "キッズイングリッシュ",
          jdu_kids_subject_three: "数学（準備中）",
          jdu_kids_subject_four: "ロジカルシンキング（準備中）",
          
          jdu_systems_title: "JDUシステムズ",
          jdu_systems_aim: "目的：",
          jdu_systems_aim_description: "日系企業向けにITサービスを提供すること。",
          jdu_systems_services_title: "提供するサービスの種類",
          jdu_systems_service_one: "プログラミング",
          jdu_systems_service_two: "デザイン",
          jdu_systems_advantages_title: "JDUシステムズのメリット",
          jdu_systems_advantage_one: "日本語やITスキルを身につけた学生が多数在籍",
          jdu_systems_advantage_two: "ブリッジプロジェクトマネージャーとして日本人社員を配置",
          jdu_systems_advantage_three: "日本の働き方と仕事の質の高さ",
          
          jdu_consulting_title: "JDUコンサルティング",
          jdu_consulting_services_title: "サービスの種類:",
          jdu_consulting_service_one: "市場調査",
          jdu_consulting_service_two: "マーケティング",
          jdu_consulting_service_three: "会計",
          jdu_consulting_service_four: "市場参入支援",
          jdu_consulting_chief_consultant_profile: "チーフ・コンサルタント紹介",
          jdu_consulting_chief_education_title: "学歴",
          jdu_consulting_chief_education_one: "タシケント・イスラム・大学卒業（国際経済関係学）",
          jdu_consulting_chief_education_two: "大学院修士課程終了（新潟県）（国際関係学）",
          jdu_consulting_chief_education_three: "オクスフォード大学修士課程終了　（MBA）",
          jdu_consulting_chief_work_title: "経歴",
          jdu_consulting_chief_work_one: "大塚製薬グループ　国際本部ビジネスデベロップメント担当",
          jdu_consulting_chief_work_two: "日産自動車株式会社　グローバルマーケティング部　総括",
          jdu_consulting_chief_work_three: "デジタルナレッジ株式会社国際開発　部門長",
          jdu_consulting_chief_work_four: "ジャパン・デジタル・ユニバーシティ取締役",
          
          management_title: "役員役員",
          management_head_one_name: "Hiroaki Haga",
          management_head_one_occupation: '創業者は株式会社デジタル・ナレッジの社長',
          management_head_two_name: "Mamajonov Ravshanbek",
          management_head_two_occupation: 'JDU GROUP 社長',
          
          contact_title: "お問い合わせ",
          contact_address: "住所",
          contact_full_address: "Tashkent市、Chilonzor地域、Kichik Halqa Yo'li道、50。",
          contact_phone: "電話",
          contact_email: "メール",

          footer_title: "お問い合わせ",
          footer_description: "これらのソーシャルネットワークで私たちを見つけることができます。",
          footer_more_info: "詳しくは",
          footer_branches: "私たちのネットワーク"
        }
      },
    },
  },
});
