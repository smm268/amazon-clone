import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYnBVDi9m2bXMRyQQN2dp64GNvzdi23Og",
  authDomain: "fir-21-ad24c.firebaseapp.com",
  projectId: "fir-21-ad24c",
  storageBucket: "fir-21-ad24c.appspot.com",
  messagingSenderId: "680613070676",
  appId: "1:680613070676:web:7a7945ea2976345ac3aac1"
};

  const app = !firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db= app.firestore();
  export default db;