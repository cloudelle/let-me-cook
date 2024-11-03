<script setup>
import { loginEmail, loginPassword, login} from '../firebase.js';
</script>

<style>
div {
  margin: 0;
  overflow: hidden;
}
</style>
<template>
  <div class="h-[calc(100vh-6.5rem)] bg-cover bg-center bg-no-repeat bg-[url('../../images/login-register-page.png')]">
    <div class="bg-white w-full max-w-md border rounded-2xl shadow-lg mx-auto my-24 p-8 dark:bg-gray-800">
      <p class="text-4xl font-merienda font-bold text-gray-900 dark:text-white text-center">Login</p>
      <br>
  <form class="text-center space-y-4">
    <div class="flex items-center">
      <label class="w-1/4 text-gray-700 font-semibold dark:text-gray-300">Email:</label>
      <input v-model="loginEmail" type="text" placeholder="Email" class="w-full px-4 py-2 border rounded-lg focus:outline-red-200" />
      </div>
      <div class="flex items-center">
        <label class="w-1/4 text-gray-700 font-semibold dark:text-gray-300">Password:</label>
      <input v-model="loginPassword" type="password" placeholder="Password" class="w-full px-4 py-2 border rounded-lg focus:outline-red-200" />
      </div>

      
      <button v-on:click="login" v-on:keyup.enter="login" type="submit" class="focus:outline-none text-white bg-tomato hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 pt-1.5 pb-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Login</button>
      <!-- <button v-on:click="login" type="submit">Login</button> -->
    </form>
    <div class="text-sm text-gray-900 mt-5 dark:text-white">
      Not registered yet? <span><router-link to="/register" class="text-tomato hover:text-red-500">Create account</router-link>
      </span>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
