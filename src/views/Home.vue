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
import Bg from "../components/Bg";
import ToolBar from "../components/ToolBar";
import BottomNav from "../components/BottomNav";

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
      msg: ""
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    }
  }
};
</script>
