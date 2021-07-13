import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'


const firebaseConfig ={
    apiKey: "AIzaSyCPTVvK0SF3Z4_vhZ9TT2IF7hW51eZsz0w",
    authDomain: "lim014-nutricorp.firebaseapp.com",
    projectId: "lim014-nutricorp",
    storageBucket: "lim014-nutricorp.appspot.com",
    messagingSenderId: "120010968385",
    appId: "1:120010968385:web:1e3b290d0b37a0075825c0",
    measurementId: "G-V2Y4H20PMG"
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
