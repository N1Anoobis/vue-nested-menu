import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation: [
      {
        title: "Rock",
        open: false,
        subnav: [
          {
            title: "Rock band1",
            open: false,
            subnav: [{ title: "Rock guy1" }, { title: "Rock guy2" }],
          },
          {
            title: "Rock band2",
            open: false,
            subnav: [{ title: "Rock guy3" }, { title: "Rock guy4" }],
          },
        ],
      },
      {
        title: "Pop",
        open: false,
        subnav: [
          {
            title: "Pop band1",
            open: false,
            subnav: [{ title: "Pop guy1" }, { title: "Pop guy2" }],
          },
          {
            title: "Pop band2",
            open: false,
            subnav: [{ title: "Pop guy3" }, { title: "Pop guy4" }],
          },
        ],
      },
    ],
  },
  getters: {
    navigation: (state) => {
      return state.navigation;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
