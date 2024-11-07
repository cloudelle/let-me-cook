<script setup>
import { loginEmail, loginPassword, login } from '../firebase.js';
</script>

<template>
  <div class="w-full max-w-md border rounded-2xl shadow-lg mx-auto my-24 p-8 ">
    <p class="text-4xl font-bold text-gray-900 text-center">Login</p>
    <br>
    <form class="text-center space-y-4">
      <div class="md:flex md:items-center md:justify-center md:space-x-4">
        <label class="w-full md:w-1/4 text-gray-700 font-semibold text-center md:text-right">Email:</label>
        <input v-model="loginEmail" type="text" placeholder="Email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 mt-2 md:mt-0" />
      </div>
      <div class="md:flex md:items-center md:justify-center md:space-x-4">
        <label class="w-full md:w-1/4 text-gray-700 font-semibold text-center md:text-right">Password:</label>
        <input v-model="loginPassword" type="password" placeholder="Password"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 mt-2 md:mt-0" />
      </div>

      <div class="text-center">
        <button v-on:click="login" type="submit"
          class="focus:outline-none text-white bg-tomato hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mt-4">Login</button>
        <!-- <button v-on:click="login" type="submit">Login</button> -->
      </div>

    </form>
    <div class="text-sm text-gray-900 mt-5 text-center">
      Not registered yet? <span class="whitespace-nowrap"><router-link to="/register"
          class="text-tomato hover:text-red-500">Create
          account</router-link>
      </span>
    </div>
  </div>
</template>

<style scoped></style>