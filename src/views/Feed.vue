<template>
  <v-layout column align-center justify-center>
    <v-card class="feed" height="100%" width="100%">
      <v-list two-line class="transparent px-2">
        <template v-for="user in people">
          <v-list-tile avatar :key="user.id">
            <v-list-tile-avatar>
              <img :src="user.pic" alt="User's Profile Picture">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ user.firstName }} {{user.lastName}}</v-list-tile-title>
              <v-list-tile-sub-title class="white--text">{{ user.interests.join(', ') }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon>
                <img src="../assets/icons/link.svg" alt="Link icon">
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider :key="user.id" color="#AAAAAA"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      people: []
    };
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      this.$store.dispatch("people/getPeopleAround").then(response => {
        // eslint-disable-next-line
        console.log(`Response: ${response}`);
      });
    }
  }
};
</script>
