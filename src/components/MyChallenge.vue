<script setup>
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db, storage } from '../firebase.js';
import router from '../router/index.js';
import { ref, onMounted } from 'vue';
import { collection, orderBy, addDoc, doc, getDoc, updateDoc, query, getDocs, serverTimestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
</script>

<script>
export default {
  data() {
    return {
      //might wanna clean this up if got time, i think some not using anymore
      userName: '',
      userEmail: '',
      userPoints: '',
      userStreak: '',
      userActiveChallenge: '',
      ingredient: '',
      documentId: null,
      recipeImg: '',
      recipeTitle: '',
      recipeScore: '',
      description: '',
      steps: [],
      ingredients: [],
      calories: '',
      carbs: '',
      fat: '',
      protein: '',
      isModalVisible: false,
      caption: '',
      file: null,
      currentScore: 0,
      toastMessage: '',
      isLoading: false,
      timeTaken: '',
      servings: '',
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp.seconds * 1000);  
      return date.toLocaleString();
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async getUserData(uid) {
      try {
        const docRef = doc(db, 'user', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          this.userName = userData.name;
          this.userEmail = userData.email;
          this.userPoints = userData.points;
          this.userStreak = userData.streak;
          this.userActiveChallenge = userData.activeChallenge;
          this.documentId = uid;
          this.displayActiveChallenge();
        } else {
          console.log('No such document!');
        }
      } catch (e) {
        console.error('Error getting user document:', e);
      }
    },
    async displayActiveChallenge() {
      if (this.userActiveChallenge) {
        const baseUrl = "https://api.spoonacular.com/recipes";
        const apiKey = "739a15dee8b84c5187535bfa56e19ccb";
      //   apiKey: "739a15dee8b84c5187535bfa56e19ccb",
      // apiKey: "f88baf2ecf9a4eab92a25613785c4ba1",
      // apiKey: "af8d927cc09d4e718de7f8b37b6faec8",
      // apiKey: "f22b8ffb2f4f476fb33831a32e903b77",
      // apikey: "32c5a4b096014b22957dc323d87d263f",

        try {
          const recipeResponse = await axios.get(`${baseUrl}/${this.userActiveChallenge}/information`, {
            params: { includeNutrition: false, apiKey }
          });
          const { data: recipeData } = recipeResponse;
          this.recipeTitle = recipeData.title;
          this.recipeImg = recipeData.image;
          this.description = recipeData.summary;
          this.servings = recipeData.servings
          this.timeTaken = recipeData.readyInMinutes
          this.recipeScore = recipeData.analyzedInstructions.length > 0
            ? recipeData.analyzedInstructions[0].steps.length * recipeData.readyInMinutes
            : recipeData.readyInMinutes;
          this.steps = recipeData.analyzedInstructions[0]?.steps || [];

          const ingredientsResponse = await axios.get(`${baseUrl}/${this.userActiveChallenge}/ingredientWidget.json`, {
            params: { apiKey }
          });
          this.ingredients = ingredientsResponse.data.ingredients;

          const nutritionResponse = await axios.get(`${baseUrl}/${this.userActiveChallenge}/nutritionWidget.json`, {
            params: { apiKey }
          });
          const nutrition = nutritionResponse.data;
          this.calories = nutrition.calories;
          this.carbs = nutrition.carbs;
          this.fat = nutrition.fat;
          this.protein = nutrition.protein;
        } catch (error) {
          console.error('Error fetching recipe data:', error.message);
        }
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      this.validateAndSetFile(file);
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0];
      this.validateAndSetFile(file);
    },
    validateAndSetFile(file) {
      if (file && file.type.startsWith("image/")) {
        this.file = file;
      } else {
        alert("Please select a valid image file.");
      }
    },
    async completeAndUploadChallenge() {
      const user = getAuth().currentUser;

      if (!this.file || !this.caption) {
        alert('Please choose a file, and add a caption before completing.');
        return;
      }

      this.isLoading = true; // Start loading
      try {
        const postsCollectionRef = collection(db, 'posts');
        const postDocRef = await addDoc(postsCollectionRef, {
          challengeName: this.recipeTitle,
          challengeScore: this.recipeScore,
          userId: user.uid,
          likes: 0,
          caption: this.caption,
          timestamp: serverTimestamp(),
          likedBy: []
        });

        const documentId = postDocRef.id;
        const fileRef = storageRef(storage, `uploads/${user.uid}/${documentId}`);
        await uploadBytes(fileRef, this.file);
        const url = await getDownloadURL(fileRef);

        if (user) {
          const userDocRef = doc(db, 'user', user.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            this.currentScore = Number(userData.points);
          }

          await updateDoc(userDocRef, {
            points: this.currentScore + Number(this.recipeScore),
            activeChallenge: '' // Clear the active challenge after completion
          });
          
           // Show toast message
          this.toastMessage = `Challenge completed successfully! You have obtained ${this.recipeScore} points.`;
          this.showBootstrapToast();
          this.closeModal()
          // Hide toast after a few seconds
          setTimeout(() => {
            location.reload();
          }, 3000);
        } else {
          alert('User not authenticated.');
        }
      } catch (error) {
        console.error('Error completing challenge or uploading file:', error);
        alert('Failed to complete challenge. Please try again.');
      } finally {
        this.isLoading = false; // End loading
      }
    },
    showBootstrapToast() {
      const toastEl = this.$refs.toastRef;
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }

  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      } else {
        const uid = user.uid;
        this.getUserData(uid);
      }
    });
  },
};
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merienda">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<div v-if="userActiveChallenge">
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
    <div class="centered-upload-trigger">
    <button @click="openModal" class="open-modal-button">
      Upload Your Image
    </button>
  </div>
  </div>

    <!-- Show this message when userActiveChallenge is empty -->
    <div v-else class="no-challenge-message">
      <p>No active challenge! <router-link to="/start" class="get-cooking-link">Get to cooking!</router-link></p>
    </div>

    <!-- Modal -->
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <p>Challenge: <span style="font-weight: bold;">{{ recipeTitle }}</span></p>
        <p>Score: <span style="font-weight: bold;"> {{recipeScore}}</span></p>
      <!-- Drag and Drop Area with Icon -->
      <div
        @dragover.prevent
        @drop.prevent="handleDrop"
        @click="triggerFileInput"
        class="drop-zone border border-secondary rounded p-4 text-center"
      >
        <input
          type="file"
          @change="onFileChange"
          ref="fileInput"
          class="file-input"
          accept="image/*"
        />
        <div v-if="file">
          <i class="fa fa-check-circle fa-3x text-success"></i>
        <p class="mt-2">File selected: {{ file.name }}</p>
      </div>
      <div v-else>
        <i class="fa fa-cloud-upload-alt fa-3x text-secondary upload-icon"></i>
        <p class="mt-2">Drag and drop an image file here, or click to select</p>
      </div>
      </div>
      <input
        type="text" v-model="caption" placeholder="Add a catchy caption for your image..." class="form-control mt-3 caption-input" />
        <button @click="completeAndUploadChallenge" :disabled="!file || !caption" class="upload-button btn btn-primary mt-3">
        Post your cooking!
      </button>
      </div>
    </div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>We are cooking, please wait...</p>
    </div>
        <!-- Toast Notification -->
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toastRef">
        <div class="toast-header">
          <strong class="me-auto">Challenge Completed!</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          {{ toastMessage }}
        </div>
      </div>
    </div>
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
  .no-challenge-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh; /* Ensures it takes up a good portion of the viewport */
  text-align: center;
  font-size: 1.5em;
  color: #333;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
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
  width: 80%;
  max-width: 700px;
  text-align: center;
}

.drop-zone {
  cursor: pointer;
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  transition: border-color 0.3s;
  margin-bottom: 15px;
  position: relative;
}

.drop-zone:hover {
  border-color: #ff9d65;
}

.file-input {
  display: none; 
}
 
.text-success {
  color: #28a745; /* Success green color */
}

.upload-icon {
  color: #ff9d65;
  transition: color 0.3s;
}

.upload-icon:hover {
  color: #ff7f3a;
}
/* Loading Overlay (Higher z-index to overlay modal) */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2000; /* Higher than modal overlay */
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ffffff;
  border-top: 5px solid #ff9d65;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
  background-color: #ff9d65;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.modal-content button:hover {
  background-color: #ff7f3a;
}
.open-modal-button {
  background-color: #ff9d65;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.open-modal-button:hover {
  background-color: #ff7f3a;
}
.modal-content button:disabled {
  background-color: #ffccaa;
  cursor: not-allowed;
  opacity: 0.6;
}
.centered-upload-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
}
.upload-button {
  background-color: #ff9d65;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-button:hover {
  background-color: #ff7f3a;
}

.upload-button:disabled {
  background-color: #ffccaa;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
