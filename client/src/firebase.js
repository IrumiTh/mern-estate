// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fd306.firebaseapp.com",
  projectId: "mern-estate-fd306",
  storageBucket: "mern-estate-fd306.appspot.com",
  messagingSenderId: "390239339799",
  appId: "1:390239339799:web:a0ecff094f7d512c8f2352"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);