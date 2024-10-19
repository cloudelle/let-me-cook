<script setup>
import { getUsers,auth} from '../firebase.js'
import { getFirestore, collection, getDoc, setDoc, addDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// const uid = ref(null); // reactive state to store the user's uid
// const router = useRouter();

// onMounted(() => {
//   // Firebase listener to track auth state
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, store the uid
//       uid.value = user.uid;
//     } else {
//       // User is signed out, navigate to login page
//       alert("You need to login");
//       router.push("/register");
//     }
//   });
// });
</script>

<template>
  <div>
    <!-- <p v-if="uid">User ID: {{ uid }}</p>
    <p v-else>No user logged in</p> -->
  </div>
  <button v-on:click="getUsers()" >Test</button>
</template>

<style scoped>

</style>
