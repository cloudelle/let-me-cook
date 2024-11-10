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
<template>
  <div class="posts-container">
    <h2 id="dynamic-title"></h2>

    <!-- Loop through each post and display its details -->
    <div v-for="displayPost in displayPosts" :key="displayPost.id">
      <div v-if="displayPost.userId != this.userid" class="post-card">
        <!-- Post Header with Placeholder Avatar and Name -->
        <div class="post-header">
          <div class="user-avatar">
            {{ displayPost.name.charAt(0).toUpperCase() }}
          </div>
          <div>
            <h5 class="username m-0">{{ displayPost.name }}</h5>
            <span class="timestamp">{{ formatTimestamp(displayPost.timestamp) }}</span>
          </div>
        </div>

        <!-- Single Image Display -->
        <div class="post-image">
          <img :src="displayPost.imageUrl" alt="Post Image" class="single-post-image" />
        </div>

        <!-- Post Details including Challenge Name, Caption, Score, and Likes -->
        <div class="post-details">
          <h4 class="challenge-name">{{ displayPost.challengeName }}</h4>
          <p class="caption">{{ displayPost.caption }}</p>

          <!-- Score and Likes Row -->
          <div class="score-likes-row">
            <p class="challenge-score"><strong>Score:</strong> {{ displayPost.challengeScore }}</p>
            <button @click="likePost(displayPost)" class="like-button">
              <i :class="[displayPost.isLikedByUser ? 'fas fa-heart liked' : 'far fa-heart']"></i>
              {{ displayPost.likes }} Likes
            </button>
          </div>
        </div>
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
import TypeIt from 'typeit';

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
  name: 'SocialPage',
  setup() {
    // Initialize TypeIt on component mount
    onMounted(() => {
      new TypeIt("#dynamic-title", {
        strings: ["Welcome to Your Feed", "Discover New Challenges!"],
        speed: 100,
        breakLines: false,
        loop: true,
      }).go();
    });
  },
};
</script>

<style scoped>
#dynamic-title {
  font-size: 2.5em;
  text-align: center;
  color: #ff4500;
  font-family: 'VT323', monospace;
  margin-bottom: 2q0px;
}

.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom right, #f9f9f9, #e0e0e0);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.social-title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #ff6347;
  font-family: 'VT323', monospace;
}

.post-card {
  background: linear-gradient(to bottom right, #ffffff, #f0f0f0);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.post-card:hover {
  transform: translateY(-10px);
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff6347;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 10px;
}

.username {
  font-size: 1.2em;
  font-weight: bold;
}

.timestamp {
  font-size: 0.8em;
  color: #888;
}

.post-image {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.single-post-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

.post-details {
  margin-top: 10px;
  text-align: left;
}

.challenge-name {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 5px;
}

.caption {
  font-size: 1em;
  color: #555;
}

.challenge-score {
  font-size: 1em;
  color: #ff6347;
  font-weight: bold;
  margin: 5px 0;
}

.likes-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.like-button {
  background: none;
  border: none;
  font-size: 1.1em;
  color: #ff6347;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.like-button .fa-heart {
  margin-right: 5px;
  transition: transform 0.2s;
}

.like-button .liked {
  color: #ff6347;
  transform: scale(1.2);
  animation: pop 0.2s ease-in-out;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

.score-likes-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>
