import firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyButSmHjY5Eoww9KzrGUJ9bRNmNCbGB9xg",
    authDomain: "react-native-firebase-c80b2.firebaseapp.com",
    databaseURL: "https://react-native-firebase-c80b2.firebaseio.com",
    projectId: "react-native-firebase-c80b2",
    storageBucket: "react-native-firebase-c80b2.appspot.com",
    messagingSenderId: "550325976162",
    appId: "1:550325976162:web:6c623f9c25282f2492e53b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db,
  }