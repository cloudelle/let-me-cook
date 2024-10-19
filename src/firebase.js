// Import the functions you need from the SDKs you need
import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc,getDocs, setDoc, addDoc, doc } from 'firebase/firestore';
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

// export async function getUserInfoById(uid) {

//     const docRef = doc(db, "user", uid);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         // docSnap.data() will be undefined in this case
//         console.log("No such document!");
//     }

// }

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         console.log(user.uid, "line 101")
//         const uid = user.uid;
//         return uid
//         // ...
//     } else {
//         // User is signed out
//         // ...
//         alert("You need to login")
//         router.push('register')
//     }
// });
