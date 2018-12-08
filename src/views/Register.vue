<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <Form @email="setEmail" @password="setPassword" />
        <v-btn round color="btnColor" class="black--text submit-btn" @click="register">Get Started</v-btn>
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
/* eslint-disable */
import Bg from "../components/Bg.vue";
import Logo from "../components/Logo.vue";
import Form from "../components/Form.vue";

import firebase from "firebase";
export default {
  name: "login",
  components: {
    Bg,
    Logo,
    Form
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    setEmail: function (email) {
      this.email = email
    },
    setPassword: function (password) {
      this.password = password
    },
    register() {
      const self = this
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch("user/register", user)
      .then(user => {
        self.$router.replace("login");
      }).catch(err => {
        alert(`Oops! ${err.message}`);
      });
    }
  }
};
</script>
