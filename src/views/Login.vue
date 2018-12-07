<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <v-layout row wrap align-center justify-center text-xs-center>
      <Logo/>
      <v-flex xs12>
        <v-form>
          <v-text-field box color="white" name="fname" label="First Name"></v-text-field>
        </v-form>
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
