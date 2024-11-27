// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD3ftr8PnsLJ2VzDTwAM78it-UJzc6L-E",
  authDomain: "foodino-92385.firebaseapp.com",
  projectId: "foodino-92385",
  storageBucket: "foodino-92385.firebasestorage.app",
  messagingSenderId: "171695873946",
  appId: "1:171695873946:web:4453fe19547d50a1a12423",
  measurementId: "G-Y35G4VVZJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);