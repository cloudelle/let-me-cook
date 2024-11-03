<script setup>
import { getUsers,getUserInfoById,auth} from '../firebase.js'
import { getFirestore, collection, getDoc, setDoc, addDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";


const uid = ref(""); // reactive state to store the user's uid
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        uid.value = user.uid; // Update the reactive uid
        // ...
    } else {
        // User is signed out
        router.push('login')
    }
});
});

</script>

<template>
  <div class="h-[calc(100vh-7rem)] mt-[calc(7rem)]">
    <div>
      <p v-if="uid">User ID: {{ uid }}</p>
      <p v-else>No user logged in</p>
    </div>
    <button v-on:click="getUserInfoById(uid)" >Test</button>

  </div>
</template>

<style scoped>

</style>
