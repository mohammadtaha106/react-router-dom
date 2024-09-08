
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDe4QzK8ppbPHtTXONJXvsTeHYmZ_m_vCU",
  authDomain: "react-router-14df3.firebaseapp.com",
  projectId: "react-router-14df3",
  storageBucket: "react-router-14df3.appspot.com",
  messagingSenderId: "619616399271",
  appId: "1:619616399271:web:02ba6d7875fd5ed7679082",
  measurementId: "G-Y21TW6NZTD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth , app , signOut, onAuthStateChanged, createUserWithEmailAndPassword}