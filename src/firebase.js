// Import the functions you need from the SDKs you need
import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs, setDoc, addDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4t9Ulylj6RKodtw8hram5RYykaU-Hs_s",
    authDomain: "let-me-cook-a6cd6.firebaseapp.com",
    projectId: "let-me-cook-a6cd6",
    storageBucket: "let-me-cook-a6cd6.appspot.com",
    messagingSenderId: "175589138122",
    appId: "1:175589138122:web:1883b9686d8efeb360de33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const user = auth.currentUser;



export { auth }
export {db,app}

// Get list of users from database
export async function getUsers() {
    const userInfo = collection(db, 'user');
    const userSnapshot = await getDocs(userInfo);
    const userInfoList = userSnapshot.docs.map(doc => doc.data());
    console.log(userInfoList)
    return userInfoList;
}

export const name = ref("");
export const email = ref("");
export const password = ref("");
export const loginEmail = ref("");
export const loginPassword = ref("");
export const recipes = ref([]);
export const error = ref("");


//register new user into firebase auth
export const register = (event) => {
    event.preventDefault();
    console.log("Called");

    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            var authUid = getAuth().lastNotifiedUid
            addUserInfo(authUid)
            router.push('/login')
        })
        .catch((error) => {
            alert(error.message)
        });
}

//add user info into firebase cloudstore
export async function addUserInfo(authUid) {
    try {
        await setDoc(doc(db, "user", authUid), {
            name: name.value,
            email: email.value,
            points: 0,
            streak: 0
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export const login = (event) => {

    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.email, "signed in user")
            router.push('/')
        })
        .catch((error) => {

            if (error.code == "auth/invalid-email") {
                alert("Your email is invalid, please try again.")
            } else if (error.code == "auth/invalid-credential") {
                alert("Incorrect password, please try again.")
            }
            console.log(error.code)
        });

}

export async function getUserInfoById(uid) {

    const docRef = doc(db, "user", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

}

// Function to fetch recipes from Spoonacular API
export async function getTrendingRecipes(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        recipes.value = data.results; // Store the fetched recipes in reactive state
    } catch (err) {
        console.error("Error fetching the recipes:", err);
        error.value = "Failed to fetch recipes."; // Set error message
    }
}


export const signOutUser = (uid) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
        uid = ""; // Clear the uid after signing out
    }).catch((error) => {
        // An error happened.
        console.log("Error signing out:", error);
    });
};