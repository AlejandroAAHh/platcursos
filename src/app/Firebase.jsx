// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcNvYgTjk8mFISNPGYeKVOieL25cNK9vs",
  authDomain: "prograiv-db.firebaseapp.com",
  projectId: "prograiv-db",
  storageBucket: "prograiv-db.appspot.com",
  messagingSenderId: "596430118072",
  appId: "1:596430118072:web:dd96b0fe064b004264284d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {app, auth, db};