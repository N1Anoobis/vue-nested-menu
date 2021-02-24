import Vue from "vue";
import Vuex from "vuex";
// import { genres, bands, musicians } from "../mockedAPI/BackendData";
// import { Genre } from "../mockedAPI/interfaces";
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
      // const data = genres.map((genre: Genre) => {
      //   return {
      //     id: 1,
      //     title: genre.name,
      //     isOpen:
      //       id === 1
      //         ? genre.name === title
      //           ? true
      //           : false
      //         : id === 2 && title.includes(genre.name)
      //         ? true
      //         : false,
      //     subnav: bands
      //       .filter((b) => genre.bands.includes(b.id))
      //       .map((band) => {
      //         return {
      //           id: 2,
      //           title: band.name,
      //           isOpen:
      //             id === 2
      //               ? band.name === title
      //                 ? true
      //                 : false
      //               : id === 3 && title.includes(band.name)
      //               ? true
      //               : false,
      //           subnav: musicians
      //             .filter((m) => band.musicians.includes(m.id))
      //             .map((musician) => {
      //               return {
      //                 id: 3,
      //                 title: musician.name,
      //               };
      //             }),
      //         };
      //       }),
      //   };
      // });
      context.commit("loadDataToStore", data);

      // return data;
    },
  },
  modules: {},
});
