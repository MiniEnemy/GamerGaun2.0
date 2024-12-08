// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuO9xUR8wnnoUgjj8IgNLsCCQe1ZVEVyk",
  authDomain: "gamergaun-6c174.firebaseapp.com",
  projectId: "gamergaun-6c174",
  storageBucket: "gamergaun-6c174.firebasestorage.app",
  messagingSenderId: "785553842591",
  appId: "1:785553842591:web:eca2c06afec20baab85daa"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // If already initialized, use that one
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);