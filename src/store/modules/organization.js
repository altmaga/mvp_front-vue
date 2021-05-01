import axios from "axios";

const apiUrl = `${process.env.VUE_APP_API_URL}/api/`;

const state = () => ({
  allOrganization: [],
  oneOrganization: null
});

const mutations = {
  setAllOrganization(state, val){
    state.allOrganization = val;
  },
  setOneOrganization(state, val){
    state.oneOrganization = val;
  }
}

const actions = {
  async fetchAllOrganization({ commit }){
    const data = await axios.get(`${apiUrl}organization`);
    console.log(data.data.data);
    commit("setAllOrganization", data.data.data);
  },
  async fetchOneOrganization({ commit }, id){
    const data = await axios.get(`${apiUrl}organization/${id}`);
    commit("setOneOrganization", data.data.data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}