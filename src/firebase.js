// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC65urdl7MrCG8pBQoNWMrkDLzD5r0B2lE",
  authDomain: "sabdaedukasitunarungu.firebaseapp.com",
  projectId: "sabdaedukasitunarungu",
  storageBucket: "sabdaedukasitunarungu.firebasestorage.app",
  messagingSenderId: "474936622295",
  appId: "1:474936622295:web:3a5206c621544d9caa8492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);