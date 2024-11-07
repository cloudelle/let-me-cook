<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter, useRoute } from 'vue-router';
import { signOutUser } from '../firebase.js';

// Import the logo image
import logo from '../../images/lmc.png';

const auth = getAuth();
const isLoggedIn = ref(false);
const uid = ref(""); // Define uid as a reactive reference
const route = useRoute();
const closeMenu = () => {
  isMenuOpen.value = false;
};


// Reactive state for menu visibility
const isMenuOpen = ref(false);

// Function to toggle the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Reactive state for navbar opacity
const opacity = ref(1); // Initial opacity (fully visible)

// Function to update opacity based on scroll position
const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  // Calculate opacity based on scroll position (e.g., fades out after 200px)
  opacity.value = Math.max(1 - scrollTop / 200, 0); // Fades to 0 as you scroll down
};

// Computed style for the navbar
const navbarStyle = computed(() => ({
  opacity: opacity.value,
  pointerEvents: opacity.value === 0 ? 'none' : 'auto' // Disable pointer events when opacity is 0
}));

// Add and remove scroll event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user; // Set to true if user is signed in, false otherwise
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div id="bg" class="transition-opacity duration-500" :style="navbarStyle">
    <nav class="border-gray-200 relative">
      <div class="flex items-center justify-between mx-0 p-3">

        <!-- Logo Link -->
        <!-- Logo Link in Navbar.vue -->
        <router-link to="/" class="flex items-center no-underline">
          <img :src="logo" alt="Logo" class="h-10 w-10 mr-2" />
          <span class="text-xl font-bold text-gray-900 no-underline">Let Me Cook</span>
        </router-link>

        <!-- Hamburger Icon for Small Screens -->
        <button @click="toggleMenu"
          class="md:hidden inline-flex items-center p-1 w-8 h-8 text-gray-900 focus:outline-none z-10">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Full-Screen Overlay Menu for Smaller Screens -->
        <div
          :class="['fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out', isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none']">
          <!-- Inside the Full-Screen Overlay Menu for Smaller Screens -->
          <ul class="font-medium flex flex-col space-y-4 items-center text-lg px-0 pt-3 md:pt-0">
            <li v-if="!isLoggedIn && route.name !== 'Register'">
              <router-link to="/register" @click="closeMenu"
                class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Register</router-link>
            </li>
            <li v-if="!isLoggedIn && route.name !== 'Login'">
              <router-link to="/login" @click="closeMenu"
                class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Login</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/Profile" @click="closeMenu"
                class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Profile</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/Start" @click="closeMenu"
                class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Start</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/social" @click="closeMenu"
                class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Social</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/leaderboard" @click="closeMenu"
                class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline" active-class="text-tomato"
                exact-active-class="text-tomato">Leaderboard</router-link>
            </li>

            <!-- Sign Out button in mobile menu -->
            <li v-if="isLoggedIn">
              <router-link to="/login" @click="() => { signOutUser(uid); closeMenu(); }"
                class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline text-lg font-semibold"
                active-class="text-tomato" exact-active-class="text-tomato">
                Sign Out
              </router-link>
            </li>
          </ul>

        </div>

        <!-- Horizontal Menu for Larger Screens -->
        <div class="hidden md:flex md:items-center md:justify-center md:space-x-8">
          <ul class="font-medium flex flex-row space-x-8 items-center text-lg px-0 pt-3 md:pt-0">
            <li v-if="!isLoggedIn && route.name !== 'Register'">
              <router-link to="/register" class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline"
                active-class="text-tomato" exact-active-class="text-tomato">Register</router-link>
            </li>
            <li v-if="!isLoggedIn && route.name !== 'Login'">
              <router-link to="/login" class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline"
                active-class="text-tomato" exact-active-class="text-tomato">Login</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/Profile" class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline"
                active-class="text-tomato" exact-active-class="text-tomato">Profile</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/Start" class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline"
                active-class="text-tomato" exact-active-class="text-tomato">Start</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/social" class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline"
                active-class="text-tomato" exact-active-class="text-tomato">Social</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/leaderboard" class="py-2 text-gray-900 rounded hover:bg-gray-100 no-underline"
                active-class="text-tomato" exact-active-class="text-tomato">Leaderboard</router-link>
            </li>
          </ul>
        </div>

        <!-- Right-Aligned Sign Out Button, hidden on smaller screens -->
        <div v-if="isLoggedIn" class="hidden md:flex items-center ml-4 text-lg">
          <router-link to="/login" v-on:click="signOutUser(uid)"
            class="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 no-underline" active-class="text-tomato"
            exact-active-class="text-tomato">
            Sign Out
          </router-link>
        </div>

      </div>
    </nav>
  </div>
</template>

<style scoped>
#bg {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
}

img {
  height: 100px;
  width: 100px;
  object-fit: contain;
}
</style>