// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj8B7nhS8h-ghpDNrj_0N-KcNiraOGkqQ",
  authDomain: "insta-c49bb.firebaseapp.com",
  projectId: "insta-c49bb",
  storageBucket: "insta-c49bb.appspot.com",
  messagingSenderId: "552705885461",
  appId: "1:552705885461:web:79a985c649a825ec20151c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }