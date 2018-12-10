<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <!-- <p>{{title}}</p> -->
    <ToolBar :title="title"/>
    <router-view/>
    <BottomNav @new-title="changeTitle"/>
  </v-container>
</template>

<script>
/* eslint-disable */
import Bg from "../components/Bg";
import ToolBar from "../components/ToolBar";
import BottomNav from "../components/BottomNav";

import { mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    Bg,
    ToolBar,
    BottomNav
  },
  data() {
    return {
      title: "",
      msg: "",
      latitude: "",
      longitude: ""
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.sendLocation,
          this.showError
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    sendLocation(position) {
      console.log(
        `Position: ${position.coords.latitude} ${position.coords.longitude}`
      );
      // this.latitude = position.coords.latitude;
      // this.longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // this.saveUserLocation();
      this.$store.commit("user/saveUserLocation", { latitude, longitude });
    },
    // ...mapMutations("people", "saveUserLocation", {
    //   latitude: this.latitude,
    //   longitude: this.longitude
    // }),
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
      }
    }
  },
  mounted() {
    this.getLocation();
  }
};
</script>
