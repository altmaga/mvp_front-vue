import axios from "axios";

const apiUrl = `${process.env.VUE_APP_API_URL}/api/`;

const state = () => ({
  allCategory: [],
  oneCategory: null
});

const mutations = {
  setAllCategory(state, val){
    state.allCategory = val;
  },
  setOneCategory(state, val){
    state.oneCategory = val;
  }
}

const actions = {
  async fetchAllCategory({ commit }){
    const data = await axios.get(`${apiUrl}category`);
    console.log(data.data.data);
    commit("setAllCategory", data.data.data);
  },
  async fetchOneCategory({ commit }, id){
    const data = await axios.get(`${apiUrl}category/${id}`);
    commit("setOneCategory", data.data.data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}