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
  <div>
    <!-- Input for typing ingredients -->
    <label for="ingredient-input">Type Ingredient:</label>
    <input v-model="typedIngredient" @input="fetchIngredientsDebounced" id="ingredient-input" />

    <!-- Dropdown for suggested ingredients -->
    <ul v-if="suggestedIngredients.length">
      <li v-for="(ingredient, index) in suggestedIngredients" :key="index" @click="selectIngredient(ingredient)">
        {{ ingredient.name }}
      </li>
    </ul>

    <!-- Selected Ingredients List -->
    <div v-if="selectedIngredients.length">
      <h3>Selected Ingredients:</h3>
      <ul>
        <li v-for="(ingredient, index) in selectedIngredients" :key="index">
          {{ ingredient }}
          <button @click="removeIngredient(ingredient,index)">X</button>
        </li>
      </ul>
    </div>
  </div>

  <div id="recipe-list">
    <h1>CHALLENGES</h1>
    <div v-for="recipe in recipes" :key="recipe.id" class="recipe" @click="openModal(recipe)">
      <img :src="recipe.image" :alt="recipe.title" />
      <div class="recipe-content">
        <h3>{{ recipe.title }}</h3>
        <p></p>
        <div>
          <h4>SCORE</h4>
          <!-- change scoring system, this is just template for now -->
          <p>{{ Math.round(recipe.spoonacularScore) }}</p>
        </div>

        <div>
          <h4>Nutritional Information</h4>
          <!-- <p>{{ recipe.nutrition.nutrients }}</p> -->
          <p>Calories: {{ recipe.nutrition.nutrients[0].amount }}</p>
          <p>Fat: {{ recipe.nutrition.nutrients[1].amount }}</p>
          <p>Carbohydrates: {{ recipe.nutrition.nutrients[3].amount }}</p>
          <p>Protein: {{ recipe.nutrition.nutrients[10].amount }}</p>
        </div>

      </div>

    </div>


  </div>
  <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h3>{{ selectedRecipe.title }}</h3>
      <img :src="selectedRecipe.image" alt="Recipe image" />
      <p>{{ selectedRecipe.description }}</p>
      <p>Calories: {{ selectedRecipe.nutrition.nutrients[0].amount }}</p>
      <p>Fat: {{ selectedRecipe.nutrition.nutrients[1].amount }}</p>
      <p>Carbohydrates: {{ selectedRecipe.nutrition.nutrients[3].amount }}</p>
      <p>Protein: {{ selectedRecipe.nutrition.nutrients[10].amount }}</p>
      <button @click="closeModal">Close</button>
      <button @click="addChallenge(selectedRecipe.id)">START CHALLENGE!</button>
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
      apiKey: "af8d927cc09d4e718de7f8b37b6faec8",
      //apiKey: "f88baf2ecf9a4eab92a25613785c4ba1",
      numberOfRecipes: 15, // Number of recipes to display
      recipes: [],
      documentId: null,
      loadingData: true,
      isModalVisible: false,
      selectedRecipe: {},
      uid : null
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
    async addChallenge(challengeId) {
      console.log(this.uid)
      console.log(challengeId)
      try {
        const challengeDocRef = doc(db,"user",this.uid)
        await updateDoc(challengeDocRef, {
          activeChallenge: challengeId
        })
        console.log("UPDATED")
      }
      catch(e) {
        console.log(e)
      }
      this.closeModal()
    },
    fetchIngredientsDebounced() {
      clearTimeout(this.fetchIngredientsTimer);
      this.fetchIngredientsTimer = setTimeout(() => {
        this.fetchIngredients();
      }, 1500); // 1.5 seconds
    },
    // API call to fetch ingredients based on typed input
    fetchIngredients() {
      if (this.typedIngredient.length > 1) {
        const apiUrl = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${this.typedIngredient}&number=5&apiKey=${this.apiKey}`;
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
      if (this.documentId) {
        try {
          const ingredientDocRef = doc(db, "ingredients", this.documentId);

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
    async removeIngredient(ingredient,index) {
      const removeDocRef = doc(db, "ingredients", this.documentId);
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
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${this.numberOfRecipes}&addRecipeInformation=true&includeIngredients=${this.selectedIngredients.join(',')}&addRecipeNutrition=true&apiKey=${this.apiKey}`
      axios.get(apiUrl)
        .then(response => {
          console.log(response.data.results)
          this.recipes = response.data.results
          //why isnt this updating wtf
          // this.getDocumentId()
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    async getDocumentId() {
  try {
    // Get the document reference
    const getIngredient = doc(db, "user", this.uid);
    const userDocSnap = await getDoc(getIngredient);

    // Check if the document exists before accessing its data
    if (userDocSnap.exists()) {
      // Get the ingredient ID from the user document
      this.documentId = userDocSnap.data().ingredientId || null;
      
      // Check if ingredientId exists
      if (this.documentId) {
        const docRef = doc(db, "ingredients", this.documentId);
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
      } else {
        console.log("No ingredientId found in user document.");
      }
    } else {
      console.log("No user document found for the provided UID.");
    }
  } catch (e) {
    console.error("Error getting document ID: ", e);
  }
}
,
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
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

button {
  margin: 2px;
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
  width: 200px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.recipe-content {
  max-width: 600px;
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
  
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 80%;
  text-align: center;
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