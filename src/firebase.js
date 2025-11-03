// src/firebase.js

// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5nQb7jXjFVv8ezICMIQhZbJDWtqjxbr0",
  authDomain: "time-table-generator-c1e95.firebaseapp.com",
  projectId: "time-table-generator-c1e95",
  storageBucket: "time-table-generator-c1e95.firebasestorage.app",
  messagingSenderId: "261181239373",
  appId: "1:261181239373:web:bf54ac52fd26b5bbac6c04",
  measurementId: "G-GKFWNLK610"
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);

// Export services you want to use
export const auth = getAuth(app);
export const db = getFirestore(app);
