<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <v-btn
          color="btnColor"
          round
          light
          class="fb-btn submit-btn mb-3 black--text"
          to="/register"
        >Get Started</v-btn>
        <v-btn color="btnColor" round outline class="fb-btn submit-btn" to="/login">Log in</v-btn>
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
