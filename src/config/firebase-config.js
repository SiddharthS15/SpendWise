// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgfL2eWo26wouHGCecGKgyZMURmm2_bY",
  authDomain: "expense-track-9cc69.firebaseapp.com",
  projectId: "expense-track-9cc69",
  storageBucket: "expense-track-9cc69.firebasestorage.app",
  messagingSenderId: "736652496734",
  appId: "1:736652496734:web:8e466b87f8731a798649cf",
  measurementId: "G-TT3B3ESMPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// firebase login
// firebase init
// firebase deploy