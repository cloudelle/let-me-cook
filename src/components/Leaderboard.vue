<script setup>
  import { ref, onMounted } from 'vue';
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebase.js';
  import { useRouter } from "vue-router";
  import { db } from '../firebase.js';
  import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

  const router = useRouter();
  const userName = ref(''); // To store the user's name
  const userEmail = ref(''); // Reactive variable for user's email
  const userPoints = ref('');
  const userStreak = ref('');

  async function getUserData(uid) {
      
      try {
        const docRef = doc(db, "user", uid); // Get document by user ID (UID)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          userName.value = docSnap.data().name; // Set the userName from the Firestore document
          // console.log("User Name:", userName.value);
          userEmail.value = docSnap.data().email;
          // console.log("User Email:", userEmail.value);
          userPoints.value = docSnap.data().points;
          // console.log("User Points:", userPoints.value);
          userStreak.value = docSnap.data().streak;
          // console.log("User Streak:", userStreak.value);

        } else {
          console.log("No such document!");
        }
      } catch (e) {
        console.error("Error getting user document:", e);
      }
    }

  onMounted(() => {
      onAuthStateChanged(auth, (user) => {
          if (!user) {
              // alert("You need to login");
              // Optionally navigate to the login or register page if needed
              router.push('/login')
          }
          else {
            // User is signed in, get their UID
            const uid = user.uid;
            // console.log("Logged in as:", uid);
            // Get the user's name from Firestore
            getUserData(uid);
          }
      });
  })
</script>