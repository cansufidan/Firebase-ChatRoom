// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkXlN_0YWET3z7hWyu73gIewcyyOZUZy8",
  authDomain: "chat-d3b79.firebaseapp.com",
  projectId: "chat-d3b79",
  storageBucket: "chat-d3b79.appspot.com",
  messagingSenderId: "715862345559",
  appId: "1:715862345559:web:82018caec25323e1276012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
export const auth = getAuth(app);

//
export const provider = new GoogleAuthProvider();

//
export const db = getFirestore(app);