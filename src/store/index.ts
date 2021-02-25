import Vue from "vue";
import Vuex from "vuex";
import { calculate } from "../calculateData";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation: [],
  },
  getters: {
    navigation: (state) => {
      return state.navigation;
    },
  },
  mutations: {
    loadDataToStore(state, data) {
      setTimeout(() => (state.navigation = data), 100);
    },
  },
  actions: {
    getData(context, item) {
      const data = calculate(item);
      context.commit("loadDataToStore", data);
    },
  },
  modules: {},
});
