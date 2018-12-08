<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <p>{{ msg }}</p>
    <router-view @message="setMessage"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    setMessage(msg) {
      this.msg = msg;
    }
  }
};
</script>
