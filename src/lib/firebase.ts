// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "right-focus-stevuth",
  appId: "1:371970444139:web:c25490677a4012ec86da2e",
  storageBucket: "right-focus-stevuth.firebasestorage.app",
  apiKey: "AIzaSyB7XT1IWjtSYbKyMhTG8xBgT7y-2Pvok5g",
  authDomain: "right-focus-stevuth.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "371970444139"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
