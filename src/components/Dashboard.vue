<script setup>
import { getUsers,getUserInfoById,auth} from '../firebase.js'
import { getFirestore, collection, getDoc, setDoc, addDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from '../composables/useAuth.js';


const { uid } = useAuth(); // Access uid here
</script>

<template>
  <div>
    <p v-if="uid">User ID: {{ uid }}</p>
    <p v-else>No user logged in</p>
  </div>
  <button v-on:click="getUserInfoById(uid)" >Test</button>
</template>

<style scoped>

</style>
