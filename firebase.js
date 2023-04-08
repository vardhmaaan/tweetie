 // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import{getFirestore} from "firebase/firestore"
import{getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v4-431c0.firebaseapp.com",
  projectId: "twitter-v4-431c0",
  storageBucket: "twitter-v4-431c0.appspot.com",
  messagingSenderId: "926210135669",
  appId: "1:926210135669:web:abef40f14a2457c4d70a3c"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};