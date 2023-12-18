import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7mb1UEz_eb_oLTX145GlksGWrLpBgc0w",
    authDomain: "tuto-firebase-d20dc.firebaseapp.com",
    databaseURL: "https://tuto-firebase-d20dc-default-rtdb.firebaseio.com",
    projectId: "tuto-firebase-d20dc",
    storageBucket: "tuto-firebase-d20dc.appspot.com",
    messagingSenderId: "863905700033",
    appId: "1:863905700033:web:fc048bd0dc58a5c74a1c40"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();