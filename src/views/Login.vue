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
            name="fname"
            type="text"
            label="First Name"
            placeholder="Just your personal name"
          ></v-text-field>
          <v-text-field
            box
            background-color="white"
            name="phone"
            type="text"
            label="Phone Number"
            placeholder="A real phone number"
          ></v-text-field>
          <v-text-field
            box
            background-color="white"
            name="phone"
            type="password"
            label="Password"
            placeholder="Something simple you'll remember"
          ></v-text-field>
          <v-btn round color="secondary" class="black--text submit-btn">Get Started</v-btn>
        </v-form>
        <router-link to="/" class="white--text">Want to Use Facebook Instead?</router-link>
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
