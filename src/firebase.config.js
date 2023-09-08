// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKYpoPbcmhH0zpl8TMrNEtlDKVvQPK438",
  authDomain: "house-for-sale-app.firebaseapp.com",
  projectId: "house-for-sale-app",
  storageBucket: "house-for-sale-app.appspot.com",
  messagingSenderId: "57585559238",
  appId: "1:57585559238:web:50fdb79e51c16d1c3dd9c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()