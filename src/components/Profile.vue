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
const calories = ref('');
const carbs = ref('');
const fat  = ref('');
const protein = ref('');


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

    var url = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/information?includeNutrition=false&apiKey=739a15dee8b84c5187535bfa56e19ccb"
    // 739a15dee8b84c5187535bfa56e19ccb

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

      var ingredientUrl = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/ingredientWidget.json?apiKey=f88baf2ecf9a4eab92a25613785c4ba1"
      axios.get(ingredientUrl)
      .then(response => {
        ingredients.value = response.data.ingredients
        console.log(ingredients.value);
      })
      .catch(error => {
        console.log(error.message);
      });


      var nutritionUrl = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/nutritionWidget.json?apiKey=af8d927cc09d4e718de7f8b37b6faec8"
      axios.get(nutritionUrl)
      .then(response => {
        calories.value = response.data.calories
        carbs.value = response.data.carbs
        fat.value = response.data.fat
        protein.value = response.data.protein

        console.log(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });

      // https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=739a15dee8b84c5187535bfa56e19ccb
      // "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/ingredientWidget.json"
      // "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/nutritionWidget.json"

  }else {
    var active = False
  }
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
});
</script>

<template>
  <br />
  <h1>Active Challenges</h1>
  <br>
  <b><u>{{recipeTitle}}</u></b>
  <p v-html="description"></p>
  <br>
  <p>Score: {{recipeScore}}</p>
  <img v-bind:src="recipeImg" alt="">
  <br>

  <h3>Recipe Steps:</h3>
  <ol>
  <li v-for="(step, index) in steps" :key="index">
    {{ index + 1 }}. {{ step.step }}
  </li>
  </ol>
  
    <br>
  <div v-if="ingredients && ingredients.length">
    <h3>Ingredients:</h3>
    <ol>
      <li v-for="(item, index) in ingredients" :key="index">
        {{ index + 1 }}. {{ item.name }}
      </li>
    </ol>
  </div>



  <br/>
  <br>
  <b><u>Nutrition Info</u></b><br>
  Calories:<p>{{calories}}</p>
  Carbs:<p>{{carbs}}</p>
  Fat:<p>{{fat}}</p>
  Protein:<p>{{protein}}</p>


  <button>Complete Challenge</button>


  <!-- <h3>Input Your Ingredients:</h3>
  <span>
    <input type="text" placeholder="Type your ingredient here" v-model="ingredient" />
    <button @click="addIngredient">Add</button>
  </span> -->
</template>
