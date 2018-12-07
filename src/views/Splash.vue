<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <v-btn color="blue" dark class="fb-btn submit-btn">Log in with Facebook</v-btn>
        <router-link to="/login" class="white--text">No Facebook Account?</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Bg from "../components/Bg.vue";
import Logo from "../components/Logo.vue";
export default {
  components: {
    Bg,
    Logo
  }
};
</script>
