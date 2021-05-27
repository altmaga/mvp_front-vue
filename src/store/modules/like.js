import axios from "axios";

const apiUrl = `${process.env.VUE_APP_API_URL}/api/`;

const state = () => ({
  allLike: [],
  oneLike: null
});

const mutations = {
  setAllLike(state, val){
    state.allLike = val;
  },
  setOneLike(state, val){
    state.oneLike = val;
  }
}

const actions = {
  async createOneLike({ commit }, data) {
    console.log(data);
    await axios.post(
      `${apiUrl}like`,
      {
        ...data,
      },
      {
        withCredentials: true,
      }
    );
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}