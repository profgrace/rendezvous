import firebase from "../firebase";
import db from "../db.js";
export default {
  userLogin: function(data) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password);
  },
  userGoogleLogin: function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = firebase.auth().signInWithPopup(provider);
      return result;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  },
  userRegister: function(data) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
  },
  userLogout: function() {
    return firebase.auth().signOut();
  },

  // Person
  createPerson: function(data) {
    db.collection("people")
      .add({ data })
      .then(response => {
        // eslint-disable-next-line
        console.log(`Person added! - ${response}`);
      });
  },
  peopleDetails: function() {
    try {
      return db.collection("people").get();
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  }
};
