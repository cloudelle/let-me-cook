<script setup>
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db, storage } from '../firebase.js';
import router from '../router';
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
        const apiKey = "af8d927cc09d4e718de7f8b37b6faec8";
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
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async completeAndUploadChallenge() {
      const user = getAuth().currentUser;

      if (!this.file || !this.caption) {
        alert('Please select a challenge, choose a file, and add a caption before completing.');
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
  <div>
    <!-- Conditionally show content based on userActiveChallenge -->
    <div v-if="userActiveChallenge">
      <h1>Active Challenges</h1>
      <br />
      <b><u>{{ recipeTitle }}</u></b>
      <p v-html="description"></p>
      <br />
      <p>Score: {{ recipeScore }}</p>
      <img :src="recipeImg" alt="Recipe Image" />
      <br />
      <div v-if="steps && steps.length">
        <h3>Recipe Steps:</h3>
        <ol>
          <li v-for="(step, index) in steps" :key="index">
            {{ index + 1 }}. {{ step.step }}
          </li>
        </ol>
      </div>

      <br />
      <div v-if="ingredients && ingredients.length">
        <h3>Ingredients:</h3>
        <ol>
          <li v-for="(item, index) in ingredients" :key="index">
            {{ index + 1 }}. {{ item.name }}
          </li>
        </ol>
      </div>

      <br />
      <br />
      <b><u>Nutrition Info</u></b><br />
      Calories: <p>{{ calories }}</p>
      Carbs: <p>{{ carbs }}</p>
      Fat: <p>{{ fat }}</p>
      Protein: <p>{{ protein }}</p>

      <!-- Modal open button with disabled binding -->
      <button
        class="open-modal-button"
        @click="openModal">
        Open Modal
      </button>
    </div>

    <!-- Show this message when userActiveChallenge is empty -->
    <div v-else class="no-challenge-message">
      <p>No active challenge! <router-link to="/start" class="get-cooking-link">Get to cooking!</router-link></p>
    </div>
    

    <!-- Modal -->
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <p>Challenge: {{ recipeTitle }}</p>
        <input type="file" @change="onFileChange" />
        <input type="text" v-model="caption" placeholder="Add a caption" />
        <button @click="completeAndUploadChallenge" :disabled="!file || !caption">
        Challenge Complete
      </button>
      </div>
    </div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>Loading, please wait...</p>
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
  </div>

  
</template>

<style scoped>
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
  z-index: 1000; /* Lower z-index than loading overlay */
  overflow: hidden;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%; /* Width set to 80% of viewport */
  max-width: 700px; /* Max width to ensure responsiveness */
  height: 80vh; /* Height set to 80% of viewport */
  overflow-y: auto; /* Enable vertical scrolling */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
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

</style>
