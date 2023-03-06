// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHch3WzxRHMJy9eLs3Oe4Iknc9JjlF6IU",
  authDomain: "cornellhsc-f7134.firebaseapp.com",
  projectId: "cornellhsc-f7134",
  storageBucket: "cornellhsc-f7134.appspot.com",
  messagingSenderId: "575061478323",
  appId: "1:575061478323:web:4d7ab768427da5a7e599c6",
  measurementId: "G-0Q34QQP0FJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };