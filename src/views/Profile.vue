<template>
  <v-form class="my-3">
    <v-layout row wrap>
      <v-flex xs3 class="profile-pic">
        <v-avatar size="60">
          <!-- <img :src="user.pic" alt="Upload Profile Picture"> -->
          <div class="upload-img" v-if="!user.pic">
            <img src="../assets/icons/camera.svg">
          </div>
        </v-avatar>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          box
          background-color="white"
          name="phone"
          type="text"
          label="First Name"
          placeholder="Just your personal name"
          v-model="name[0]"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-text-field
      box
      background-color="white"
      name="phone"
      type="text"
      label="Last Name"
      placeholder="Your surname"
      v-model="name[1]"
    ></v-text-field>
    <v-text-field
      box
      background-color="white"
      name="phone"
      type="text"
      label="Phone Number"
      placeholder="A real phone number please. . ."
      v-model="phone"
    ></v-text-field>
    <v-select
      box
      background-color="white"
      v-model="interest"
      :items="interests"
      chips
      label="Interests"
      placeholder="Choose up to 5 interests"
      multiple
    ></v-select>
    <v-btn round color="btnColor" class="black--text submit-btn" @click="saveProfile">Done</v-btn>
  </v-form>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      lastname: "",
      email: "",
      phone: "",
      interest: "",
      interests: [
        "Coding",
        "Dancing",
        "Gaming",
        "Football",
        "Fashion",
        "Writing"
      ],
      search: null
    };
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser"
    }),
    name() {
      return this.user.name.split(" ");
    }
  },
  methods: {
    saveProfile() {
      const self = this;
      const person = {
        userID: this.user.userID,
        firstname: this.name[0],
        lastname: this.name[1],
        email: this.user.email,
        phone: this.phone,
        interest: this.interest
      };
      this.$store
        .dispatch("people/addPerson", person)
        // eslint-disable-next-line
        .then(user => {
          self.$router.push("/home");
        })
        .catch(err => {
          alert(`Oops! ${err.message}`);
        });
    }
  },
  watch: {
    interest(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.interest.pop());
      }
    }
  }
};
</script>
