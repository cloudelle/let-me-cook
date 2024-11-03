<script setup>
  import { ref, onMounted } from 'vue';
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth, email } from '../firebase.js';
  import { useRouter } from "vue-router";
  import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

  const router = useRouter();
  const userName = ref(''); // To store the user's name
  const userEmail = ref(''); // Reactive variable for user's email
  const userPoints = ref('');
  const userStreak = ref('');

  async function getUserData(uid) {
      
      try {
        const docRef = doc(db, "user", uid); // Get document by user ID (UID)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          userName.value = docSnap.data().name; // Set the userName from the Firestore document
          // console.log("User Name:", userName.value);
          userEmail.value = docSnap.data().email;
          // console.log("User Email:", userEmail.value);
          userPoints.value = docSnap.data().points;
          // console.log("User Points:", userPoints.value);
          userStreak.value = docSnap.data().streak;
          // console.log("User Streak:", userStreak.value);

        } else {
          console.log("No such document!");
        }
      } catch (e) {
        console.error("Error getting user document:", e);
      }
    }

  onMounted(() => {
      onAuthStateChanged(auth, (user) => {
          if (!user) {
              // alert("You need to login");
              // Optionally navigate to the login or register page if needed
              router.push('/login')
          }
          else {
            // User is signed in, get their UID
            const uid = user.uid;
            // console.log("Logged in as:", uid);
            // Get the user's name from Firestore
            getUserData(uid);
          }
      });
  })
</script>



<template>

      <div>
        Name: {{ userName }}
        <br>
        Email: {{ userEmail }}
        <br>
        Points: {{ userPoints }}
        <br>
        Streak: {{ userStreak }}

      </div>

    <h3>Input Your Ingredients:
        <span>
            <input type="text" placeholder="Type your ingredient here" v-model="ingredient">
            <button @click="addIngredient">Add</button>
        </span>
    </h3>

</template>

<script>
import { app, db } from '../firebase';
import { collection, getDoc, getDocs, updateDoc, arrayUnion, doc } from 'firebase/firestore';


export default {
  name: "Ingredients",
  props: {
    msg: String
  },

  data() {
    return {
      ingredient: null,
      documentId: null, // To store the document ID
      activeTab: 'Active Challenges',
      tabs: ['Active Challenges', 'Posts', 'Tagged'],
    }
  },

  methods: {
    async getDocumentId() {
      try {
        // Get all documents in the "ingredients" collection
        const querySnapshot = await getDocs(collection(db, "ingredients"));

        // Loop through each document and extract the ID
        querySnapshot.forEach((doc) => {
          // Assuming you want the first document, you can store its ID
          this.documentId = doc.id;
          console.log("Document ID: ", doc.id);
          return; // Stop after the first one (remove this if you want to iterate through all documents)
        });

      } catch (e) {
        console.error("Error getting document ID: ", e);
      }
    },

    async addIngredient() {
      // Ensure documentId is retrieved before adding ingredient
      await this.getDocumentId();

      if (this.documentId) {
        try {
          const docRef = doc(db, "ingredients", this.documentId);

          await updateDoc(docRef, {
            ingredient: arrayUnion(this.ingredient)
          });

          console.log("Ingredient added: ", this.ingredient);
        } catch (e) {
          console.error("Error adding ingredient: ", e);
        }
      } else {
        console.error("No document ID found.");
      }
    }
  }
}
</script>
