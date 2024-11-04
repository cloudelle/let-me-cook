<template>
  <div>
    <h2>Post Your Completed Challenge</h2>
    
    <!-- Dropdown to select a challenge -->
    <h3>Select a Challenge:</h3>
    <select v-model="selectedChallenge" @change="validateChallenge">
      <option value="">Select a challenge</option>
      <option v-for="challenge in availableChallenges" :key="challenge.id" :value="challenge.id">
        {{ challenge.name }}
      </option>
    </select>

    <p v-if="!selectedChallenge">Please select a valid challenge to proceed.</p>

    <!-- File upload and caption input -->
    <div v-if="selectedChallenge">
      <input type="file" @change="onFileChange" />
      <input type="text" v-model="caption" placeholder="Add a caption" />
      <button @click="uploadFile" :disabled="!file || !caption">Upload</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { storage } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';

export default {
  data() {
    return {
      file: null,
      caption: '',
      selectedChallenge: '', // Holds the selected challenge ID
      availableChallenges: [], // List of available challenges for the user
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async uploadFile() {
      if (!this.file || !this.caption || !this.selectedChallenge) {
        alert('Please select a challenge, choose a file, and add a caption before uploading.');
        return;
      }

      // Create a storage reference
      const fileRef = storageRef(storage, `uploads/${this.selectedChallenge}/${this.file.name}`);

      try {
        // Upload the file
        await uploadBytes(fileRef, this.file);

        // Get the file URL
        const url = await getDownloadURL(fileRef);
        console.log('File uploaded successfully:', url);
        alert(`File uploaded successfully: ${url}`);
        
        // Optionally, you can save the URL and caption to a database here
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed. Please try again.');
      }
    },
    async getUserChallenges(uid) {
      try {
        const userDocRef = doc(db, 'user', uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          if (userData.activeChallenge) {
            // Add logic to fetch challenges if they exist
            this.availableChallenges = [
              { id: userData.activeChallenge, name: `Challenge ${userData.activeChallenge}` }
            ];
          } else {
            console.log('No active challenges found.');
          }
        } else {
          console.log('User document not found.');
        }
      } catch (e) {
        console.error('Error fetching user challenges:', e);
      }
    },
    validateChallenge() {
      if (!this.selectedChallenge) {
        alert('Please select a valid challenge to proceed.');
      }
    }
  },
  onMounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.getUserChallenges(uid);
      } else {
        console.log('User not authenticated');
      }
    });
  }
};
</script>
