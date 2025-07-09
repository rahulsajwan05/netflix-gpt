// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2rFgIK60pfDvzQCV3nxWARdLLcbCRsKw",
  authDomain: "netflixgpt-13879.firebaseapp.com",
  projectId: "netflixgpt-13879",
  storageBucket: "netflixgpt-13879.firebasestorage.app",
  messagingSenderId: "541353455772",
  appId: "1:541353455772:web:cf58f77bf3d823d5483d59",
  measurementId: "G-Z3QXQSMEKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);