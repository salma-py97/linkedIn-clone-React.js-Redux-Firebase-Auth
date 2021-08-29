import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVDQ-mr-RpORy03vnq6h_camvCy8lxW14",
  authDomain: "linkedin-clone-dda44.firebaseapp.com",
  projectId: "linkedin-clone-dda44",
  storageBucket: "linkedin-clone-dda44.appspot.com",
  messagingSenderId: "353007762239",
  appId: "1:353007762239:web:3d2e2da6c1bd89f409f18a",
  measurementId: "G-E8TCL6GRZN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth()

export {db, auth};