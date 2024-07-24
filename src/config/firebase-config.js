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
  apiKey: "AIzaSyBIR5MVoyfluEVRqzzw3OWGUwQAuBIzrGw",
  authDomain: "finance-flow-87a44.firebaseapp.com",
  projectId: "finance-flow-87a44",
  storageBucket: "finance-flow-87a44.appspot.com",
  messagingSenderId: "147339452036",
  appId: "1:147339452036:web:28106258b779b7c59b2cd1",
  measurementId: "G-HRSM4Y21SY"
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