<script setup>
</script>

<template>
  <div id="nav">
    <nav>
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/">Dashboard</router-link> 
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
