// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Initialize Firebase

const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();