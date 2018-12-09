/* eslint-disable */

import firebase from "firebase";
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
    return firebase
      .database()
      .ref("people")
      .push(data);
  },
  peopleDetails: function(data) {
    console.log(data);
    return firebase.database().ref("people");
  },
};
