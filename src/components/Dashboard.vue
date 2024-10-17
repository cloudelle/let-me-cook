<script setup>
import { ref } from 'vue'
import { getUsers } from '../firebase.js'

</script>

<template>
  
  <input type="text">
  <br>
  <input type="password">
  <br>
  <button v-on:click="SubmitEvent()"></button>
  


<br><br><br>
  <button v-on:click="getUsers()">Test</button>
</template>

<style scoped>

</style>
