<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useRouter } from "vue-router";
import { app, db } from '../firebase';
import { collection, getDoc, getDocs, updateDoc, arrayUnion, doc } from 'firebase/firestore';
</script>


<template>
    <div class="h-[calc(100vh-6.5rem)] overflow-scroll">
      <!-- Dropdown to select ingredients -->
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
          <button @click="removeIngredient(index)">X</button>
        </li>
      </ul>
    </div>
  </div>

    <div id="recipe-list">
      <h1>CHALLENGES</h1>
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe">
          <img :src="recipe.image" :alt="recipe.title" />
          <div class="recipe-content">
            <h3>{{ recipe.title }}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis eveniet aliquid expedita doloremque neque, rerum aut est a dolorum necessitatibus quo, obcaecati ducimus ut distinctio adipisci dignissimos? Natus, corrupti.</p>
            <div>
              <h4>SCORE</h4>
              <!-- change scoring system, this is just template for now -->
              <p>{{ Math.round(recipe.spoonacularScore) }}</p>
            </div>

            <div>
              <h4>Nutritional Information</h4>
              <!-- <p>{{ recipe.nutrition.nutrients }}</p> -->
              <p>Calories: {{recipe.nutrition.nutrients[0].amount}}</p>
              <p>Fat: {{recipe.nutrition.nutrients[1].amount}}</p>
              <p>Carbohydrates: {{recipe.nutrition.nutrients[3].amount}}</p>
              <p>Protein: {{ recipe.nutrition.nutrients[10].amount }}</p>
            </div>

          </div>

      </div>


    </div>
  </div>
  </template>
  
  <script>
  // src="https://unpkg.com/axios/dist/axios.min.js"
  export default {
    data() {
      return {
        typedIngredient: '', // Text from user input
        selectedIngredients: [], // List of selected ingredients
        suggestedIngredients: [], // API suggested ingredients
        fetchIngredientsTimer: null, // Timer for debouncing
        //apiKey: "739a15dee8b84c5187535bfa56e19ccb",
        //apiKey: "af8d927cc09d4e718de7f8b37b6faec8",
        apiKey: "f88baf2ecf9a4eab92a25613785c4ba1",
        numberOfRecipes: 3, // Number of recipes to display
        recipes: [],
        documentId: null,
        loadingData: true
        // apiUrl: `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${numberOfRecipes}&addRecipeInformation=true&apiKey=${apiKey}`
 
      };
    },
    computed: {
    },
    methods: {
     // Debounced function to fetch ingredients after typing stops
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
    selectIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient.name)) {
        this.selectedIngredients.push(ingredient.name);
      }
      this.typedIngredient = '';
      this.suggestedIngredients = [];
    },
    // Remove an ingredient from the selected list
    removeIngredient(index) {
      this.selectedIngredients.splice(index, 1);
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
        // Get all documents in the "ingredients" collection
        const querySnapshot = await getDocs(collection(db, "ingredients"));
        console.log(querySnapshot.docs[0])
        this.documentId = querySnapshot.docs[0].id;
        console.log("Document ID: ", this.documentId);
        const docRef = doc(db, "ingredients", this.documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            this.loadingData = true; // Set loading flag to true
            this.selectedIngredients = data.ingredient || []; // Update selectedIngredients
            this.loadingData = false; // Set loading flag to false after update
        }

        // Loop through each document and extract the ID
          // Assuming you want the first document, you can store its ID
          // this.fetchDocumentData()

      } catch (e) {
        console.error("Error getting document ID: ", e);
      }
    },
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
      this.getDocumentId()
    }
  };
  </script>

  <style scoped>  body {
    font-family: Arial, sans-serif;
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
}</style>