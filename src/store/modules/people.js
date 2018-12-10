import api from "../../api";
const state = {
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
    let allPeople = [];
    const peopleAround = await api.peopleDetails();
    peopleAround.forEach(person => {
      allPeople.push(person.data().data);
    });
    commit("setPeopleDetails", allPeople);
  },
  // eslint-disable-next-line
  async addPerson({ commit }, data) {
    await api.createPerson(data);
    alert("Profile Updated!");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
