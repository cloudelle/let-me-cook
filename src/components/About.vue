
<script setup>
import { ref, onMounted } from 'vue';
import { getTrendingRecipes,recipes,error } from '../firebase.js'; // Ensure you import auth from your Firebase config
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Initialize the router

// API key and URL for Spoonacular API
//const apiKey = "739a15dee8b84c5187535bfa56e19ccb"; // Your actual Spoonacular API key f88baf2ecf9a4eab92a25613785c4ba1
const apiKey = "739a15dee8b84c5187535bfa56e19ccb";
const numberOfRecipes = 6; // Number of recipes to display
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${numberOfRecipes}&addRecipeInformation=true&apiKey=${apiKey}`;

// Helper function to format recipe summary
function formatSummary(summary) {
    return summary ? summary.replace(/(<([^>]+)>)/gi, "") + "..." : "No description available.";
}

//Generate the recipes by default
onMounted(() => {
  getTrendingRecipes(apiUrl);
});


const faqs = ref([
  {
    question: "What types of recipes can I expect to find on Let Me Cook?",
    answer:
      "Our recipe library spans a variety of cuisines and meal types, including appetizers, main courses, desserts, and healthy options. The recommendations are dynamically tailored to your ingredients, so you might discover anything from simple comfort foods to more elaborate dishes that make use of pantry staples and fresh produce alike.",
    open: false,
  },
  {
    question: "How do I earn points?",
    answer:
      "By participating in challenges! Input your ingredients, choose a challenge, cook up the recipe given and you'll earn it!",
    open: false,
  },
  {
    question: "Can I share my own recipes or meals?",
    answer:
      "Yes! You can post pictures and details of your meals on the socials page to share with the community. Alternatively, you can also head to the socials page to get inspiration from other food enthusiasts and interact with them 😁",
    open: false,
  },
]);

function toggleFaq(index) {
  faqs.value[index].isActive = !faqs.value[index].isActive;
}

</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merienda">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


<div class="page-background ">
  <section class="getStarted">
    <div class="image-container-wrapper row">
        <div class="image-container">

          <div class="text-overlay">
              <h1 class="title">Get Started!</h1>
              <p class="description">
                  Welcome to <span class="logo-name" style="font-weight: bold; font-style: italic;">Let Me Cook</span>, your go-to platform for personalised recipe discovery! Get meal ideas based on ingredients you already have, take on cooking challenges to earn points, and climb the leaderboard. Share your creations, connect with other food lovers, and make cooking a fun, interactive experience. Let's get cooking!
              </p>
          </div>
        </div>
        
        <!-- Text Below Image for Small Screens - Will only show on smaller screens -->
        <div class="text-below">
            <h1 class="title">Get Started!</h1>
            <p class="description">
                Welcome to <span class="logo-name" style="font-weight: bold; font-style: italic;">Let Me Cook</span>, your go-to platform for personalised recipe discovery! Get meal ideas based on ingredients you already have, take on cooking challenges to earn points, and climb the leaderboard. Share your creations, connect with other food lovers, and make cooking a fun, interactive experience. Let's get cooking!
            </p>
        </div>
    </div>
  </section>

<!-- Trending Recipes -->
<div class="trending-background">
  <section class="trending">
    <div class="text-center">
      <h1>Trending Recipes</h1>
    </div>
    <div class="container-fluid">
      <div class="row g-3">
        <!-- Use v-for to generate a card for each recipe -->
        <div v-for="recipe in recipes" :key="recipe.id" class="col-lg-4 col-md-6 col-sm-12 gx-0">
          <div class="card h-100 recipe" style="height: 350px"> 
            <img :src="recipe.image" :alt="recipe.title" class="card-img-top img-fluid" style="height: 150px; object-fit: cover" />
            <div class="card-body">
              <h5 class="card-title">{{ recipe.title }}</h5>
              <p class="card-text">{{ formatSummary(recipe.summary) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<!-- Challenges -->
 <section class="features">
    <div class="container-fluid p-0">
      <div class="row mt-5">
        <div class="col-md-6 g-0 d-flex">
          <div class="challenge-img px-2">
            <img src="../../images/challenge.webp" class="img-fluid">
          </div>
        </div>
        <div class="col-md-6 challenge-box mx-0 px-0">
          <div class="challenge-text p-5">
            <h1>Take on the Challenge!</h1>
            <p>Turn your ingredients into a cooking adventure! At "Challenges", each recipe recommendation is a unique challenge with points based on difficulty. Cook, earn points, and climb the leaderboard as you compete with fellow foodies. Ready to cook and conquer?</p>
            <router-link to="/start">
              <button class="bg-green-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-green-600">Go to Challenges</button>
            </router-link>
          </div>
        </div>
      </div>

<!-- Socials -->
      <div class="row mt-5">
        <div class="col-md-6 g-0 socials-box">
            <div class="socials-text p-5">
              <h1>Cook, Share & Connect!</h1>
              <p>Show off your culinary creations! At "Socials", you can share recipes, browse inspiring meals, and connect with fellow food lovers. Like posts, spark new ideas, and fuel your cooking adventures with a community that celebrates creativity in the kitchen. Ready to share and get inspired?</p>
              <router-link to="/social"> 
                <button class="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-600">Go to Socials</button>
              </router-link>
            </div>
        </div>
        <div class="col-md-6 d-flex order-first order-md-last">
          <div class="socials-img">
            <img src="../../images/social.webp" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
</section>

<!-- FAQs -->
<div class="faq-background">
    <section class="faq">
      <h1 class="mb-4 faq-header">FAQs</h1>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-body" @click="toggleFaq(index)">
        <div class="question">
          <h3>{{ faq.question }}</h3>
          <svg width="20" height="10" viewBox="0 0 42 25">
            <path d="M3 3L21 21L39 3" stroke="black" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="answer" v-show="faq.isActive">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </section>
  </div>

</div>

</template>

<!-- <script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-body').forEach((faq) => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        const answer = faq.querySelector('.answer');
        if (faq.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = null;
        }
      });
    });
  });
</script> -->

<style scoped>

.page-background {
  background-color: white;
  overflow: hidden;
}
.getStarted .title {
  color: black;
  margin-top: 10px
}

.logo-name {
  color: #FF6347;
}

.getStarted h1 {
  font-size: 60px;
  text-shadow: 3px 3px 3px #ababab;
  color: rgb(199, 82, 39);
  font-family: "Merienda", serif;
}

/* General Styling */


.getStarted .image-container {
  /* linear-gradient(rgba(207, 206, 162, 0.5),rgba(255, 206, 161, 0.5)), */
  position: relative;
  min-height: 100vh; 
  width: 100%;
  background-image: url(../../images/getStarted.png);
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; /* Prevents the image from repeating */
  display: flex;
  align-items: center;
  /* padding: 20px; */
  padding: 0;
  margin: 0;
}

/* Overlay Text Styling for Medium and Large Screens */
.text-overlay {
    position: absolute;
    top: 50%; /* Center vertically */
    left: 20px; /* Align text slightly to the left */
    transform: translateY(-50%);
    color: black;
    padding: 20px;
    max-width: 45%;
    font-size: larger;
    display: none; /* Hidden by default, visible on larger screens */
}

/* Text Below Image for Small Screens */
.text-below {
    text-align: center;
    color: black;
    padding: 20px;
    font-size: 20px;
    display: block; /* Displayed on small screens */
}

/* Large and Medium Screens (Overlay Text on Image) */
@media (min-width: 768px) {
    .text-overlay {
        display: block; /* Show overlay text on medium and large screens */
    }
    
    .text-below {
        display: none; /* Hide text-below on medium and large screens */
    }
}

/* Small Screens (Text Below Image) */
@media (max-width: 767.98px) {
    .text-overlay {
        display: none; /* Hide overlay text on small screens */
    }

    .text-below {
        display: block; /* Show text-below for small screens */
    }

    .getStarted .image-container {
      min-height: 60vh;
      background-position: right;
    }
}

@media(min-width: 1101px) {
  .text-box p{
    font-size: 1.5vw;
  }
}

@media(max-width: 1100px) {
  .text-box p{
    font-size: 18px;
  }
}

@media(min-width: 1101px) {
  .getStarted h1{
    font-size: 60px;
  }
}

@media(max-width: 1100px) {
  .getStarted h1{
    font-size: 50px;
  }
}

@keyframes fire {
    0% {
      text-shadow: 0 0 5px #f97147, 0 0 10px #f97147, 0 0 15px #f97147, 0 0 20px #ff9800, 0 0 25px #ff9800;
    }
    50% {
      text-shadow: 0 0 10px #f97147, 0 0 15px #f97147, 0 0 20px #ff9800, 0 0 30px #ff9800, 0 0 35px #ffeb3b;
    }
    100% {
      text-shadow: 0 0 5px #f97147, 0 0 10px #f97147, 0 0 15px #f97147, 0 0 20px #ff9800, 0 0 25px #ff9800;
    }
  }

.fire-animation {
  animation: fire 1.5s infinite alternate;
}

.trending-background {
  background-color: rgb(235, 235, 235);
}

.trending {
  padding-bottom: 80px;
  width: 80%;
  margin: auto;
  margin-top: 50px;
}

.card-title {
  font-family: "Merienda", serif;
  font-weight: bold;
}

h1 {
  font-size: 45px;
  font-weight: 600;
  font-family: "Merienda", serif;
}

.trending .card-text {
    flex-grow: 1;
    overflow-y: auto; 
    max-height: 100px; 
  } 

.trending .text-center {
  color: black;
  /* background-color: rgb(88, 17, 17);
  background-color: #FF6347; */
  /* height: 62px; */
  /* border-radius: 4em 0; */
  align-items: center;
  text-align: center;
  width: 70%;
  margin: auto;
  padding-top: 30px;
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

.features {
  margin-top: 5px;
  padding-bottom: 30px;
}

.challenge-img {
  opacity: 0.8;
  width: 90%;
  height: auto;
  margin: auto;
  display: block;
}

.challenge-box {
  display: flex;
}

.challenge-box h1 {
  font-family: "Trirong", serif;
  font-size: 40px;
}

.challenge-text {
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto;
  font-size: larger;
}

@media (max-width: 890px) {
  .challenge-box .challenge-text {
    font-size: 15px;
}
}

.socials-box {
  display: flex;
}

.socials-box h1 {
  font-family: "Trirong", serif;
  font-size: 40px;
}

.socials-text {
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto;
  font-size: larger;
}

@media (max-width: 890px) {
  .socials-box .socials-text {
    font-size: 15px;
}
}

.socials-img {
  opacity: 0.8;
  width: 90%;
  height: auto;
  margin: auto;
  display: block;
}

.faq-background {
  background-color: rgb(235, 235, 235);
  padding-bottom: 50px;
}

.faq {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
}

.faq-body {
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid grey; /* Uniform underline */
  cursor: pointer;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question h3 {
  font-size: 1.6rem;
}

.answer {
  padding-top: 1rem;
  line-height: 1.6;
  font-size: 20px;
}
.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.answer p {
  padding-top: 1rem;
  line-height: 1.6;
  font-size: 20px;
}

.faq.action .answer {
  max-height: 300;  
}

.footer-background {
  background-color: rgb(255, 157, 101); 
  /* background-color: #FF6347; */
  height: 200;
}

.footer {
  color: white;
  width: 90%;
  text-align: center;
  margin: auto;
  padding: 10px 0;
  
}

.footer h5 {
  margin-bottom: 15px;
  margin-top: 8px;
  font-weight: 600;
  font-size: 22px;
  font-family: "Trirong", serif;
}

.footer p {
  font-size: medium
}

.icons i {
  padding: 2px;
}

.copyright {
  font-size: smaller;
  color: rgb(245, 245, 245);
}

</style>
