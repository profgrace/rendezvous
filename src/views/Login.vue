<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <Form @email="setEmail" @password="setPassword"/>
        <v-btn round color="btnColor" class="black--text submit-btn mb-3" @click="login">Log in</v-btn>
        <div class="or mb-3">
          <span></span> or
          <span></span>
        </div>
        <v-btn round color="red" dark class="submit-btn" @click="googleSubmit">
          <img src="../assets/icons/google.svg" alt="Google's Icon" class="mr-2">
          Log in with Google
        </v-btn>
        <router-link to="/register" class="white--text login-here mt-3">
          New here?
          <span class="btnColor--text">Get Started</span>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
/* eslint-disable */
import Bg from "../components/Bg.vue";
import Logo from "../components/Logo.vue";
import Form from "../components/Form.vue";

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
    setEmail: function(email) {
      this.email = email;
    },
    setPassword: function(password) {
      this.password = password;
    },
    login() {
      const self = this;
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("user/login", user)
        .then(user => {
          self.$router.replace("home");
        })
        .catch(err => {
          alert(`Oops! ${err.message}`);
        });
    },
    googleSubmit() {
      const self = this;
      this.$store
        .dispatch("user/googleLogin")
        .then(user => {
          self.$router.push("/home/profile");
        })
        .catch(err => {
          alert(`Oops! ${err.message}`);
        });
    }
  }
};
</script>
