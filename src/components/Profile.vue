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
      showModal: false,       // Controls edit modal visibility
      showDeleteModal: false, // Controls delete confirmation modal visibility
      editPost: null,         // Holds the post being edited
      postToDelete: null,     // Holds the post being deleted
      newCaption: '',         // Stores the updated caption
      activeMenu: null,       // Tracks which post's menu is active
      userName: '', // User's name
      userScore: 0, // User's score
    };
  },
  methods: {
    toggleMenu(postId) {
      // Toggle the menu for the current post
      if (this.activeMenu === postId) {
        this.activeMenu = null; // Close the menu if it's already open
      } else {
        this.activeMenu = postId; // Open the menu for the current post
      }
    },
    handleClickOutside(event) {
      const menuIcon = event.target.closest('.menu-container');
      if (!menuIcon) {
        this.activeMenu = null; // Close the menu if clicking outside of the three-dot icon
      }
    },
    openEditModal(post) {
      this.showModal = true;            // Show modal
      this.editPost = post;             // Set current post
      this.newCaption = post.caption;   // Pre-fill with existing caption
    },
    openDeleteModal(post) {
      this.showDeleteModal = true;
      this.postToDelete = post;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
      this.postToDelete = null;
    },
    async confirmDelete() {
      if (!this.postToDelete) return;

      try {
        const postRef = doc(db, 'posts', this.postToDelete.id);
        await deleteDoc(postRef);

        const imageUrl = this.postToDelete.imageUrl;
        const url = new URL(imageUrl);
        const imagePath = decodeURIComponent(url.pathname.split('/o/')[1]);
        const storage = getStorage();
        const imageRef = storageRef(storage, imagePath);
        await deleteObject(imageRef);

        this.closeDeleteModal();
        location.reload();
        console.log("Post successfully deleted.");
      } catch (error) {
        console.error("Error deleting post or image:", error);
        this.closeDeleteModal();
      }
    },
    closeModal() {
      this.showModal = false;
      this.editPost = null;
      this.newCaption = '';
      this.activeMenu = null;
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
      this.deletePostId = postInfo.id;
      console.log(this.deletePostId, this.userid);

      // Display a confirmation dialog before deleting
      const userConfirmed = window.confirm("Are you sure you want to delete this post? This action cannot be undone.");

      if (!userConfirmed) {
        // If the user cancels, exit the function
        return;
      }

      try {
        // Delete the post document from Firestore
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

        // Filter posts by the current user's `userId`
        const posts = await Promise.all(querySnapshot.docs.map(async (doc) => {
          const postData = doc.data();
          const postId = doc.id;
          const userId = postData.userId;

          // Only include posts that belong to the current user
          if (userId !== this.userid) return null;

          const imageRef = storageRef(storage, `uploads/${userId}/${postId}`);
          const imageUrl = await getDownloadURL(imageRef);

          return {
            id: postId,
            ...postData,
            imageUrl,
            isLikedByUser: postData.likedBy && postData.likedBy.includes(this.userid),
          };
        }));

        // Filter out null posts (i.e., posts not belonging to the current user)
        this.posts = posts.filter(post => post !== null);

        // Fetch usernames and update `displayMyPosts`
        this.fetchPostsWithUsernames();

      } catch (error) {
        console.error("Error fetching posts or images:", error);
      }
    },
    async fetchUserInfo() {
      try {
        const userDocRef = doc(db, 'user', this.userid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          this.userName = userData.name;
          this.userScore = userData.points || 0; // Use 0 if points are not defined
        } else {
          console.warn('User document not found.');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    async fetchPostsWithUsernames() {
      const posts = this.posts;

      const postsWithUsernames = await Promise.all(
        posts.map(async (post) => {
          const userDocRef = doc(db, 'user', post.userId);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            return {
              ...post,
              name: userData.name,
            };
          } else {
            console.warn(`User not found for userId: ${post.userId}`);
            return post;
          }
        })
      );

      // Store only the posts of the current user
      this.displayMyPosts = postsWithUsernames;
      console.log('My Posts:', this.displayMyPosts);
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.userid = user.uid;
        console.log(user.uid);
        this.fetchPosts();
        await this.fetchUserInfo(); // Fetch the user's name and score
      } else {
        console.log('User not authenticated');
        this.$router.push('/login');
      }
    });
    document.addEventListener('click', this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<template>
  <div class="posts-container">
    <!-- User details aligned to the left -->
    <div class="user-details">
      <span class="user-name">User: {{ userName }}</span>
      <span class="user-score">Score: {{ userScore }}</span>
    </div>
    <h2 id="title">Your Posts</h2>
    <!-- Loop through each post and display its details inside a card -->
    <div v-if="displayMyPosts.length === 0" class="no-posts">
      <p>You haven't posted anything yet, <router-link to="/start" class="get-cooking-link">get to cooking!</router-link></p>
    </div>
    <div v-else>
      <div v-for="displayMyPost in displayMyPosts" :key="displayMyPost.id" class="post-card">
        <!-- Post Header with Placeholder Avatar and Name -->
        <div class="post-header">
          <div class="user-avatar">
            {{ displayMyPost.name.charAt(0).toUpperCase() }}
          </div>
          <div>
            <h5 class="username m-0">{{ displayMyPost.name }}</h5>
            <span class="timestamp">{{ formatTimestamp(displayMyPost.timestamp) }}</span>
          </div>

          <!-- Three-dot menu container always visible at the top right -->
          <div class="menu-wrapper">
            <div class="menu-container" @click.stop="toggleMenu(displayMyPost.id)">
              <i class="fas fa-ellipsis-v menu-icon"></i>
              <!-- Dropdown menu for edit and delete options -->
              <div v-if="activeMenu === displayMyPost.id" class="dropdown-menu">
                <button @click="openEditModal(displayMyPost)" class="dropdown-item">Edit</button>
                <button @click="openDeleteModal(displayMyPost)" class="dropdown-item">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Image Display -->
        <div class="post-image">
          <img :src="displayMyPost.imageUrl" alt="Post Image" class="single-post-image" />
        </div>

        <!-- Post Details including Challenge Name, Caption, Score, and Likes -->
        <div class="post-details">
          <h4 class="challenge-name">{{ displayMyPost.challengeName }}</h4>
          <p class="caption">{{ displayMyPost.caption }}</p>

          <!-- Score and Likes Row -->
          <div class="score-likes-row">
            <p class="challenge-score"><strong>Score:</strong> {{ displayMyPost.challengeScore }}</p>
            <p class="likes-count">{{ displayMyPost.likes }} Likes</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-Screen Edit Modal Overlay -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Edit Caption</h3>
        <input type="text" v-model="newCaption" placeholder="Enter new caption" class="modal-input" />
        <div class="modal-buttons">
          <button @click="closeModal" class="modal-cancel-button">Cancel</button>
          <button @click="saveCaption" class="modal-save-button">Save</button>
        </div>
      </div>
    </div>
    <!-- Full-Screen Delete Confirmation Modal Overlay -->
    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this post?</p>
        <div class="modal-buttons">
          <button @click="closeDeleteModal" class="modal-cancel-button">Cancel</button>
          <button @click="confirmDelete" class="modal-del-button btn btn-danger">Yes, Delete</button>
        </div>
      </div>
    </div>

  </div>
</template>

<!-- this has been gpt-ed just so i can see the pics better feel free to delete -->
<style scoped>
.no-posts {
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
#title {
  font-size: 2.5em;
  text-align: center;
  color: #ff4500;
  font-family: 'VT323', monospace;
  margin-bottom: 20px;
  flex: 1;
  text-align: center;
  /* Centers the title */
}

.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, #f9f9f9, #e0e0e0);
  border-radius: 10px;
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

.user-info {
  display: flex;
  align-items: center;
}

.user-details {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  align-items: center;
  justify-content: flex-start;
  /* Aligns content to the left */
}

.user-name {
  font-size: 1em;
  font-weight: bold;
  color: #333;
}

.user-score {
  font-size: 1em;
  color: #333;
  font-weight: bold;
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
  margin-right: 10px;
}

.post-image img {
  width: 100%;
  border-radius: 12px;
}

.score-likes-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.edit-button,
.delete-button {
  background: #ff6347;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.edit-button:hover,
.delete-button:hover {
  transform: scale(1.1);
}

.menu-wrapper {
  position: absolute;
  top: 20px;
  right: 20px;
}

.menu-container {
  position: relative;
  cursor: pointer;
}

.menu-icon {
  font-size: 1.5em;
  color: #888;
}

.dropdown-menu {
  position: flex;
  display: flex;
  top: 30px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2000;
}

.dropdown-item {
  padding: 10px 20px;
  color: #333;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  /* Ensure it appears above all other elements */
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.modal-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
}

.modal-save-button,
.modal-cancel-button {
  background: #ff6347;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.modal-del-button {
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.modal-save-button:hover,
.modal-cancel-button:hover {
  transform: scale(1.05);
}
</style>