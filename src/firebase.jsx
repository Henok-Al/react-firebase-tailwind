// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbNxvPRvBzuGNgBM5JxdVh9GqAZV6v6es",
  authDomain: "expense-tracker-dd3f8.firebaseapp.com",
  projectId: "expense-tracker-dd3f8",
  storageBucket: "expense-tracker-dd3f8.appspot.com",
  messagingSenderId: "872286229183",
  appId: "1:872286229183:web:42a07cf6e2a1cac5666c0a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
