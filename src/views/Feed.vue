<template>
  <v-layout column align-center justify-center>
    <v-card class="feed" height="100%" width="100%">
      <v-list two-line class="transparent">
        <v-list-tile v-for="user in users" :key="user.id" avatar>
          <v-list-tile-avatar>
            <!-- <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon> -->
            <img :src="user.pic" alt="User's Profile Picture">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ user.name }}</v-list-tile-title>
            <v-list-tile-sub-title class="white--text">{{ user.interests.join(', ') }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon>
              <img src="../assets/icons/link.svg" alt="Link icon">
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          id: "783kldsmnsd",
          pic: require("../assets/icons/user.svg"),
          name: "Jane Doe",
          interests: ["Coding", "Singing", "Dancing"]
        }
      ]
    };
  }
};
</script>
