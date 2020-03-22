import { profileApi } from "@/api";

export const profileStore = {
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    }
  },
  actions: {
    async getProfile({ commit }, accessToken) {
      const result = await profileApi.getProfile(accessToken);
      commit('setCurrentUser', result);
    }
  },
  getters: {
    userIsLogged(state) {
      return state.currentUser !== null;
    }
  }
}