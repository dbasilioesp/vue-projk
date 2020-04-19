import { authApi } from "@/api";

export const authStore = {
  state: {
    accessToken: null,
    currentUser: null
  },
  mutations: {
    logIn(state, { accessToken, user }) {
      state.accessToken = accessToken;
      state.currentUser = user;
    },
    logOut(state) {
      state.accessToken = null;
    }
  },
  actions: {
    async logIn({ commit }, data) {
      let result = await authApi.logIn(data);
      commit("logIn", result);
    },
    async signUp({ commit }, data) {
      await authApi.signUp(data);
      let result = await authApi.logIn(data);
      commit("logIn", result);
    },
    async logOut({ commit }) {
      try {
        await authApi.logOut();
      } catch (error) {
        console.log("User logged out.");
      }

      commit("logOut");
    }
  },
  getters: {
    userIsLogged(state) {
      return state.currentUser !== null;
    }
  }
};
