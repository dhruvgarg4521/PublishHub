// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "publishhub-9fade.firebaseapp.com",
  projectId: "publishhub-9fade",
  storageBucket: "publishhub-9fade.appspot.com",
  messagingSenderId: "872104594234",
  appId: "1:872104594234:web:4da665bb28dd41f6e35e03",
  measurementId: "G-8960K138SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app };
