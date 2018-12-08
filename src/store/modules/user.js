/* eslint-disable */

import api from "../../api"
const state = {
  user: ""
};

const getters = {
  getLogin(state) {
    return state.user;
  }
};

const mutations = {
  setCurrentUser(state, user) {
    state.user = user;
  }
};

const actions = {
  async login({ commit }, data) {
    const loginResponse = await api.userLogin(data)
    console.log("login:\n ", loginResponse)
    commit("setCurrentUser", loginResponse.user)
  },
  async fetchUserProfile({ commit }) {
    return state.user
  },
  async register({ commit }, data) {
    const registrationResponse = await api.userRegister(data)
    console.log("registration response:\n", registrationResponse)
    commit("setCurrentUser", registrationResponse.user)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}