import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAmYb_2b9I3Ul667mioX_FR7kJ-4d_1TKc",
  authDomain: "rendezvous-26c3d.firebaseapp.com",
  databaseURL: "https://rendezvous-26c3d.firebaseio.com",
  projectId: "rendezvous-26c3d",
  storageBucket: "rendezvous-26c3d.appspot.com",
  messagingSenderId: "311131937755"
});

export default firebase;
