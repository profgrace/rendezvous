<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="button" v-on:click="changeMsg()">Change Message</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  method: {
    changeMsg() {
      this.$emit("message", "I changed the message");
    }
  }
};
</script>
