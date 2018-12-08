<template>
  <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="secondary">
    <v-btn color="black" value="feed">
      <span>Feed</span>
      <img src="../assets/icons/feed.svg" alt="Feed Icon">
    </v-btn>

    <v-btn color="black" value="profile">
      <span>Profile</span>
      <img src="../assets/icons/user.svg" alt="User Icon">
    </v-btn>

    <v-btn color="black" value="Notifications">
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
  }
};
</script>
