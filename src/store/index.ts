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
    changeIsOpenStatus: (state, item) => {
      item.isOpen = !item.isOpen;
    }
  },
  actions: {
    getData(context): NavigationItem[] {
      const data = genres.map((genre: Genre) => {
        return {
          id: 0,
          title: genre.name,
          isOpen: false,
          subnav: bands
            .filter((b) => genre.bands.includes(b.id))
            .map((band) => {
              return {
                id: 1,
                title: band.name,
                isOpen: false,
                subnav: musicians
                  .filter((m) => band.musicians.includes(m.id))
                  .map((musician) => {
                    return {
                      id: 2,
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
    setIsOpen(context, item) {
      context.commit("changeIsOpenStatus", item);
    },
  },
  modules: {},
});
