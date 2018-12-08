<template>
  <v-container fill-height fluid grid-list-md>
    <Bg/>
    <ToolBar/>
    <router-view></router-view>
    <BottomNav/>
  </v-container>
</template>

<script>
import Bg from "../components/Bg";
import ToolBar from "../components/ToolBar";
import BottomNav from "../components/BottomNav";

export default {
  name: "home",
  components: {
    Bg,
    ToolBar,
    BottomNav
  }
};
</script>
