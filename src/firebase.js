// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-Z3VCmyKbTdVdjXdghTLKl09qYLuVZCA",
  authDomain: "whatsapp-clone-af4b5.firebaseapp.com",
  projectId: "whatsapp-clone-af4b5",
  storageBucket: "whatsapp-clone-af4b5.appspot.com",
  messagingSenderId: "1010188662465",
  appId: "1:1010188662465:web:82eb61162d7f4a4bff8640",
  measurementId: "G-NWDJ600KS4"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;