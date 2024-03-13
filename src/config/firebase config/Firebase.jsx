// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYfoutwaBeboCEhkaOx-WXS7tbEMnhn4c",
    authDomain: "mini-test-8d093.firebaseapp.com",
    projectId: "mini-test-8d093",
    storageBucket: "mini-test-8d093.appspot.com",
    messagingSenderId: "1036521883923",
    appId: "1:1036521883923:web:54a2361f0debc68723f2e6"
  };

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
// const analytics = getAnalytics(firebase_app);

export { firebase_app, auth };