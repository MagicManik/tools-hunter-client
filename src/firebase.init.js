// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlGyEIGaLO8XqZfw2KDVPO4xfJG1N1pUY",
    authDomain: "tools-hunter.firebaseapp.com",
    projectId: "tools-hunter",
    storageBucket: "tools-hunter.appspot.com",
    messagingSenderId: "1000600955529",
    appId: "1:1000600955529:web:615d94205d0bcfbe697458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;