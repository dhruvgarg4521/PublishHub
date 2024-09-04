// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "publishhub-e5f9a.firebaseapp.com",
  projectId: "publishhub-e5f9a",
  storageBucket: "publishhub-e5f9a.appspot.com",
  messagingSenderId: "53267649716",
  appId: "1:53267649716:web:65195f7dc704f6cc9033e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);