// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAIghPx87y6LFcOvpGMnUL4b0F7HkGiiM",
  authDomain: "coffee-store-7e9fb.firebaseapp.com",
  projectId: "coffee-store-7e9fb",
  storageBucket: "coffee-store-7e9fb.appspot.com",
  messagingSenderId: "557600683094",
  appId: "1:557600683094:web:f346b64d5e7f5c4821f7f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;