// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import app from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDYXA4c-nQ9LQS7m5__T6oQiKx4fXHY__U",
    authDomain: "rabota-e0aab.firebaseapp.com",
    databaseURL: "https://rabota-e0aab.firebaseio.com",
    projectId: "rabota-e0aab",
    storageBucket: "rabota-e0aab.appspot.com",
    messagingSenderId: "845485300593",
    appId: "1:845485300593:web:4cd3e528e85b4271e034d0"
};

  // Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore, firebase, app }
