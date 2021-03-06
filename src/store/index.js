import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { authStore } from "./auth.store";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    auth: authStore
  },
  plugins: [vuexLocal.plugin]
});
