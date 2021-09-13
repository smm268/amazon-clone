import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDi7DJ51aEDTs1KO_OdriLtkOXVbIRTsT0",
    authDomain: "clone-7f892.firebaseapp.com",
    projectId: "clone-7f892",
    storageBucket: "clone-7f892.appspot.com",
    messagingSenderId: "837705036493",
    appId: "1:837705036493:web:7e5e92b5d736c1c0332f84"
  };


  const app = !firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db= app.firestore();
  export default db;