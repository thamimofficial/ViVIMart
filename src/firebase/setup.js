// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUtgD_kbmzZsHQJam4cHu1rmGU3QJrTGY",
  authDomain: "vivimart-5e9b6.firebaseapp.com",
  projectId: "vivimart-5e9b6",
  storageBucket: "vivimart-5e9b6.appspot.com",
  messagingSenderId: "515536815434",
  appId: "1:515536815434:web:802fe613844768ddadadb3",
  measurementId: "G-DWYBB9HZ4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)