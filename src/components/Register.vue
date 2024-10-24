<script setup>
import { email, password, register, name} from '../firebase.js';

</script>

<template>  
  <h2>Register</h2>
  <form>
    Name:<input v-model="name" type="text" placeholder="Name" />
    <br>
    Email: <input v-model="email" type="Email" placeholder="Email" />
    <br />
    Password: <input v-model="password" type="Password" placeholder="Password" />
    <br />
    <button v-on:click="register" type="submit">Register</button>
  </form>
</template>

<style scoped>

</style>
