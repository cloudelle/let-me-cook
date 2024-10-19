<script setup>
// import { onAuthStateChanged} from './firebase.js'
</script>

<template>
  <div id="nav">
    <nav>
    <router-link to="/register">Register</router-link> |
    <!-- smtg is wrong here -->
    <router-link v-if='!onAuthStateChanged' to="/login">Login</router-link> |
    <router-link to="/Dashboard">Dashboard</router-link> |
    <router-link to="/">About</router-link> 
  </nav>
  </div>
  <router-view/>
</template>
<style scoped>
#nav{
  padding: 30px;
  margin: 30px;
}
</style>
