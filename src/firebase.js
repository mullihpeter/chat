// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsauafE0yU2-SF-FFUzpUt4A_PazXrMQw",
  authDomain: "chat-eba71.firebaseapp.com",
  projectId: "chat-eba71",
  storageBucket: "chat-eba71.appspot.com",
  messagingSenderId: "109008325718",
  appId: "1:109008325718:web:dc3a2aa434f9bb6475bff7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()