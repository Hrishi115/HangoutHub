// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqrvOdI8ziiMsM9kZiidsJ000I3lwmRew",
  authDomain: "hangout-hub-39188.firebaseapp.com",
  projectId: "hangout-hub-39188",
  storageBucket: "hangout-hub-39188.firebasestorage.app",
  messagingSenderId: "496866777067",
  appId: "1:496866777067:web:e6f6f1d9df93a03545ebae",
  measurementId: "G-50ZQ6BDWJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    

export const db = getFirestore(app);