<template>
  <v-form>
    <v-text-field
      box
      background-color="white"
      type="text"
      label="Email Address"
      placeholder="Your personal email address"
      v-model="userEmail"
    ></v-text-field>
    <v-text-field
      box
      background-color="white"
      type="password"
      label="Password"
      placeholder="Something simple you'll remember"
      v-model="userPassword"
    ></v-text-field>
  </v-form>    
</template>
<style lang="sass" scoped>

</style>
<script>
/* eslint-disable */
export default {
  props: ["email", "password"],
  data: function () {
    return {
      userEmail: this.email,
      userPassword: this.password
    }
  },
  watch: {
    userEmail (value) {
      this.$emit("email", value)
    },
    userPassword (value) {
      this.$emit("password", value)
    }
  }
}
</script>
