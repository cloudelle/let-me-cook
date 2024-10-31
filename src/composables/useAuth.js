import { ref, onMounted } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Import initialized auth from firebase.js

const uid = ref(null); // Stores the user's UID globally

export function useAuth() {
  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid.value = user.uid; // Set UID when user logs in
      } else {
        uid.value = null; // Clear UID if user logs out
      }
    });
  });

  return { uid };
}
