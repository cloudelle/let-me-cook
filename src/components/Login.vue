<script setup>
import { loginEmail, loginPassword, login} from '../firebase.js';
</script>

<template>
  <h2>Login</h2>
  <form>
    Email: <input v-model="loginEmail" type="Email" placeholder="Email" />
    <br />
    Password: <input v-model="loginPassword" type="Password" placeholder="Password" />
    <br/>
    <button v-on:click="login" type="submit">Login</button>
  </form>
</template>

<style scoped>

</style>
