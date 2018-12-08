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
            v-on:keyup.enter="login"
          ></v-text-field>
          <v-btn round color="btnColor" class="black--text submit-btn" @click="login">Login</v-btn>
        </v-form>
        <router-link to="/register" class="white--text login-here">
          Your first time?
          <u>Get Started here</u>
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
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          // eslint-disable-next-line
          user => {
            // this.$store.commit("setCurrentUser", user);
            // this.$store.dispatch("fetchUserProfile");
            this.$router.replace("home");
          },
          function(err) {
            alert(`Oops! ${err.message}`);
          }
        );
    }
  }
};
</script>
