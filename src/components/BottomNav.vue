<template>
  <v-bottom-nav app fixed :active.sync="bottomNav" :value="true" color="secondary">
    <v-btn color="black" value="feed" to="/home/feed" @click="changeTitle('My Feed')" exact>
      <span>Feed</span>
      <img src="../assets/icons/feed.svg" alt="Feed Icon">
    </v-btn>

    <v-btn
      color="black"
      value="profile"
      to="/home"
      @click="changeTitle('Complete your Profile')"
      exact
    >
      <span>Profile</span>
      <img src="../assets/icons/user.svg" alt="User Icon">
    </v-btn>

    <v-btn
      color="black"
      value="Notifications"
      to="/home/notifications"
      @click="changeTitle('Notifications')"
      exact
    >
      <span>Notifications</span>
      <img src="../assets/icons/bell.svg" alt="Notifications Icon">
    </v-btn>
  </v-bottom-nav>
</template>
<script>
export default {
  name: "BottomNav",
  data() {
    return {
      bottomNav: "profile"
    };
  },
  methods: {
    changeTitle(title) {
      this.$emit("new-title", title);
    }
  }
};
</script>
