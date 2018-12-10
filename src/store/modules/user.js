/* eslint-disable */
import api from "../../api";
const state = {
  user: {},
  latitude: "",
  longitude: "",
};

const getters = {
  getUser(state) {
    return state.user;
  },
};

const mutations = {
  setCurrentUser(state, user) {
    state.user = {
      userID: user.uid,
      email: user.email,
      name: user.displayName,
      pic: user.photoURL,
    };
  },
  saveUserLocation(state, { latitude, longitude }) {
    state.latitude = latitude;
    state.longitude = longitude;
    console.log(`Latitude: ${latitude} and Longitude: ${longitude}`);
  },
};

const actions = {
  async login({ commit }, data) {
    const loginResponse = await api.userLogin(data);
    // console.log("login:\n ", loginResponse);
    commit("setCurrentUser", loginResponse.user);
  },
  async googleLogin({ commit }) {
    const loginResponse = await api.userGoogleLogin();
    console.log("login:\n ", loginResponse);
    commit("setCurrentUser", loginResponse.user);
  },
  async fetchUserProfile({ commit }) {
    return state.user;
  },
  async register({ commit }, data) {
    const registrationResponse = await api.userRegister(data);
    // console.log("registration response:\n", registrationResponse);
    commit("setCurrentUser", registrationResponse.user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
