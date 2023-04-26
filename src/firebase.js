// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCns8dfrXwGjCkoskQqdqMh3obI7owQ7F0",
  authDomain: "telegram-bot-dashboard.firebaseapp.com",
  projectId: "telegram-bot-dashboard",
  storageBucket: "telegram-bot-dashboard.appspot.com",
  messagingSenderId: "953406997610",
  appId: "1:953406997610:web:d285a5fb4e9c7ea577b613",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
