<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <Form @email="setEmail" @password="setPassword" />
        <v-btn round color="btnColor" class="black--text submit-btn" @click="login">Login</v-btn>
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
    setEmail: function (email) {
      this.email = email
    },
    setPassword: function (password) {
      this.password = password
    },
    login() {
      const self = this
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch("user/login", user)
      .then(user => {
        self.$router.replace("home")
      }).catch(err => {
        alert(`Oops! ${err.message}`)
      })
    }
  }
};
</script>
