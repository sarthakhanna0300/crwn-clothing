import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC6SKUSPDy86eJ42kBQxl-U0wMFYBmC85U",
  authDomain: "crwn-db-cd8a6.firebaseapp.com",
  databaseURL: "https://crwn-db-cd8a6.firebaseio.com",
  projectId: "crwn-db-cd8a6",
  storageBucket: "crwn-db-cd8a6.appspot.com",
  messagingSenderId: "189064276201",
  appId: "1:189064276201:web:b0d6c325e0b0778540e878",
  measurementId: "G-J3ZMXWDL6T"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const authfirestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;