// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import {getDatabase} from 'firebase/database'


// Firebase Configuration

const firebaseConfig = {
    apiKey: "AIzaSyCHry9Dg9E_7ADtISPmxmo-WCrK0MScHng",
    authDomain: "dee-lms.firebaseapp.com",
    databaseURL: "https://dee-lms.firebaseio.com",
    projectId: "dee-lms",
    storageBucket: "dee-lms.appspot.com",
    messagingSenderId: "378808434682",
    appId: "1:378808434682:web:4ac56b693a4bb513016e43"
  };
  


  // Initialize Firebase
    const app = initializeApp(firebaseConfig)

//   firebase.initializeApp(firebaseConfig);

  const auth = getAuth(app)
  const db = getDatabase(app)



  export {
    auth,
    db
  }
//   export default firebase;