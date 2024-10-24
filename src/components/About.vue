<template>
  
  <div class="w-screen px-6 md:px-8 relative">
  <img class="w-full h-[400px] rounded-xl" src="../../images/about-image.jpg">
  
  <!-- Text overlaying the image -->
  <div class="absolute top-0 left-0">
    <h1 class="relative ml-4 mt-[90px] mb-4 text-4xl font-extrabold text-tomato 
      sm:ml-[60px] sm:mt-[100px] sm:text-5xl 
      md:ml-[80px] md:mt-[120px] md:text-6xl 
      lg:ml-[200px] lg:mt-[120px] lg:text-7xl">
      About <br>
      LetMeCook!
    </h1>
    
  </div>
</div>


    <div>
        <!-- test -->
      <h1>Trending Recipes</h1>
      <button @click="signOutUser">Sign Out</button>
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
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebase.js'; // Ensure you import auth from your Firebase config
  import { useRouter } from 'vue-router'; // Import useRouter
  import { signOut } from 'firebase/auth'; 
  

  const router = useRouter(); // Initialize the router
  
  // API key and URL for Spoonacular API
//   const apiKey = "739a15dee8b84c5187535bfa56e19ccb"; // Your actual Spoonacular API key
  const apiKey = "1abba8626fd54b82832a789925a3c6d5"; // yen qin Spoonacular API key
  const numberOfRecipes = 10; // Number of recipes to display
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${numberOfRecipes}&addRecipeInformation=true&apiKey=${apiKey}`;
  
  // Reactive state to store recipes and error message
  const recipes = ref([]);
  const error = ref(null);
  
  // Function to fetch recipes from Spoonacular API
  async function getTrendingRecipes() {
      try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          recipes.value = data.results; // Store the fetched recipes in reactive state
      } catch (err) {
          console.error("Error fetching the recipes:", err);
          error.value = "Failed to fetch recipes."; // Set error message
      }
  }
  
  // Helper function to format recipe summary
  function formatSummary(summary) {
      return summary ? summary.replace(/(<([^>]+)>)/gi, "").slice(0, 200) + "..." : "No description available.";
  }
  
  //Check if user is authenticated
  onMounted(() => {
      onAuthStateChanged(auth, (user) => {
          if (!user) {
              alert("You need to login");
              // Optionally navigate to the login or register page if needed
              router.push('/login')
          }
            else {
            getTrendingRecipes();
        }
      });
  
      //Call the function to get and display trending recipes on component mount
      

  });

//   const signOutUser = async () => {
//     try {
//         await signOut(auth); 
//         alert("You have signed out successfully!");
//         router.push('/login'); 
//     } catch (error) {
//         console.error("Error signing out:", error);
//         alert("An error occurred while signing out.");
//     }
// };

  </script>
  
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
  