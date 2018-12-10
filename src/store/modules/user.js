import api from "../../api";
const state = {
  user: {},
  latitude: "",
  longitude: ""
};

const getters = {
  getUser(state) {
    return state.user;
  }
};

const mutations = {
  setCurrentUser(state, user) {
    state.user = {
      userID: user.uid,
      email: user.email,
      name: user.displayName,
      pic: user.photoURL
    };
  },
  saveUserLocation(state, { latitude, longitude }) {
    state.latitude = latitude;
    state.longitude = longitude;
  }
};

const actions = {
  async login({ commit }, data) {
    const loginResponse = await api.userLogin(data);
    commit("setCurrentUser", loginResponse.user);
  },
  // eslint-disable-next-line
  async logout({ commit }) {
    return await api.userLogout();
  },
  async googleLogin({ commit }) {
    const loginResponse = await api.userGoogleLogin();
    commit("setCurrentUser", loginResponse.user);
  },
  // eslint-disable-next-line
  async fetchUserProfile({ commit }) {
    return state.user;
  },
  async register({ commit }, data) {
    const registrationResponse = await api.userRegister(data);
    commit("setCurrentUser", registrationResponse.user);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
