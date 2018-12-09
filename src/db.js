import firebase from "./firebase";

const db = firebase.firestore();

const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

export default db;
