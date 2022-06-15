// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeKJqQHv1iFW4MP5wTmUr2ISmGzyARAtc",
  authDomain: "pet-love-comision-31180.firebaseapp.com",
  projectId: "pet-love-comision-31180",
  storageBucket: "pet-love-comision-31180.appspot.com",
  messagingSenderId: "563920945295",
  appId: "1:563920945295:web:d90e56d002d5ae51f2f0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore initialize
const db = getFirestore(app)

export default db