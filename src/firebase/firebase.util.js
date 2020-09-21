import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBmnz3_YS4jdVZ_3ngxzGXA4etc-kOyV1s",
    authDomain: "crown-db-76779.firebaseapp.com",
    databaseURL: "https://crown-db-76779.firebaseio.com",
    projectId: "crown-db-76779",
    storageBucket: "crown-db-76779.appspot.com",
    messagingSenderId: "780379163634",
    appId: "1:780379163634:web:5bd784d136feb3556a796b",
    measurementId: "G-P15F35GRC4"
  };
  // Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
