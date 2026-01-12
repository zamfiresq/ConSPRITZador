// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZZyc8OzHbBRBBs2_8TDdYlps-IF9CFow",
  authDomain: "conspritzador.firebaseapp.com",
  projectId: "conspritzador",
  storageBucket: "conspritzador.firebasestorage.app",
  messagingSenderId: "642039998093",
  appId: "1:642039998093:web:c09682baf2f6f00a7da4c4",
  measurementId: "G-RQ26Y0RBTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);