import api from "../../api";
const state = {
  //   people: [
  //     {
  //       id: "bsdhj87327823",
  //       pic: require("../../assets/icons/user.svg"),
  //       firstName: "Grace",
  //       lastName: "Adewumi",
  //       email: "grace@gmail.com",
  //       phone: "09027636772",
  //       interests: ["Coding", "Dancing", "Swimming"]
  //     },
  //     {
  //       id: "bsdhj873278j3",
  //       pic: require("../../assets/icons/user.svg"),
  //       firstName: "Jeph",
  //       lastName: "Sadare",
  //       email: "jeph@gmail.com",
  //       phone: "08023767292",
  //       interests: ["Reading", "Writing", "Dancing"]
  //     }
  //   ]
  people: []
};

const getters = {
  getPeople(state) {
    return state.people;
  }
};

const mutations = {
  setPeopleDetails(state, people) {
    state.people = people;
  }
};

const actions = {
  async getPeopleAround({ commit }) {
    const peopleAround = await api.peopleDetails();
    // eslint-disable-next-line
    console.log("people:\n ", peopleAround);
    commit("setPeopleDetails", peopleAround);
  },
  // eslint-disable-next-line
  async addPerson({ commit }, data) {
    const personResponse = await api.createPerson(data);
    // eslint-disable-next-line
    console.log("person response:\n", personResponse);
    // commit("setCurrentUser", personResponse);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
