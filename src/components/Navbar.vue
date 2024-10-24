<script setup>
import { ref } from 'vue';

// Reactive state for menu visibility
const isMenuOpen = ref(false);

// Function to toggle the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <!-- <div class="bg-blue-500 text-white p-6">
    Tailwind is working!
  </div> -->
<!-- <div class="bg-green-300"> -->
  <nav class="border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
      <button @click="toggleMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>

       <!-- Menu Links -->
       <div :class="isMenuOpen ? 'block' : 'hidden'" class="w-full md:block md:w-auto mx-auto" id="navbar-default">
      <!-- <div class="hidden w-full md:block md:w-auto mx-auto" id="navbar-default"> -->
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <router-link to="/register" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0" active-class="text-tomato"
              exact-active-class="text-tomato">Register</router-link>
          </li>
          <li>
              <router-link v-if='!onAuthStateChanged' to="/login" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0" active-class="text-tomato"
              exact-active-class="text-tomato">Login</router-link>
          </li>
          <li>
              <router-link to="/Dashboard" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0" active-class="text-tomato"
              exact-active-class="text-tomato">Dashboard</router-link>
          </li>
          <li>
              <router-link to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0" active-class="text-tomato"
              exact-active-class="text-tomato">About</router-link>
          </li>
          <li>
              <router-link to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0" active-class="text-tomato"
              exact-active-class="text-tomato">Start</router-link>
          </li>
          <li>
              <router-link to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0" active-class="text-tomato"
              exact-active-class="text-tomato">Social</router-link>
          </li>
          <li>
              <router-link to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0" active-class="text-tomato"
              exact-active-class="text-tomato">Leaderboard</router-link>
          </li>

          <!-- <li>
            <router-link to="/">
              <button type="button" class="text-gray-900 bg-green-100 hover:bg-green-200 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" active-class="text-red-600"
              exact-active-class="text-red-600">Get Started!</button>
            </router-link>

          </li> -->

        </ul>
      </div>
          
    </div>
  </nav>

<!-- </div> -->

</template>

<style lang="scss" scoped>

</style>