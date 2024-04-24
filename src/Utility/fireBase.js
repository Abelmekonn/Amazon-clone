import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIdvAp4zuE-T2vCLa6eM3K2C0LXiSVSeI",
    authDomain: "clone-dd986.firebaseapp.com",
    projectId: "clone-dd986",
    storageBucket: "clone-dd986.appspot.com",
    messagingSenderId: "988518924490",
    appId: "1:988518924490:web:72c0e405eb81f05b9e7433"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()