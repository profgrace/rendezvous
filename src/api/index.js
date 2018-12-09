/* eslint-disable */

import firebase from "../firebase";
import db from "../db.js";
export default {
  userLogin: function(data) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password);
  },
  userRegister: function(data) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
  },

  // Person
  createPerson: function(data) {
    console.log(data);
    db.collection("people")
      .add({ data })
      .then(response => {
        alert("Person added!");
      });
    // return firebase
    //   .database()
    //   .ref("people")
    //   .push(data);
  },
  peopleDetails: function(data) {
    console.log(data);
    return firebase.database().ref("people");
  },
};
