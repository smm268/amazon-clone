import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjYoRccytdvt63lAyUHD4RP9nO46W34pA",
  authDomain: "clone-56af2.firebaseapp.com",
  projectId: "clone-56af2",
  storageBucket: "clone-56af2.appspot.com",
  messagingSenderId: "162889768163",
  appId: "1:162889768163:web:14c07272ae913917b3f9d6"
};

  const app = !firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db= app.firestore();
  export default db;