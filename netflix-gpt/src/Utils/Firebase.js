// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa1ps3aj5G3meCXW5lazCNDcYxqjMftfc",
  authDomain: "netflixgpt-ac087.firebaseapp.com",
  projectId: "netflixgpt-ac087",
  storageBucket: "netflixgpt-ac087.firebasestorage.app",
  messagingSenderId: "896555950455",
  appId: "1:896555950455:web:68adb52d243bab61018172",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
