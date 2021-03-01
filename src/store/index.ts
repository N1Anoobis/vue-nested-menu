import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { calculate } from "../calculateData";
import { RootState } from "./types";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
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
      state.navigation = data;
    },
  },
  actions: {
    getData(context, item) {
      const data = calculate(item);
      context.commit("loadDataToStore", data);
    },
  },
  modules: {},
};

export default new Vuex.Store<RootState>(store);
