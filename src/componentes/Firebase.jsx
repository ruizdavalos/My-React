
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCHiNkAp21Pvn5pYf94U00F1STFSFUYwAM",
    authDomain: "proyectojuanruiz.firebaseapp.com",
    projectId: "proyectojuanruiz",
    storageBucket: "proyectojuanruiz.appspot.com",
    messagingSenderId: "821894967136",
    appId: "1:821894967136:web:9c6beaff254a4a1a3f3805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )
export const auth = getAuth( app )