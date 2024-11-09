<template>
  <!-- <div> -->
    <!-- jewels new code starts here -->
    <!-- Display recipe title instead of challenge ID -->
    <!-- <p v-if="recipeTitle">Challenge: {{ recipeTitle }}</p>

      File upload and caption input -->
    <!-- <div v-if="selectedChallenge">
      <input type="file" @change="onFileChange" />
      <input type="text" v-model="caption" placeholder="Add a caption" /> -->

      <!-- Combined "Challenge Complete" button -->
      <!-- <button @click="completeAndUploadChallenge" :disabled="!file || !caption">
        Challenge Complete
      </button>
    </div>
  </div> -->

  <div class="posts-container">
    <h1>Posts</h1>

    <!-- Loop through each post and display its details inside a card -->
    <div v-for="displayPost in displayPosts" :key="displayPost.id" >
      <div v-if="displayPost.userId != this.userid" class="post-card">
        <!-- Display Name and Formatted Timestamp at the Top -->
        <div class="post-header">
          <h3>{{ displayPost.name }}</h3>
          <span>{{ formatTimestamp(displayPost.timestamp) }}</span>
        </div>

        <!-- Display Image in the Middle -->
        <div class="post-image">
          <img :src="displayPost.imageUrl" alt="Post Image" height="400px" width="400px" />
        </div>

        <!-- Display Challenge Name, Caption, Likes, and Score Below -->
        <div class="post-details">
          <h4>{{ displayPost.challengeName }}</h4>
          <p> <strong>Caption:</strong>{{ displayPost.caption }}</p>
          <p><strong>Likes:</strong> {{ displayPost.likes }}</p>
          <p><strong>Challenge Score:</strong> {{ displayPost.challengeScore }}</p>
        </div>
        <button v-if="displayPost.userId != this.userid" @click="likePost(displayPost)">
          {{ displayPost.isLikedByUser ? 'Unlike' : 'Like' }}
        </button>
      </div>
    </div>
  </div>
</template>
<!-- jewels new code ends here -->
<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, orderBy, addDoc, doc, getDoc, updateDoc, query, getDocs, serverTimestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import axios from 'axios';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

// jewels new codes start here
export default {
  data() {
    return {
      file: null,
      caption: '',
      recipeTitle: '',
      selectedChallenge: '',
      recipeImg: '',
      recipeScore: '',
      description: '',
      steps: [],
      ingredients: [],
      currentScore: 0,
      userid: '',
      apiKey: '3b4bc382f3b948ed811574383e4234c6',
      posts: [],
      displayPosts: []
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp.seconds * 1000);  
      return date.toLocaleString(); 
    },

    async likePost(displayPost) {
      const postRef = doc(db, "posts", displayPost.id);
      const userRef = doc(db, "user", displayPost.userId);
      const userDocSnap = await getDoc(userRef);

      if (displayPost.isLikedByUser) {
        // User already liked the post
        await updateDoc(postRef, {
          likes: displayPost.likes - 1,
          likedBy: arrayRemove(this.userid)
        });

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          var influencersPoints = userData.points;
        } else {
          console.log('No such document!');
        }

        await updateDoc(userRef, {
          points: influencersPoints - 10
        });

        displayPost.likes -= 1;
        displayPost.isLikedByUser = false;
      } else {

        const userRef = doc(db, "user", displayPost.userId);
        const userDocSnap = await getDoc(userRef);
        // User hasn't liked the post
        await updateDoc(postRef, {
          likes: displayPost.likes + 1,
          likedBy: arrayUnion(this.userid)
        });

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          var influencersPoints = userData.points;
        } else {
          console.log('No such document!');
        }

        await updateDoc(userRef, {
          points: influencersPoints + 10
        });

        displayPost.likes += 1;
        displayPost.isLikedByUser = true;
      }
    },
    async fetchPosts() {
      const postsCollectionRef = collection(db, 'posts');
      const recentPostsQuery = query(postsCollectionRef, orderBy('timestamp', 'desc'));

      try {
        // Fetch the posts
        const querySnapshot = await getDocs(recentPostsQuery);

        // Map over the results to get post data
        const posts = await Promise.all(querySnapshot.docs.map(async (doc) => {
          const postData = doc.data();
          const postId = doc.id;
          const userId = postData.userId;
          const imageRef = storageRef(storage, `uploads/${userId}/${postId}`);
          const imageUrl = await getDownloadURL(imageRef);

          return {
            id: postId,    
            ...postData,      
            imageUrl,
            isLikedByUser: postData.likedBy && postData.likedBy.includes(this.userid) // Check if user liked the post               // Add the image URL to the post data
          };
        }));

        this.posts = posts
        this.fetchPostsWithUsernames()

      } catch (error) {
        console.error("Error fetching posts or images:", error);
      }
    },

    async fetchPostsWithUsernames() {
      const posts = this.posts

      const postsWithUsernames = await Promise.all(
        posts.map(async (post) => {
          // Fetch the user document for the current post's userId
          const userDocRef = doc(db, 'user', post.userId);
          const userDocSnap = await getDoc(userDocRef);

          // Check if the user document exists and retrieve the username
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            return {
              ...post,      
              name: userData.name 
            };
          } else {
            console.warn(`User not found for userId: ${post.userId}`);
            return post; // Return the post as-is if user data is missing
          }
        })
      );

      console.log('Posts with usernames:', postsWithUsernames);
      this.displayPosts = postsWithUsernames;
    },
// jewels new codes end here

    // onFileChange(event) {
    //   this.file = event.target.files[0];
    // },
    // async completeAndUploadChallenge() {
    //   const user = getAuth().currentUser;
    //   // Ensure file, caption, and selected challenge exist
    //   if (!this.file || !this.caption || !this.selectedChallenge) {
    //     alert('Please select a challenge, choose a file, and add a caption before completing.');
    //     return;
    //   }

    //   try {

    //     // Generate a document ID for the post
    //     const postsCollectionRef = collection(db, 'posts');

    //     const postDocRef = await addDoc(postsCollectionRef, {
    //       challengeName: this.recipeTitle,
    //       challengeScore: this.recipeScore,
    //       userId: user.uid,
    //       likes: 0,
    //       caption: this.caption,
    //       timestamp: serverTimestamp(),
    //       likedBy: []
    //     });
    //     const documentId = postDocRef.id;
    //     // Create a storage reference and upload the file
    //     const fileRef = storageRef(storage, `uploads/${user.uid}/${documentId}`);

    //     // Upload the file
    //     await uploadBytes(fileRef, this.file);

    //     // Get the file URL
    //     const url = await getDownloadURL(fileRef);
    //     console.log('File uploaded successfully:', url);
    //     alert(`File uploaded successfully: ${url}`);

    //     // Mark challenge as complete in Firestore by clearing the activeChallenge field
    //     if (user) {
    //       const userDocRef = doc(db, 'user', user.uid);
    //       const docSnap = await getDoc(userDocRef);

    //       if (docSnap.exists()) {
    //         const userData = docSnap.data();
    //         this.currentScore = userData.points;
    //       } else {
    //         console.log('No such document!');
    //       }

    //       await updateDoc(userDocRef, {
    //         points: this.currentScore + this.recipeScore,
    //         activeChallenge: '' // Clear the active challenge after completion
    //       });
    //       location.reload();
    //       alert('Challenge completed successfully!');
    //     } else {
    //       alert('User not authenticated.');
    //     }
    //   } catch (error) {
    //     console.error('Error completing challenge or uploading file:', error);
    //     alert('Failed to complete challenge. Please try again.');
    //   }
    // },
    // async fetchActiveChallenge(uid) {
    //   try {
    //     const userDocRef = doc(db, 'user', uid);
    //     const userDocSnap = await getDoc(userDocRef);

    //     if (userDocSnap.exists()) {
    //       const userData = userDocSnap.data();
    //       this.selectedChallenge = userData.activeChallenge;

    //       if (this.selectedChallenge) {
    //         // Fetch recipe details for the active challenge
    //         const recipeUrl = `https://api.spoonacular.com/recipes/${this.selectedChallenge}/information?includeNutrition=false&apiKey=${this.apiKey}`;
    //         const response = await axios.get(recipeUrl);
    //         this.recipeTitle = response.data.title;
    //         this.recipeScore = response.data.readyInMinutes * response.data.analyzedInstructions[0].steps.length;
    //       } else {
    //         console.log("No active challenge found")
    //       }
    //     } else {
    //       console.log('User document not found.');
    //     }
    //   } catch (e) {
    //     console.error('Error fetching challenge:', e);
    //   }
    // },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userid = user.uid
        // this.fetchActiveChallenge(user.uid); // Fetch active challenge details
        this.fetchPosts();
      } else {
        console.log('User not authenticated');
        this.$router.push('/login'); // Redirect to login if not authenticated
      }
    });
  },
};
</script>


<!-- this has been gpt-ed just so i can see the pics better feel free to delete -->
<style scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 450px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.post-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 10px 0;
}

.post-details {
  margin-top: 10px;
}
</style>
<!-- this has been gpt-ed just so i can see the pics better feel free to delete -->