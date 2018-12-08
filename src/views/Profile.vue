<template>
  <v-form class="mb-5">
    <v-layout row wrap>
      <v-flex xs3 class="profile-pic">
        <v-avatar size="60">
          <img src="../assets/icons/user.svg" alt="Upload Profile Picture">
          <div class="upload-img">
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
          v-model="firstname"
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
      v-model="lastname"
    ></v-text-field>
    <v-text-field
      box
      background-color="white"
      name="phone"
      type="text"
      label="Email Address"
      placeholder="Your email address here. . ."
      v-model="email"
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
    <v-btn
      round
      color="btnColor"
      class="black--text submit-btn"
      @click="changeTitle('Profile')"
    >Done</v-btn>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      firstname: "",
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
  methods: {
    changeTitle(title) {
      this.$emit("new-title", title);
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
