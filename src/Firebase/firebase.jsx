// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase config from firebase_configfile to  access keys and other details
import firebaseConfig from './firebase_config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);