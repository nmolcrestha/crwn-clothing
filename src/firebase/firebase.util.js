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
export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth)return;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if(!snapShot.exists){
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }catch(err){
       console.log('error creathing user');
     }
   }
   return userRef;
}

  // Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
