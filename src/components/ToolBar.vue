<template>
  <v-toolbar app fixed>
    <v-toolbar-title class="subheading font-weight-medium">
      <span>{{title}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat class="logout" @click="logout">
      <span class="mr-2 font-weight-medium burntRed--text">Logout</span>
      <img src="../assets/icons/logout.svg" alt="Logout Icon">
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  props: ["title"],
  methods: {
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.replace("splash");
      });
    }
  }
};
</script>
