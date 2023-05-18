// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM0G1CHSZKznpQ38YllvHFQ7zFuPLBDh4",
  authDomain: "playcarzone.firebaseapp.com",
  projectId: "playcarzone",
  storageBucket: "playcarzone.appspot.com",
  messagingSenderId: "1058298202976",
  appId: "1:1058298202976:web:09af9de69d870175bf2c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;