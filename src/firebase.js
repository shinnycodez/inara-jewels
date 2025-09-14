// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDdhzAcU61G2CeHQQ5AGOCctw9zNzv1als",
  authDomain: "eesha-2e180.firebaseapp.com",
  projectId: "eesha-2e180",
  storageBucket: "eesha-2e180.firebasestorage.app",
  messagingSenderId: "189905560146",
  appId: "1:189905560146:web:5e9f716c9aed4cba96b58b",
  measurementId: "G-5EBXYVKM70"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };