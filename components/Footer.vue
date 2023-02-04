<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Aloqada bo'lib turaylik!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Bizni ushbu platformalarning istalganida toping.
          </h5>
          <div class="mt-6">
            <a href="https://www.facebook.com/jdu.uz/"
              class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button">
              <font-awesome-icon icon="fa-brands fa-facebook" class="flex" />
            </a>
            <a href="https://www.instagram.com/jdu.uz/"
              class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button">
              <font-awesome-icon icon="fa-brands fa-instagram" class="flex" />
            </a>
            <a href="https://www.youtube.com/c/JapanDigitalUniversity"
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button">
              <font-awesome-icon icon="fa-brands fa-youtube" class="flex" />
            </a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Ko'proq ma'lumot</span>
              <ul class="list-unstyled">
                <li>
                  <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#group">JDU Group</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Tarmoqlarimiz</span>
              <ul class="list-unstyled">
                <li>
                  <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#university">JDU University</a>
                </li>
                <li>
                  <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#academy">JDU Academy</a>
                </li>
                <li>
                  <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#kids">JDU Kids</a>
                </li>
                <li>
                  <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#systems">JDU Systems</a>
                </li>
                <li>
                  <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#consulting">JDU Consulting</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} JDU LLC
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


/* add icons to the library */
library.add(faFacebook);
library.add(faInstagram);
library.add(faYoutube);
library.add(faTwitter);

let date = new Date().getFullYear();
</script>
