// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvkyYdU13VinpTMiklSVr5e6-ru9e3oLo",
  authDomain: "booking-17e35.firebaseapp.com",
  projectId: "booking-17e35",
  storageBucket: "booking-17e35.firebasestorage.app",
  messagingSenderId: "743494783173",
  appId: "1:743494783173:web:6a1f2332e965bdfbeba0ac",
  measurementId: "G-PBLKYCL7YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore()