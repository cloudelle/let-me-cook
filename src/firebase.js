// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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

// Get a list of users from your database
export async function getUsers() {
    const citiesCol = collection(db, 'user');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
    return cityList;
}
