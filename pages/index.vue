<template>
  <main id="group">
    <div class="relative pt-16 pb-32 flex content-center items-center justify-center" style="min-height: 75vh">
      <div class="absolute top-0 w-full h-full bg-center bg-cover" style="background-image: url('/images/cover.jpg')">
        <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">
                {{ $t('motto') }}
              </h1>
              <p class="mt-4 text-lg text-gray-300">
                {{ $t('main_description') }}
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
                <h6 class="text-xl font-semibold"><a href="#university">{{ $t('education_card_title') }}</a></h6>
                <p class="mt-2 mb-4 text-gray-600">
                  {{ $t('education_card_description') }}
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
                <h6 class="text-xl font-semibold"><a href="#systems">{{ $t('business_card_title') }}</a></h6>
                <p class="mt-2 mb-4 text-gray-600">
                  {{ $t('business_card_description') }}
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
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/university.jpg" />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="hidden text-center md:inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full">
                <img alt="..." class="max-w-full rounded-full shadow-lg" src="/images/jdu_logo.png" />
              </div>
              <h3 class="text-3xl font-semibold">{{ $t('jdu_title') }}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">{{ $t('jdu_aim') }}</span>
                {{ $t('jdu_aim_description') }}
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  {{ $t('jdu_advantage') }}
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
                        {{ $t('jdu_advantage_one') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_advantage_two') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_advantage_three') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_advantage_four') }}
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <a href="https://jdu.uz" type="button" target="_blank"
                class="cursor-pointer inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                {{ $t('more_button_text') }}
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
              <h3 class="text-3xl font-semibold">{{ $t('jdu_academy_title') }}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">{{ $t('jdu_academy_aim') }}</span>
                {{ $t('jdu_academy_aim_description') }}
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  {{ $t('jdu_academy_subjects_title') }}
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
                        {{ $t('jdu_academy_subject_one') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_academy_subject_two') }}
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <!-- <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                {{ $t('more_button_text') }}
              </button> -->
            </div>
          </div>
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/academy.jpg" />
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
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/kids.jpg" />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="hidden text-center md:inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-pink-300">
                <img alt="..." class="max-w-full rounded-full shadow-lg" src="/images/jdu_kids_logo.jpg" />
              </div>
              <h3 class="text-3xl font-semibold">{{ $t('jdu_kids_title') }}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">{{ $t('jdu_kids_aim') }}</span>
                {{ $t('jdu_kids_aim_description') }}
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  {{ $t('jdu_kids_subjects_title') }}
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
                        {{ $t('jdu_kids_subject_one') }}
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
                      <h4 class="text-gray-600">{{ $t('jdu_kids_subject_two') }}</h4>
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
                      <h4 class="text-gray-600">{{ $t('jdu_kids_subject_three') }}</h4>
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
                      <h4 class="text-gray-600">{{ $t('jdu_kids_subject_four') }}</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <!-- <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                {{ $t('more_button_text') }}
              </button> -->
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
                class="text-green-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300">
                <font-awesome-icon icon="fa-solid fa-code" class="w-6 h-6" />
              </div>
              <h3 class="text-3xl font-semibold">{{ $t('jdu_systems_title') }}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">{{ $t('jdu_systems_aim') }}</span>
                {{ $t('jdu_systems_aim_description') }}
              </p>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  {{ $t('jdu_systems_services_title') }}
                </span>
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        {{ $t('jdu_systems_service_one') }}
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">{{ $t('jdu_systems_service_two') }}</h4>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  {{ $t('jdu_systems_advantages_title') }}
                </span>
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        {{ $t('jdu_systems_advantage_one') }}
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        {{ $t('jdu_systems_advantage_two') }}
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                          class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        {{ $t('jdu_systems_advantage_three') }}
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="my-8">
              <!-- <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                {{ $t('more_button_text') }}
              </button> -->
            </div>
          </div>
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/systems.jpg" />
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
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src="/images/consulting.jpg" />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <font-awesome-icon icon="fa-solid fa-rocket" class="w-6 h-6" />
              </div>
              <h3 class="text-3xl font-semibold">{{ $t('jdu_consulting_title') }}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">{{ $t('jdu_consulting_aim') }}</span>
                {{ $t('jdu_consulting_aim_description') }}
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
                        {{ $t('jdu_consulting_service_one') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_service_two') }}
                      </h4>
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_service_three') }}
                      </h4>
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_service_four') }}
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="mt-4 text-lg leading-relaxed text-gray-600 font-bold">
                {{ $t('jdu_consulting_main') }}: Mamajonov Ravshanbek
              </p>

              <p class="mt-6 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  {{ $t('jdu_consulting_chief_education_title') }}
                </span>
              </p>
              <ul class="list-none mt-1">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_chief_education_one') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_chief_education_two') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_chief_education_three') }}
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>

              <p class="mt-6 text-lg leading-relaxed text-gray-600">
                <span class="font-bold">
                  {{ $t('jdu_consulting_chief_work_title') }}
                </span>
              </p>
              <ul class="list-none mt-1">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                          class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_chief_work_one') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_chief_work_two') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_chief_work_three') }}
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
                      <h4 class="text-gray-600">
                        {{ $t('jdu_consulting_chief_work_four') }}
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>

            </div>
            <div class="my-8">
              <!-- <button type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                {{ $t('more_button_text') }}
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Management Section -->

    <section class="pb-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-bold text-gray-600">{{ $t('management_title') }}</h2>
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img alt="..." src="/images/ceo.jpg" class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px" />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">{{ $t('management_head_one_name') }}</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  {{ $t('management_head_one_occupation') }}
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
                <h5 class="text-xl font-bold">{{ $t('management_head_two_name') }}</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  {{ $t('management_head_two_occupation') }}
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
        <h2 class="text-4xl text-white text-center font-semibold pb-12">
          {{ $t('contact_title') }}
        </h2>
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">

            <div class="pt-6 px-32 text-center">
              <h5 class="text-xl text-white font-bold">
                {{ $t('contact_address') }}
              </h5>
              <p class="mt-1 text-sm text-gray-500 font-semibold">
                {{ $t('contact_full_address') }}
              </p>
              <h5 class="text-xl text-white font-bold mt-4">
                {{ $t('contact_phone') }}
              </h5>
              <p class="mt-1 text-sm text-gray-500 font-semibold">
                (71) 200-05-95
              </p>
              <h5 class="text-xl text-white font-bold mt-4">
                {{ $t('contact_email') }}
              </h5>
              <p class="mt-1 text-sm text-gray-500 font-semibold">
                info@jdu.uz
              </p>
            </div>

          </div>
          <div class="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <div class="mapouter">
                <div class="gmap_canvas"><iframe width="600" height="400" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=tashkent%20fonon%20chilonzor&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
library.add(faCode);

library.add(faGoogle);
library.add(faFacebook);
library.add(faInstagram);
library.add(faTwitter);
library.add(faDribbble);
</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  width: 600px;
  height: 400px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 600px;
  height: 400px;
}

.gmap_iframe {
  width: 600px !important;
  height: 400px !important;
}
</style>