<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useRouter } from "vue-router";
import { app, db } from '../firebase';
import { collection, getDoc, getDocs, updateDoc, arrayUnion, arrayRemove, doc } from 'firebase/firestore';
import { useAuth } from '../composables/useAuth.js';
</script>


<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merienda">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

  <section class="heading row">
    <h1>Challenges</h1>

    <section class="ingredients">
      <!-- Input for typing ingredients -->
      <!-- <div class="container-fluid">
      <div class="row"> -->
      <div class="type-ingredient">
        <span class="search-icon" style="font-family: Outfit, FontAwesome;">&#xf002;</span>
        <input v-model="typedIngredient" @input="fetchIngredientsDebounced" id="ingredient-input" type="text"
          placeholder="Enter Your Ingredient" style="font-family: Outfit, FontAwesome;" />
        <span>
          <button v-if="typedIngredient" class="clear-button" @click="clearInput"
            style="font-family: Outfit, FontAwesome; ">&#xf00d;</button>
        </span>
      </div>
      <!-- Dropdown for suggested ingredients -->
      <div class="suggested-ingredient">
        <ul v-if="suggestedIngredients.length && typedIngredient">
          <li v-for="(ingredient, index) in suggestedIngredients" :key="index" @click="selectIngredient(ingredient)">
            {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <!-- </div>
    </div> -->

      <!-- Selected Ingredients List -->
      <div class="selected-ingredient">
        <div v-if="selectedIngredients.length">
          <!-- <h3>Selected Ingredients:</h3> -->
          <div class="sel-ingredients">
            <ul>
              <li v-for="(ingredient, index) in selectedIngredients" :key="index">
                {{ ingredient }}
                <button @click="removeIngredient(ingredient, index)">X</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </section>

  <div id="recipe-list">
    <h1 v-if="selectedIngredients.length >0">Your suggested recipes!</h1>
    <h1 v-else>Trending Recipes!</h1>
    <div v-for="recipe in recipes" :key="recipe.id" class="recipe" @click="openModal(recipe); stepsCalc(recipe)">
      <img :src="recipe.image" :alt="recipe.title" class="image-container-wrapper" />
      <div class="recipe-content">
        <h3>{{ recipe.title }}</h3>
        <p></p>
        <div class="recipe-score">
          <h4>Score</h4>
          <!-- change scoring system, this is just template for now -->
          <p>{{ calcScore(recipe) }}</p>
        </div>

        <div>
          <h4>Nutritional Information</h4>
          <!-- <p>{{ recipe.nutrition.nutrients }}</p> -->
          <p>Calories: {{ recipe.nutrition.nutrients[0].amount }}cal</p>
          <p>Fat: {{ recipe.nutrition.nutrients[1].amount }}g</p>
          <p>Carbohydrates: {{ recipe.nutrition.nutrients[3].amount }}g</p>
          <p>Protein: {{ recipe.nutrition.nutrients[10].amount }}g</p>
        </div>

      </div>

    </div>


  </div>
  <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h3>{{ selectedRecipe.title }}</h3>
      <img :src="selectedRecipe.image" alt="Recipe image" />
      <p>{{ selectedRecipe.description }}</p>
      <p>Calories: {{ selectedRecipe.nutrition.nutrients[0].amount }}cal</p>
      <p>Fat: {{ selectedRecipe.nutrition.nutrients[1].amount }}g</p>
      <p>Carbohydrates: {{ selectedRecipe.nutrition.nutrients[3].amount }}g</p>
      <p>Protein: {{ selectedRecipe.nutrition.nutrients[10].amount }}g</p>
      <ul>Ingredients Required:
        <li v-for="(steps,idx) in stepsIngredient" :key="idx">{{ (idx+1) + ") " + steps.name.charAt(0).toUpperCase() + steps.name.slice(1)}}</li>
      </ul>
      <button @click="closeModal" style="background-color:rgb(255, 157, 101); font-weight: 700;">Close</button>
      <button @click="addChallenge(selectedRecipe)" style="background-color:rgb(255, 157, 101); font-weight: 700;">START
        CHALLENGE!</button>
    </div>
  </div>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toastRef">
      <div class="toast-header">
        <!-- <img src="..." class="rounded me-2" alt="..."> -->
        <strong class="me-auto">Challenge Added!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Successfully added {{ selectedChallenge }}! Click <router-link to="/Profile">here</router-link> to view the
        details!
      </div>
    </div>
  </div>
</template>

<script>
// src="https://unpkg.com/axios/dist/axios.min.js"
export default {
  data() {
    return {
      isLoggedIn: false,
      typedIngredient: '', // Text from user input
      selectedIngredients: [], // List of selected ingredients
      suggestedIngredients: [], // API suggested ingredients
      fetchIngredientsTimer: null, // Timer for debouncing
      //apiKey: "739a15dee8b84c5187535bfa56e19ccb",
      //apiKey: "739a15dee8b84c5187535bfa56e19ccb",
     // apiKey: "f88baf2ecf9a4eab92a25613785c4ba1",
      apiKey: "af8d927cc09d4e718de7f8b37b6faec8",
      // apiKey: "f22b8ffb2f4f476fb33831a32e903b77",
      //apikey: "32c5a4b096014b22957dc323d87d263f",
      numberOfRecipes: 10, // Number of recipes to display
      recipes: [],
      documentId: null,
      loadingData: true,
      isModalVisible: false,
      selectedRecipe: {},
      uid: null,
      selectedChallenge: null,
      toast: null,
      stepsIngredient: null,
      // apiUrl: `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${numberOfRecipes}&addRecipeInformation=true&apiKey=${apiKey}`

    };
  },
  computed: {

  },
  methods: {
    // Debounced function to fetch ingredients after typing stops
    openModal(recipe) {
      this.selectedRecipe = recipe;
      this.isModalVisible = true;
    },
    // Close modal and clear selected recipe
    closeModal() {
      this.isModalVisible = false;
      this.selectedRecipe = {};
    },
    showToast() {
      if (this.toast) {
        this.toast.show()
      }
    },
    calcScore(recipeCalc) {
      return (
        (recipeCalc.readyInMinutes || 1) *
        ((recipeCalc.analyzedInstructions?.[0]?.steps?.length ?? 1))
      );
    },
    async stepsCalc(stepsRecp) {
      axios.get("https://api.spoonacular.com/recipes/" + stepsRecp.id + "/ingredientWidget.json?apiKey=" + this.apiKey)
      .then(response => {
        this.stepsIngredient = response.data.ingredients
        console.log(this.stepsIngredient)
      })
      .catch(e => {
        console.log(e.message)
      })
    },

    async addChallenge(challengeId) {
      console.log(this.uid)
      console.log(challengeId)
      this.selectedChallenge = challengeId.title
      try {
        const challengeDocRef = doc(db, "user", this.uid)
        await updateDoc(challengeDocRef, {
          activeChallenge: challengeId.id
        })
        console.log("UPDATED")
        this.showToast()

      }
      catch (e) {
        console.log(e)
      }
      this.closeModal()
    },
    fetchIngredientsDebounced() {
      clearTimeout(this.fetchIngredientsTimer);
      this.fetchIngredientsTimer = setTimeout(() => {
        this.fetchIngredients();
      }, 500); // 0.5 seconds
    },
    // API call to fetch ingredients based on typed input
    fetchIngredients() {
      if (this.typedIngredient.length > 1) {
        const apiUrl = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${this.typedIngredient}&number=15&apiKey=${this.apiKey}`;
        axios.get(apiUrl)
          .then(response => {
            this.suggestedIngredients = response.data;
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    },
    // Add the ingredient to the selected list
    async selectIngredient(ingredient) {
      if (this.uid) {
        try {
          const ingredientDocRef = doc(db, "ingredients", this.uid);

          await updateDoc(ingredientDocRef, {
            ingredient: arrayUnion(ingredient.name)
          });

          this.selectedIngredients.push(ingredient.name)
          this.typedIngredient = ''
          this.suggestedIngredients = []
          console.log("Ingredient added: ", ingredient);
        } catch (e) {
          console.error("Error adding ingredient: ", e);
        }
      } else {
        console.error("No document ID found.");
      }
    },
    // Remove an ingredient from the selected list
    async removeIngredient(ingredient, index) {
      const removeDocRef = doc(db, "ingredients", this.uid);
      try {
        await updateDoc(removeDocRef, {
          ingredient: arrayRemove(ingredient)
        });
        this.selectedIngredients.splice(index, 1);
        console.log(`${ingredient} removed successfully!`);
      } catch (error) {
        console.error("Error removing ingredient:", error);
      }
    },
    fetchRecipes() {
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${this.numberOfRecipes}&addRecipeInformation=true&addRecipeInstructions=true&includeIngredients=${this.selectedIngredients.join(',')}&addRecipeNutrition=true&apiKey=${this.apiKey}`
      axios.get(apiUrl)
        .then(response => {
          this.recipes = response.data.results
          console.log(response.data)
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    async getDocumentId() {
      try {

        // Check if ingredientId exists
        if (this.uid) {
          const docRef = doc(db, "ingredients", this.uid);
          const docSnap = await getDoc(docRef);

          // Check if the ingredients document exists
          if (docSnap.exists()) {
            const data = docSnap.data();
            this.loadingData = true; // Set loading flag to true
            this.selectedIngredients = data.ingredient || []; // Update selectedIngredients
            this.loadingData = false; // Set loading flag to false after update
          } else {
            console.log("No ingredients document found for the provided documentId.");
          }
        }
      } catch (e) {
        console.error("Error getting document ID: ", e);
      }
    },
    clearInput() {
      this.typedIngredient = '';
    }
    // async fetchDocumentData() {
    //     const docRef = doc(db, "ingredients", this.documentId);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         const data = docSnap.data();
    //         this.loadingData = true; // Set loading flag to true
    //         this.selectedIngredients = data.ingredient || []; // Update selectedIngredients
    //         this.loadingData = false; // Set loading flag to false after update
    //     } else {
    //         console.log("No such document with ID:", id);
    //     }
    //   }
    // fetchRecipeScore(recipeId) {
    //   const recipeInfo = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${this.apiKey}`
    //   axios.get(recipeInfo)
    //   .then(response => {
    //     console.log(response.data)
    //     this.recipeNutri.push(response.data)
    //   })
    //   .catch(error => {
    //     console.log(error.message)
    //   })
    // }
  },
  watch: {
    selectedIngredients: {
      handler() {
        if (!this.loadingData) { // Check if not in loading phase
          this.fetchRecipes();
        }
      },
      deep: true,
      immediate: true,
    },
  },

  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log("User is logged in with UID:", this.uid);
        this.getDocumentId()
      } else {
        this.uid = null;
        console.log("User is not logged in.");
      }
    })
    const toastEl = this.$refs.toastRef;
    if (toastEl) {
      this.toast = new bootstrap.Toast(toastEl);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

.heading h1 {
  font-size: 45px;
  font-weight: bold;
  font-family: "Merienda", serif;
  text-align: center;
  color: rgb(0, 0, 0);
  letter-spacing: 6px;

  padding: 40px;
  /* background-color: rgb(255, 243, 234); */
}

.heading {
  background-color: rgb(235, 235, 235);
}

.ingredients {
  text-align: center;
}

.ingredients label {
  font-size: 20px;
}

.type-ingredient {
  display: flex;
  border: 1px solid;
  box-sizing: border-box;
  font-family: "Outfit", sans-serif;
  border: 2px solid rgb(255, 157, 101);
  border-radius: 20px;
  width: 50%;
  max-width: 50%;
  text-align: start;
  padding-left: 20px;
  margin: auto;
  transition: box-shadow 0.25s;
  background-color: white;
}

.type-ingredient:focus-within {
  box-shadow: 0 0 3px rgb(255, 102, 1);
}

.type-ingredient .search-icon {
  font-size: 150%;
  color: grey;
  justify-content: left;
  background-color: white;
  padding-top: 2px;
}

.clear-button {
  right: 10px;
  /* Adjust this value as needed */
  /* background: none; */
  border: none;
  cursor: pointer;
  font-size: 150%;
  /* Adjust size as needed */
  padding-left: 5px;
  color: rgb(165, 165, 165);
}

.clear-button:hover {
  color: #6a6a6a;
  /* Hover color */
}

.type-ingredient input {
  flex: 0.98;
  outline: 0;
  padding: 6px 20px;
  padding-left: 5px;
  margin-left: 5px;
  font-size: 20px;
  width: 88%;
  /* background: transparent; */
}

.suggested-ingredient ul {
  position: relative;
  width: 50%;
  margin: auto;
  top: 100%;
  /* Aligns right below the input */
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
  padding-left: 15px;
}

.suggested-ingredient ul li {
  text-align: left;
  padding: 8px 0 8px 0;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
}

.suggested-ingredient ul li:hover {
  padding-left: 5px;
  background-color: #d7d7d7 !important;
}

.selected-ingredient {
  margin-top: 30px;
  margin-bottom: 30px;
}

.sel-ingredients ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
  list-style: none;
  padding: 0;
  width: 50%;
  max-width: 50%;
  margin: auto;
}

.sel-ingredients ul li {
  display: inline-flex;
  margin-right: 20px;
  background: rgb(255, 157, 101);
  border: 2px solid rgb(255, 157, 101);
  border-radius: 20px;
  font-size: 17px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  padding: 8px 10px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
}

button {
  margin: 2px;
  padding-left: 2px;
}

#recipe-list h1 {
  font-family: "Trirong", serif;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 15px;
  font-size: 450;
}

.recipe {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe img {
  width: 30%;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
  min-height: 30vh;
  display: block;
  object-fit: cover;
  overflow: hidden;
}

.recipe-content {
  max-width: 600px;
}

.recipe-content h4 {
  font-size: large;
  color: rgb(255, 157, 101);
  margin-top: 8px;
  margin-bottom: 2px;
}

.recipe-content h3 {
  font-family: "Trirong", serif;
  font-weight: bold;
  font-size: 500;
}

.recipe-score p {
  font-weight: bolder;
  font-size: large;
}

.recipe h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.recipe p {
  margin: 0;
  color: #555;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 80%;
  max-height: 80vh;
  overflow-y: auto;
  text-align: center;
}
.modal-content ul {
  list-style-type: none;
  padding: 0; 
  margin: 10px 0; 
  text-align: center; 
  width: 100%; 
}
.modal-content ul li {
  display: flex;
  justify-content: center;
  margin: 5px 0; 
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.modal-content button {
  background-color: #333;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-content button:hover {
  background-color: #555;
}
</style>