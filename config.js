import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAV3g5xU0REvHq5meRxicjwAAZ4OOaOv0I",
    authDomain: "rate-sauchalaya-7337e.firebaseapp.com",
    projectId: "rate-sauchalaya-7337e",
    storageBucket: "rate-sauchalaya-7337e.appspot.com",
    messagingSenderId: "105208807996",
    appId: "1:105208807996:web:09a0fa10adcb58515db939"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
