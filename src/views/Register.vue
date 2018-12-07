<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <v-form>
          <v-text-field
            box
            background-color="white"
            name="phone"
            type="text"
            label="Email Address"
            placeholder="Your personal email address"
            v-model="email"
          ></v-text-field>
          <v-text-field
            box
            background-color="white"
            name="phone"
            type="password"
            label="Password"
            placeholder="Something simple you'll remember"
            v-model="password"
            v-on:keyup.enter="register"
          ></v-text-field>
          <v-btn
            round
            color="secondary"
            class="black--text submit-btn"
            @click="register"
          >Get Started</v-btn>
        </v-form>
        <router-link to="/login" class="white--text login-here">
          Not your first time?
          <u>Login here</u>
        </router-link>
        <span class="or">or</span>
        <router-link to="/" class="white--text">Want to Use Facebook Instead?</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Bg from "../components/Bg.vue";
import Logo from "../components/Logo.vue";

import firebase from "firebase";
export default {
  name: "login",
  components: {
    Bg,
    Logo
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          // eslint-disable-next-line
          user => {
            this.$router.replace("login");
          },
          function(err) {
            alert(`Oops! ${err.message}`);
          }
        );
    }
  }
};
</script>
