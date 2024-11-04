<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

const router = useRouter();


// Define reactive variables
const userName = ref('');
const userEmail = ref('');
const userPoints = ref('');
const userStreak = ref('');
const userActiveChallenge = ref('');
const ingredient = ref('');
const documentId = ref(null);
const recipeImg = ref('');
const recipeTitle = ref('');
const recipeScore = ref('');
const description = ref('');
const steps = ref('');
const ingredients = ref('');
const availableChallenges = ref([]); // Array of available challenges



async function getUserData(uid) {
  try {
    const docRef = doc(db, 'user', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      userName.value = userData.name;
      userEmail.value = userData.email;
      userPoints.value = userData.points;
      userStreak.value = userData.streak;
      userActiveChallenge.value = userData.activeChallenge;
      documentId.value = uid;
      displayActiveChallenge()
    } else {
      console.log('No such document!');
    }
  } catch (e) {
    console.error('Error getting user document:', e);
  }
}

// Function to add ingredient
async function addIngredient() {

  if (documentId.value) {
    try {
      const docRef = doc(db, "ingredients", documentId.value);

      await updateDoc(docRef, {
        ingredient: arrayUnion(ingredient.value)
      });

      console.log("Ingredient added: ", ingredient.value);
    } catch (e) {
      console.error("Error adding ingredient: ", e);
    }
  } else {
    console.error("No document ID found.");
  }
}

async function displayActiveChallenge() {


  if (userActiveChallenge.value != "") {

    var url = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/information?includeNutrition=false&apiKey=f88baf2ecf9a4eab92a25613785c4ba1"

    axios.get(url)
      .then(response => {
        console.log(response.data);
        recipeTitle.value = response.data.title
        recipeImg.value = response.data.image
        recipeScore.value = (response.data.analyzedInstructions[0].steps).length * response.data.readyInMinutes
        description.value = response.data.summary
        steps.value = response.data.analyzedInstructions[0].steps
      })
      .catch(error => {
        console.log(error.message);
      });

    var ingredientUrl = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/ingredientWidget.json?apiKey=af8d927cc09d4e718de7f8b37b6faec8"
    axios.get(ingredientUrl)
      .then(response => {
        ingredients.value = response.data.ingredients
        console.log(ingredients.value);
      })
      .catch(error => {
        console.log(error.message);
      });

    // https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=739a15dee8b84c5187535bfa56e19ccb
    // "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/ingredientWidget.json"
    // "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/nutritionWidget.json"

  }
}

async function updateActiveChallenge(challengeId) {
  if (documentId.value) {
    try {
      const docRef = doc(db, 'user', documentId.value);
      await updateDoc(docRef, {
        activeChallenge: challengeId,
      });
      userActiveChallenge.value = challengeId; // Update the local variable
      console.log('Active challenge updated to:', challengeId);
      displayActiveChallenge(); // Display the new challenge
    } catch (e) {
      console.error('Error updating active challenge:', e);
    }
  } else {
    console.error('No document ID found.');
  }
}

// Mock function to populate available challenges (replace with actual data)
function loadAvailableChallenges() {
  availableChallenges.value = [
    { id: '12345', name: 'Pasta Challenge' },
    { id: '67890', name: 'Salad Challenge' },
    { id: '11223', name: 'Dessert Challenge' }
  ];
}


// Authentication check on component mount
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/login');
    } else {
      const uid = user.uid;
      getUserData(uid);
    }
  });
  loadAvailableChallenges(); // Load available challenges
});
</script>

<template>
  <br />
  <h1>Active Challenges</h1>
  <br>
  <b><u>{{ recipeTitle }}</u></b>
  <p v-html="description"></p>
  <br>
  <p>Score: {{ recipeScore }}</p>
  <img v-bind:src="recipeImg" alt="">
  <br>

  <h3>Recipe Steps:</h3>
  <ol>
    <li v-for="(step, index) in steps" :key="index">
      {{ index + 1 }}. {{ step.step }}
    </li>
  </ol>

  <br />

  <!-- <h3>Input Your Ingredients:</h3>
  <span>
    <input type="text" placeholder="Type your ingredient here" v-model="ingredient" />
    <button @click="addIngredient">Add</button>
  </span> -->

  <!-- <h3>Select a New Challenge:</h3>
  <select v-model="userActiveChallenge" @change="updateActiveChallenge(userActiveChallenge)">
    <option v-for="challenge in availableChallenges" :key="challenge.id" :value="challenge.id">
      {{ challenge.name }}
    </option>
  </select>
  <br/>
  <button @click="updateActiveChallenge(userActiveChallenge)">Complete Challenge</button> -->

</template>
