<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <nuxt-link :to="{ hash: '#group' }" :external="true"
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
          {{ $t('menu_jdu_group') }}
        </nuxt-link>
        <button
          class="cursor-pointer text-xl text-white leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" @click="toggleNavbar">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
      </div>
      <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{ hidden: !showMenu, block: showMenu }">
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <nuxt-link :to="{ hash: '#university' }" :external="true"
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
              {{ $t('menu_jdu_university') }}
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link :to="{ hash: '#academy' }" :external="true"
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
              {{ $t('menu_jdu_academy') }}
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link :to="{ hash: '#kids' }" :external="true"
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
              {{ $t('menu_jdu_kids') }}
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link :to="{ hash: '#systems' }" :external="true"
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
              {{ $t('menu_jdu_systems') }}
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link :to="{ hash: '#consulting' }" :external="true"
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
              {{ $t('menu_jdu_consulting') }}
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link :to="{ hash: '#contact' }" :external="true"
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
              {{ $t('menu_contact_info') }}
            </nuxt-link>
          </li>
        </ul>

        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">


            <nuxt-link :to="switchLocalePath('uz')" @click="toggleLang" v-if="uzLang"
              class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 flex ali"
              style="transition: all 0.15s ease 0s;">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
              Uzbek
            </nuxt-link>




            <nuxt-link :to="switchLocalePath('jp')" @click="toggleLang" v-else
              class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 flex ali"
              style="transition: all 0.15s ease 0s;">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
              Japanese
            </nuxt-link>

          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>
<script setup>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBars } from "@fortawesome/free-solid-svg-icons";


/* add icons to the library */
library.add(faBars);

const showMenu = ref(false);
const uzLang = ref(true);

function toggleNavbar() {
  showMenu.value = !showMenu.value;
}

function toggleLang() {
  uzLang.value = !uzLang.value;
}
</script>
