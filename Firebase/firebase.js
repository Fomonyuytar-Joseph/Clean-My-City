// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATWi0Zr5gdB0aNQ8KofOuJ2ap2nMSwGkk",
  authDomain: "file-upload-ccc7a.firebaseapp.com",
  databaseURL: "https://file-upload-ccc7a-default-rtdb.firebaseio.com",
  projectId: "file-upload-ccc7a",
  storageBucket: "file-upload-ccc7a.appspot.com",
  messagingSenderId: "494093848520",
  appId: "1:494093848520:web:57db519702cd2362d7bafd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  }) 

  export const storage = getStorage(app)

 
