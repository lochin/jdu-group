<template>
  <main>
    <div class="relative pt-16 pb-32 flex content-center items-center justify-center" style="min-height: 75vh">
      <div class="absolute top-0 w-full h-full bg-center bg-cover" style="background-image: url('/images/cover.jpg');">
        <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">
                Buyuk kelajak sari
              </h1>
              <p class="mt-4 text-lg text-gray-300">
                IT sohasidagi global va yuqori malakali kadrlar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <section class="pb-20 bg-gray-300 -mt-28">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">

          <div class="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <font-awesome-icon icon="fa-solid fa-school" class="w-6 h-6" />
                </div>
                <h6 class="text-xl font-semibold"><a href="#university">Ta'lim</a></h6>
                <p class="mt-2 mb-4 text-gray-600">
                  JDU yapon tili va IT muhandislik mahoratini mukammal o’rganib, Yaponiya universiteti va
                  O’zbekistonning davlat universiteti ilmiy darajasini qo’lga kiritish imkoniyatini beradi.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <font-awesome-icon icon="fa-solid fa-briefcase" class="w-6 h-6" />
                </div>
                <h6 class="text-xl font-semibold"><a href="#systems">Biznes</a></h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Yaponiyada IT muhandis sifatida yuqori daromadli ishda faoliyat yuritib, u
                  yerda erishilgan nou-xau hamda ushbu tajriba davomida orttirilgan ijtimoiy aloqalarni yo’lga qo’yish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- JDU section -->

    <section id="university" class="relative py-20">
      <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/cover.jpg" />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="hidden text-center md:inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full">
                <img alt="..." class="max-w-full rounded-full shadow-lg" src="/images/jdu_logo.png" />
              </div>
              <h3 class="text-3xl font-semibold">Japan Digital University</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">Maqsadi:</span> JDU yapon tili va IT muhandislik mahoratini mukammal o’rganib,
                Yaponiya universiteti va O’zbekistonning davlat universiteti ilmiy darajasini qo’lga kiritish
                imkoniyatini beradi.
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  JDUda o'qishning afzalliklari
                </span>
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        IT-muhandis bo'lib yetishish
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Ikki tomonlama diplomni qo'lga kirit</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Yaponiyada ishga joylashish imkoniyati</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Universitetda o'qib turib ishlash imkoniyati</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <a href="https://jdu.uz" type="button"
                class="cursor-pointer inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                Batafsil...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- JDU Academy section -->

    <section id="academy" class="relative py-20">
      <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="hidden text-center md:inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-pink-300">
                <img alt="..." class="max-w-full rounded-full shadow-lg" src="/images/jdu_academy.jpg" />
              </div>
              <h3 class="text-3xl font-semibold">JDU Academy</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">Maqsadi:</span> JDUda o'qishni maqsad qilgan abituriyentlar uchun tayyorlov
                kurslarini olib boradi. Shuningdek, respublikamizning boshqa universitetlarida o`qishni maqsad qilgan
                abituriyentlar ham bizning akademiyada o'zlarini qiziqtirgan fanlardan tahsil olishlari mumkin.
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  O'qitiladigan fanlar
                </span>
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Matematika
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Yapon tili</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                Batafsil...
              </button>
            </div>
          </div>
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-full shadow-lg" src="/images/academy-cover.jpg" />
          </div>
        </div>
      </div>
    </section>

    <!-- JDU Kids section -->

    <section id="kids" class="relative py-20">
      <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/jdu_kids.jpg" />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="hidden text-center md:inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-pink-300">
                <img alt="..." class="max-w-full rounded-full shadow-lg" src="/images/jdu_kids_logo.jpg" />
              </div>
              <h3 class="text-3xl font-semibold">JDU Kids</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">Maqsadi:</span> Yaponiya ta'lim standardlari asosida O'zbekiston yoshlari
                rivojiga hissa qo'shish
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  O'qitiladigan fanlar
                </span>
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Sun'iy intellektga asoslangan mental arifmetika
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Kids English</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Matematika (tayyorgarlik jarayonida)</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Mantiqiy fikrlash (tayyorgarlik jarayonida)</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                Batafsil...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- JDU Systems section -->

    <section id="systems" class="relative py-20">
      <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <font-awesome-icon icon="fa-solid fa-rocket" class="w-6 h-6" />
              </div>
              <h3 class="text-3xl font-semibold">JDU Systems</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">Maqsadi:</span>
                Yaponiya kompaniyalari uchun IT xizmatini taklif etish
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  Taklif etiladigan xizmat turlari
                </span>
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Dashturlash
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Dizayn</h4>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  Taklif etiladigan xizmat turlari
                </span>
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Yapon tili va IT bilimlariga ega talabalarning ko`pligi
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Yapon xodimlarining Bridge sifatida loyiha boshqaruvchisi bo`lib
                        biriktirilganligi</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Yaponcha ishlash usuli va ish sifati</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                Batafsil...
              </button>
            </div>
          </div>
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/young-company.jpg" />
          </div>
        </div>
      </div>
    </section>

    <!-- JDU Consulting section -->

    <section id="consulting" class="relative py-20">
      <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap justify-center">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/rektor.jpg" />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <font-awesome-icon icon="fa-solid fa-rocket" class="w-6 h-6" />
              </div>
              <h3 class="text-3xl font-semibold">JDU Consulting</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                Chief Consultant Profile
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Market research
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Marketing </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Accounting</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Market entry support</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                Batafsil...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-20 pb-48">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">Mana bizning qahramonlarimiz</h2>
            <p class="text-lg leading-relaxed m-4 text-gray-600">
              Shuningdek, o'qishni tamomlashdan oldin JDU vositachiligi yordamida Yaponiyaning nufuzli kompaniyalaridan
              biriga ishga kirish hal qilinadi va o'qish tamomlangach Yaponiyaga borib, IT muhandisi sifatida yuqori
              maoshli zamonaviy ish joylarida ishlash mumkin bo'ladi.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img alt="..." src="/images/ceo.jpg" class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px" />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Hiroaki Haga</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Muassis korxona <br>"Digital Knowledge" rahbari
                </p>
                <div class="mt-6">
                  <button class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </button>
                  <button class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button">
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img alt="..." src="/images/rector_icon.jpg" class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px" />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Mamajonov Ravshanbek</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  JDU Group rahbari
                </p>
                <div class="mt-6">
                  <button class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button">
                    <font-awesome-icon icon="fa-brands fa-google" />
                  </button>
                  <button class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button">
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="contact" class="pb-20 relative block bg-gray-900">
      <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-2 lg:pt-12 lg:pb-24">

      </div>
    </section>


    <section  class="relative block py-24 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div class="flex-auto p-5 lg:p-10">
                <h4 class="text-2xl font-semibold">Biz bilan ishlashni xohlaysizmi?</h4>
                <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                  Ushbu shaklni to'ldiring va biz sizga 24 soat ichida javob beramiz.
                </p>
                <div class="relative w-full mb-3 mt-8">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="full-name">
                    To'liq ism
                  </label>
                  <input type="text"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="To'liq ismingizni yozing" style="transition: all 0.15s ease 0s" />
                </div>
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">
                    Elektron pochta
                  </label>
                  <input type="email"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Elektron pochtangizni yozing" style="transition: all 0.15s ease 0s" />
                </div>
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="message">Xabar</label><textarea rows="4" cols="80"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Xabar yozing..."></textarea>
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button" style="transition: all 0.15s ease 0s">
                    Xabarni yuborish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faSchool);
library.add(faBriefcase);
library.add(faRocket);
library.add(faUserGroup);
library.add(faMedal);
library.add(faUserSecret);
library.add(faLightbulb);

library.add(faGoogle);
library.add(faFacebook);
library.add(faInstagram);
library.add(faTwitter);
library.add(faDribbble);
</script>
