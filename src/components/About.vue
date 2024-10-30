
<script setup>
import { ref, onMounted } from 'vue';
import { getTrendingRecipes,recipes,error } from '../firebase.js'; // Ensure you import auth from your Firebase config
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Initialize the router

// API key and URL for Spoonacular API
const apiKey = "739a15dee8b84c5187535bfa56e19ccb"; // Your actual Spoonacular API key
//const apiKey = "f88baf2ecf9a4eab92a25613785c4ba1";
const numberOfRecipes = 1; // Number of recipes to display
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${numberOfRecipes}&addRecipeInformation=true&apiKey=${apiKey}`;

// Helper function to format recipe summary
function formatSummary(summary) {
    return summary ? summary.replace(/(<([^>]+)>)/gi, "").slice(0, 200) + "..." : "No description available.";
}

//Generate the recipes by default
onMounted(() => {
  getTrendingRecipes(apiUrl);
});


</script>

<template>
<div>
  <h1>Trending Recipes</h1>
  <div id="recipe-list">
    <!-- Loop through recipes and display them -->
    <div v-for="recipe in recipes" :key="recipe.id" class="recipe">
      <img :src="recipe.image" :alt="recipe.title" />
      <div class="recipe-content">
        <h3>{{ recipe.title }}</h3>
        <p>{{ formatSummary(recipe.summary) }}</p>
      </div>
    </div>
  </div>
  <p v-if="error">{{ error }}</p> <!-- Display error message if any -->
</div>
</template>


<style scoped>
body {
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
}
</style>
