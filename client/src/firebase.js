// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "publishhub-9fade.firebaseapp.com",
  projectId: "publishhub-9fade",
  storageBucket: "publishhub-9fade.appspot.com",
  messagingSenderId: "872104594234",
  appId: "1:872104594234:web:4da665bb28dd41f6e35e03",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
