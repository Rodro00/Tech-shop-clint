// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgOLGY3NnnJ5FpsXE1wsViVNbpHtaC7yg",
  authDomain: "tech-mobile-and-computer-shop.firebaseapp.com",
  projectId: "tech-mobile-and-computer-shop",
  storageBucket: "tech-mobile-and-computer-shop.appspot.com",
  messagingSenderId: "763798381933",
  appId: "1:763798381933:web:b3f4fdbd1774a99d9e2664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;