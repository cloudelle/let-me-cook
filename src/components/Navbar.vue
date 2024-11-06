<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { signOutUser } from '../firebase.js'

const auth = getAuth();
const isLoggedIn = ref(false);
const uid = ref(""); // Define uid as a reactive reference

// Reactive state for menu visibility
const isMenuOpen = ref(false);

// Function to toggle the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user; // Set to true if user is signed in, false otherwise
  });
});

</script>

<template>
  <div id="bg">
    <nav class="border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <button @click="toggleMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-900 md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <!-- Menu Links -->
        <div :class="isMenuOpen ? 'block' : 'hidden'" class="w-full md:block md:w-auto mx-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-2 md:p-0 mt-2 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li v-if="!isLoggedIn">
              <router-link to="/register" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0 no-underline" active-class="text-tomato"
              exact-active-class="text-tomato">Register</router-link>
            </li>
            <li v-if="!isLoggedIn">
                <router-link to="/login" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Login</router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link to="/Profile" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Profile</router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link to="/login" v-on:click="signOutUser(uid)" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Sign Out</router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link to="/Start" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Start</router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link to="/social" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Social</router-link>
            </li>
            <li v-if="isLoggedIn">
                <router-link to="/leaderboard" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tomato md:p-0 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Leaderboard</router-link>
            </li>
          </ul>
        </div>
            
      </div>
  </nav>
</div>

<!-- </div> -->

</template>

<style scoped>
</style>