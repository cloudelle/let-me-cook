<script setup>
import { getUsers, getUserInfoById, auth } from '../firebase.js'
import { getFirestore, collection, getDoc, getDocs, setDoc, addDoc, doc, orderBy, updateDoc, query, deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from '../composables/useAuth.js';
import { db, storage } from '../firebase.js';
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage';
</script>

<script>
export default {
  data() {
    return {
      apiKey: '1e42638a7ad644caafcdb135d8b4b7b5',
      userid: "",
      posts: [],
      recipeTitle: '',
      recipeScore: '',
      displayMyPosts: [],
      deletePostId: "",
      showModal: false,       // Controls modal visibility
      editPost: null,         // Holds the post being edited
      newCaption: '',         // Stores the updated caption
    };
  },
  methods: {
    openEditModal(post) {
      this.showModal = true;            // Show modal
      this.editPost = post;             // Set current post
      this.newCaption = post.caption;   // Pre-fill with existing caption
    },
    closeModal() {
      this.showModal = false;
      this.editPost = null;
      this.newCaption = '';
    },
    async saveCaption() {
      if (!this.editPost) return;

      try {
        // Update Firestore with the new caption
        const postRef = doc(db, 'posts', this.editPost.id);
        await updateDoc(postRef, {
          caption: this.newCaption
        });

        // Update the local data to reflect changes
        this.editPost.caption = this.newCaption;

        // Close modal
        this.closeModal();
      } catch (error) {
        console.error("Error updating caption:", error);
      }
    },
    async deletePost(postInfo) {
      this.deletePostId = postInfo.id
      console.log(this.deletePostId, this.userid)

      try {
        //Delete the post document from Firestore
        const postRef = doc(db, 'posts', this.deletePostId);  
        await deleteDoc(postRef);  


        // Delete the image from storage
        const imageUrl = postInfo.imageUrl;
        const url = new URL(imageUrl);
        const imagePath = decodeURIComponent(url.pathname.split('/o/')[1]);
        const storage = getStorage();
        const imageRef = storageRef(storage, imagePath);
        await deleteObject(imageRef);
        location.reload();
        console.log("Image deleted from Firebase Storage.");

      } catch (error) {
        console.error("Error deleting post or image:", error);
      }
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
      return date.toLocaleString(); // Convert to readable date string
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

      // Step 2: Loop through each post to get the username for each userId
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
            return post;
          }
        })
      );

      console.log('Posts with usernames:', postsWithUsernames);
      this.displayMyPosts = postsWithUsernames;
      console.log(this.displayMyPosts)
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userid = user.uid
        console.log(user.uid)
        this.fetchPosts();
      } else {
        console.log('User not authenticated');
        this.$router.push('/login');
      }
    });
  }
};
</script>

<template>
  <div class="posts-container">
    <h1>My Posts</h1>

    <!-- Loop through each post and display its details inside a card -->
    <div v-for="displayMyPost in displayMyPosts" :key="displayMyPost.id">
      <div v-if="displayMyPost.userId == userid" class="post-card">
        <!-- Display Name and Formatted Timestamp at the Top -->
        <div class="post-header">
          <button @click="openEditModal(displayMyPost)">Edit Caption</button>

          <!-- Edit Caption Modal -->
          <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
              <h3>Edit Caption</h3>
              <input type="text" v-model="newCaption" placeholder="Enter new caption" />
              <button @click="saveCaption">Save</button>
              <button @click="closeModal">Cancel</button>
            </div>
          </div>
          <h3>{{ displayMyPost.name }}</h3>
          <span>{{ formatTimestamp(displayMyPost.timestamp) }}</span>
        </div>

        <!-- Display Image in the Middle -->
        <div class="post-image">
          <img :src="displayMyPost.imageUrl" alt="Post Image" height="400px" width="400px" />
        </div>
        <div class="post-details">
          <h4>{{ displayMyPost.challengeName }}</h4>
          <p> <strong>Caption:</strong>{{ displayMyPost.caption }}</p>
          <p><strong>Likes:</strong> {{ displayMyPost.likes }}</p>
          <p><strong>Challenge Scores:</strong> {{ displayMyPost.challengeScore }}</p>
          <button @click="deletePost(displayMyPost)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.modal-content input {
  width: 100%;
  margin-bottom: 10px;
}
</style>
