// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
//import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA5EQwssw7JTAXsuxztyzZ6MTAN_dRPxp4",
  authDomain: "p2-8abb4.firebaseapp.com",
  projectId: "p2-8abb4",
  storageBucket: "p2-8abb4.appspot.com",
  messagingSenderId: "582146999683",
  appId: "1:582146999683:web:869ed961a549e81b8522b6",
  measurementId: "G-ZFZMMRXXJQ"
};

// Initialize Firebase

//const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
//export const storage = getStorage();
export const db = getFirestore();