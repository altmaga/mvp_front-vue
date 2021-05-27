import axios from "axios";

const apiUrlAuth = `${process.env.VUE_APP_API_URL}/auth/`;

const state = () => ({
  userInfo: null
});

const mutations = {
  setUserInfo(state, val){
    state.userInfo = val;
  }
}

const actions = {
  async fetchOneUserInfo({commit}){
    const data = await axios.get(`${apiUrlAuth}me`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      }
    );
    commit("setUserInfo", data.data.data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}