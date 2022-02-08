// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9-qHTc6UPr92h-5eghEghh37PWXuZCXQ",
  authDomain: "blog-app-v1.firebaseapp.com",
  projectId: "blog-app-v1",
  storageBucket: "blog-app-v1.appspot.com",
  messagingSenderId: "434025521026",
  appId: "1:434025521026:web:6d417cf0495c8d82f5b99b",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
