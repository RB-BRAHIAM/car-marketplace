// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "karkamilo.firebaseapp.com",
  projectId: "karkamilo",
  storageBucket: "karkamilo.firebasestorage.app",
  messagingSenderId: "701239532873",
  appId: "1:701239532873:web:e23472019b62cfbf930e98",
  measurementId: "G-K621XTSLLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);