import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBdP9e8powj8z8Q2ehJLbJEymZfI5u0L0M",
  authDomain: "crwn-db-b3645.firebaseapp.com",
  projectId: "crwn-db-b3645",
  storageBucket: "crwn-db-b3645.appspot.com",
  messagingSenderId: "911580506787",
  appId: "1:911580506787:web:4be6f0a01baeffe533ad16",
  measurementId: "G-S94NR8FTSG"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
