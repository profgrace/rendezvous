import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import people from "./modules/people";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    people
  },
  state: {},
  mutations: {},
  actions: {}
});
