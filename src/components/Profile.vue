<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '../firebase.js';
import router from '../router'; // (new) Import the router instance from index.js


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
const fat = ref('');
const protein = ref('');
const timeTaken = ref('');
const servings = ref('');


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



async function displayActiveChallenge() {

  var apiKey = "a6c77a7dcc274176a32b89dea767f651";
  //apiKey: "739a15dee8b84c5187535bfa56e19ccb"
  //apiKey: "f88baf2ecf9a4eab92a25613785c4ba1",
  //af8d927cc09d4e718de7f8b37b6faec8
  //a7d1f5efe8b44415b138d80f9e6f8bfc
  //a6c77a7dcc274176a32b89dea767f651
  //cdbd83399ef34b0d9cd4c87cc449e092
  //da4f4319aef647f2b661181013f1042f

  if (userActiveChallenge.value != "") {

    var url = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/information?includeNutrition=false&apiKey=" + apiKey

    axios.get(url)
      .then(response => {
        console.log(response.data);
        recipeTitle.value = response.data.title
        recipeImg.value = response.data.image
        servings.value = response.data.servings
        timeTaken.value = response.data.readyInMinutes
        description.value = response.data.summary
        if (response.data.analyzedInstructions.length > 0) {
          // console.log("testing")
          recipeScore.value = (response.data.analyzedInstructions[0].steps).length * response.data.readyInMinutes
          steps.value = response.data.analyzedInstructions[0].steps
        }
        else {
          // console.log("no instruction")
          recipeScore.value = response.data.readyInMinutes
        }

      })
      .catch(error => {
        console.log(error.message);
      });

      var ingredientUrl = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/ingredientWidget.json?apiKey=" + apiKey
      axios.get(ingredientUrl)
      .then(response => {
        ingredients.value = response.data.ingredients;
      })
      .catch(error => {
        console.log(error.message);
      });


      var nutritionUrl = "https://api.spoonacular.com/recipes/" + userActiveChallenge.value + "/nutritionWidget.json?apiKey=" + apiKey

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

  }
}

// Function to complete challenge and redirect
function completeChallenge() {
  if (userActiveChallenge.value) {
    router.push({ name: 'Social' }); // Redirect to Social page by name
  } else {
    alert('No active challenge to complete.');
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


// // Function to add ingredient
// async function addIngredient() {
//   if (documentId.value) {
//     try {
//       const docRef = doc(db, "ingredients", documentId.value);
//       await updateDoc(docRef, {
//         ingredient: arrayUnion(ingredient.value)
//       });
//       console.log("Ingredient added: ", ingredient.value);
//     } catch (e) {
//       console.error("Error adding ingredient: ", e);
//     }
//   } else {
//     console.error("No document ID found.");
//   }
// }


</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merienda">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <section class="page row">
    <section class="heading">
      <h1>Active Challenge</h1>
    </section>

    <section class="recipe">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 p-0 d-flex">
            <img class="recipe-img" v-bind:src="recipeImg" alt="">
          </div>
          <div class="col-lg-6 p-0 m-auto">
            <div class="recipe-details">
              <div class="recipe-title">
                <p>{{recipeTitle}}</p>
              </div>

              <div class="recipe-score">
                <p>Score: {{recipeScore}}</p>
              </div>

              <div class="recipe-description">
              <p v-html="description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </section>

    <hr class="break1">

    <div class="instructions">
      <h4>Instructions</h4>
    </div>
    <div class="recipe-icons">
      <h5><i class="fa-regular fa-clock"></i> {{ timeTaken }} mins</h5>
      <h5><i class="fa-solid fa-utensils"></i> {{ servings }} servings</h5>
    </div>
    
    <section class="instruction-section">
      <div class="container-fluid">
        <div class="row box1">
          <div class="col-lg-6 ingredient-box">
            <div v-if="ingredients && ingredients.length" class="recipe-ingredient">
              <h3>Ingredients:</h3>
              <ol>
                <li v-for="(item, index) in ingredients" :key="index">
                  <i class="fa-solid fa-bread-slice"></i> {{ item.name }}
                </li>
              </ol>
            </div>
          </div>
          <div class="col-lg-6 m-auto">
            <div class="nutrition">
              <h3>Nutrition Info</h3>
              <div class="nutritional-info">
                <p>Calories: {{calories}}cal</p>
                <p>Carbs: {{carbs}}</p>
                <p>Fat: {{fat}}</p>
                <p>Protein: {{protein}} </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="recipe-steps box2">
            <h3>Recipe Steps:</h3>
            <ol>
              <li v-for="(step, index) in steps" :key="index">
                {{ index + 1 }}. {{ step.step }}
              </li>
            </ol>
          </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

  .page {
    background-color: rgb(235, 235, 235);
  }

  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }

  .heading h1 {
    font-size: 45px;
    font-weight: bold;
    font-family: "Merienda", serif;
    text-align: center;
    color: rgb(0, 0, 0);
    /* letter-spacing: 5px; */
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .recipe-img {
  margin: auto;
  width: 90%; 
  border-radius: 30px;
  object-fit: cover; /* Ensures the image fills and crops at the sides */
  padding-top: 40px;
  padding-bottom: 40px;
  }

  .recipe-details {
    text-align: center;
    margin: auto;
    width: 90%;
  }
  
  .recipe-title p{
    font-family: "Merienda", serif;
    font-size: 200%;
    /* padding-left: 80px; */
    font-weight: 600;
    margin-top: 20px;
    color: rgb(122, 17, 17);
  }

  .recipe-score {
    font-family: "Merienda", serif;
    /* text-align: end; */
    /* padding-right: 80px; */
    font-size: larger;
    color: rgb(255, 157, 101);
    font-weight: 600;
    margin: 0;
  }

  .recipe-description {
    margin-top: 10px;
    font-size: 15px;
    /* padding-left: 80px;
    padding-right: 80px; */
  }

  .break1 {
    width: 90%;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .instructions {
    text-align: center;
    font-family: "Merienda", serif;
    margin: 40px;
    margin-bottom: 20px;
    
  }

  .instructions h4 {
    font-size: 38px;
    font-weight: medium;
    text-decoration: underline;
    text-underline-offset: 6px;
  }

   .box1 {
    background-color: rgb(252, 244, 231);
    /* background-color: rgb(253, 249, 242); */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 90%;
    
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 20px;
    padding-top: 1px;
    padding-bottom: 30px;
    margin: auto;
    padding-top: 30px;
  }

  /* .ingredient-box {
    border: 2px solid rgb(185, 184, 184);
    margin: auto;
    border-radius: 10px;
    /* margin-left: 10px;
    padding-right: 10px; */
  

  .recipe-icons {
    margin-top: 15px;
    margin-bottom: 40px;
    /* padding-left: 60px; */
    font-family: "Trirong", serif;
    text-align: center;
  }

  .recipe-icons h5 {
    font-size: 22px;
  }

  .recipe-ingredient ol{
    margin-top: 10px;
    list-style-type: none;
    /* text-align: center; */
  }

  .recipe-ingredient ol li{
    list-style: none;
    display: inline-block;
    line-height: 200%;
    padding-right: 2em;
    padding-left: 2em;
    text-align: start;
    font-size: large;
  }

  .nutrition {
    border: 2px solid rgb(185, 184, 184);
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
    width: 70%;
    margin: auto;
    text-align: center;
  }

  .nutritional-info p{
    font-size: large;
    margin: 6px;
  }

  .nutrition h3 {
    font-family: "Trirong", serif;
    font-size: 35px;
    font-weight: bold;
  }

  .recipe-ingredient h3 {
    padding-top: 20px;
    /* padding-left: 60px; */
    text-align: center;
    font-family: "Trirong", serif;
    font-size: 180%;
    font-weight:bold;
    text-align: center;
  }

  .box2 {
    background-color: rgb(235, 235, 235);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding-top: 1px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: auto;
    width: 90%;
  }

  .recipe-steps {
    margin-top: 40px;
    /* margin-right: 80px; */
    padding-right: 20px;
  }

  .recipe-steps h3 {
    /* text-align: center; */
    padding-left: 40px;
    font-family: "Trirong", serif;
    font-size: 180%;
    font-weight:bold;
  }

  .recipe-steps ol{
    padding-left: 40px;
    margin-top: 20px;
    font-size: 20px;
  }

  .recipe-step ol li {
    line-height: 200%;
    padding-top: 20px;
    padding-bottom: 15px !important;
  }

  .instruction-section {
    margin-bottom: 40px;
  }

  .complete {
    margin-top: 40px;
    text-align: center;
    margin-bottom: 40px;
  }
</style>
