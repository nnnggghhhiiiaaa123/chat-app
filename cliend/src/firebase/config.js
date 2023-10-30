import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase.firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwEW2_24YBmWgFFQ8q6itTYdv5uVSDRUo",
    authDomain: "chat-app-6eb1a.firebaseapp.com",
    projectId: "chat-app-6eb1a",
    storageBucket: "chat-app-6eb1a.appspot.com",
    messagingSenderId: "370702116264",
    appId: "1:370702116264:web:df134d6d6bc93a4229a99d",
    measurementId: "G-QLX2YXXB8T"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

  export { db, auth };
  export default firebase;