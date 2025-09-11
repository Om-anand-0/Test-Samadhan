// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpcJaXIoPQckOJalKgB5BceVCC9Z-OtyU",
  authDomain: "test-01-samadhan.firebaseapp.com",
  projectId: "test-01-samadhan",
  storageBucket: "test-01-samadhan.firebasestorage.app",
  messagingSenderId: "632622413701",
  appId: "1:632622413701:web:18fbf3d82b15e52b3a36ec",
  measurementId: "G-Y94GGWL50K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);