<script setup>
// import { onAuthStateChanged} from './firebase.js'
import Navbar from "./components/Navbar.vue"
</script>

<template>

    <Navbar/>
    <router-view/>  

  <!-- <div id="nav">
    <nav>
    <router-link to="/register">Register</router-link> |
     smtg is wrong here 
    <router-link v-if='!onAuthStateChanged' to="/login">Login</router-link> |
    <router-link to="/Dashboard">Dashboard</router-link> |
    <router-link to="/">About</router-link> 
  </nav>
  </div> -->

</template>
<style scoped>

</style>
