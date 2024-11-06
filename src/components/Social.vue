<template>
  <div>
    <h2>Post Your Completed Challenge</h2>

    <!-- Display recipe title instead of challenge ID -->
    <p v-if="recipeTitle">Challenge: {{ recipeTitle }}</p>

    <!-- File upload and caption input -->
    <div v-if="selectedChallenge">
      <input type="file" @change="onFileChange" />
      <input type="text" v-model="caption" placeholder="Add a caption" />
      
      <!-- Combined "Challenge Complete" button -->
      <button @click="completeAndUploadChallenge" :disabled="!file || !caption">
        Challenge Complete
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

export default {
  data() {
    return {
      file: null,
      caption: '',
      recipeTitle: '', // Holds the recipe title for display
      selectedChallenge: '', // Holds the selected challenge ID
      recipeImg: '',
      recipeScore: '',
      description: '',
      steps: [],
      ingredients: [],
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async completeAndUploadChallenge() {
      // Ensure file, caption, and selected challenge exist
      if (!this.file || !this.caption || !this.selectedChallenge) {
        alert('Please select a challenge, choose a file, and add a caption before completing.');
        return;
      }

      // Create a storage reference and upload the file
      const fileRef = storageRef(storage, `uploads/${this.selectedChallenge}/${this.file.name}`);

      try {
        // Upload the file
        await uploadBytes(fileRef, this.file);

        // Get the file URL
        const url = await getDownloadURL(fileRef);
        console.log('File uploaded successfully:', url);
        alert(`File uploaded successfully: ${url}`);

        // Mark challenge as complete in Firestore by clearing the activeChallenge field
        const user = getAuth().currentUser;
        if (user) {
          const userDocRef = doc(db, 'user', user.uid);
          await updateDoc(userDocRef, {
            activeChallenge: '' // Clear the active challenge after completion
          });
          alert('Challenge completed successfully!');
        } else {
          alert('User not authenticated.');
        }
      } catch (error) {
        console.error('Error completing challenge or uploading file:', error);
        alert('Failed to complete challenge. Please try again.');
      }
    },
    // async fetchActiveChallenge(uid) {
    //   try {
    //     const userDocRef = doc(db, 'user', uid);
    //     const userDocSnap = await getDoc(userDocRef);

    //     if (userDocSnap.exists()) {
    //       const userData = userDocSnap.data();
    //       this.selectedChallenge = userData.activeChallenge;

    //       if (this.selectedChallenge) {
    //         // Fetch recipe details for the active challenge
    //         const recipeUrl = `https://api.spoonacular.com/recipes/${this.selectedChallenge}/information?includeNutrition=false&apiKey=739a15dee8b84c5187535bfa56e19ccb`;
    //         const response = await axios.get(recipeUrl);
    //         this.recipeTitle = response.data.title;
    //         this.recipeImg = response.data.image;
    //         this.recipeScore = response.data.readyInMinutes * response.data.analyzedInstructions[0].steps.length;
    //         this.description = response.data.summary;
    //         this.steps = response.data.analyzedInstructions[0].steps;

    //         const ingredientUrl = `https://api.spoonacular.com/recipes/${this.selectedChallenge}/ingredientWidget.json?apiKey=739a15dee8b84c5187535bfa56e19ccb`;
    //         const ingredientResponse = await axios.get(ingredientUrl);
    //         this.ingredients = ingredientResponse.data.ingredients;
    //       } else {
    //         alert("No active challenge found.");
    //       }
    //     } else {
    //       console.log('User document not found.');
    //     }
    //   } catch (e) {
    //     console.error('Error fetching challenge:', e);
    //   }
    // },
    async fetchActiveChallenge(uid) {
  try {
    const userDocRef = doc(db, 'user', uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      this.selectedChallenge = userData.activeChallenge;

      if (this.selectedChallenge) {
        // Use mock data for development if API calls are unavailable
        this.recipeTitle = "Sample Recipe Title";
        this.recipeImg = "https://via.placeholder.com/150"; // Placeholder image
        this.recipeScore = 20;
        this.description = "This is a sample description for the recipe.";
        this.steps = [
          { step: "Step 1: Preheat the oven." },
          { step: "Step 2: Mix ingredients." },
          { step: "Step 3: Bake for 20 minutes." },
        ];
        this.ingredients = [
          { name: "Sample Ingredient 1" },
          { name: "Sample Ingredient 2" },
        ];
      } else {
        alert("No active challenge found.");
      }
    } else {
      console.log('User document not found.');
    }
  } catch (e) {
    console.error('Error fetching challenge:', e);
  }
}

  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchActiveChallenge(user.uid); // Fetch active challenge details
      } else {
        console.log('User not authenticated');
        this.$router.push('/login'); // Redirect to login if not authenticated
      }
    });
  },
};
</script>
