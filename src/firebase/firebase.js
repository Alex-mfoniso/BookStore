// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWXrAnQ2B-Dkv8pQBNq-tCo7QUKCNP8VU",
  authDomain: "bookstore-f5e3a.firebaseapp.com",
  projectId: "bookstore-f5e3a",
  storageBucket: "bookstore-f5e3a.firebasestorage.app",
  messagingSenderId: "143191333408",
  appId: "1:143191333408:web:ff60c2e5e27b077ae1ba45",
  measurementId: "G-75J58ZN6LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);