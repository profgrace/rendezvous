<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <Form @email="setEmail" @password="setPassword"/>
        <v-btn
          round
          color="btnColor"
          class="black--text submit-btn mb-3"
          @click="register"
        >Get Started</v-btn>
        <div class="or mb-3">
          <span></span> or
          <span></span>
        </div>
        <v-btn round color="red" dark class="submit-btn">
          <img src="../assets/icons/google.svg" alt="Google's Icon" class="mr-2">
          Get Started with Google
        </v-btn>
        <router-link to="/login" class="white--text login-here mt-3">
          Already have an account?
          <span class="btnColor--text">Log in</span>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
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
    register() {
      const self = this;
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("user/register", user)
        // eslint-disable-next-line
        .then(user => {
          // self.$router.replace("login");
          self.$router.push("/home/profile");
        })
        .catch(err => {
          alert(`Oops! ${err.message}`);
        });
    }
  }
};
</script>
