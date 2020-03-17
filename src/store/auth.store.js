import { authApi } from "@/api";

export const authStore = {
  state: {
    accessToken: null
  },
  mutations: {
    logIn(state, accessToken) {
      state.accessToken = accessToken;
    },
    logOut(state) {
      state.accessToken = null;
    }
  },
  actions: {
    async logIn({ commit }, data) {
      let result = await authApi.logIn(data);
      commit('logIn', result.access_token);
    },
    async logOut({ commit }) {
      try {
        await authApi.logOut();
      } catch (error) { console.log('User logged out.') }

      commit('logOut');
    }
  }
}