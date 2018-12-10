<template>
  <v-layout column align-center justify-center>
    <v-card class="feed" height="100%" width="100%">
      <v-list two-line class="transparent px-2">
        <template v-for="user in people">
          <v-list-tile avatar :key="user.id">
            <v-list-tile-avatar>
              <img src="../assets/icons/user.svg" alt="User's Profile Picture">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ user.firstname }} {{user.lastname}}</v-list-tile-title>
              <v-list-tile-sub-title class="white--text">{{ user.interest.join(', ') }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon>
                <img src="../assets/icons/link.svg" alt="Link icon">
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <div :key="user.id" class="divider"></div>
        </template>
      </v-list>
    </v-card>
  </v-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("people", {
      people: "getPeople"
    })
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      this.$store.dispatch("people/getPeopleAround");
    }
  }
};
</script>
