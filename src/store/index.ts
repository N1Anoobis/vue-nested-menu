import Vue from "vue";
import Vuex from "vuex";
import { genres, bands, musicians } from "../mockedAPI/BackendData";
import { NavigationItem, Genre } from "../mockedAPI/interfaces";

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
      state.navigation = data;
    },
  },
  actions: {
    getData(context): NavigationItem[] {
      const data = genres.map((genre: Genre) => {
        return {
          title: genre.name,
          open: false,
          subnav: bands
            .filter((b) => genre.bands.includes(b.id))
            .map((band) => {
              return {
                title: band.name,
                open: false,
                subnav: musicians
                  .filter((m) => band.musicians.includes(m.id))
                  .map((musician) => {
                    return {
                      title: musician.name,
                    };
                  }),
              };
            }),
        };
      });
      context.commit("loadDataToStore", data);
      return data;
    },
  },
  modules: {},
});
