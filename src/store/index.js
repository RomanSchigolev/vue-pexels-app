import Vue from 'vue';
import Vuex from 'vuex';

import video from './modules/video/index';
import photo from './modules/photo/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    preloader: false
  },
  mutations: {
    SET_PRELOADER: (state) => state.preloader = true,
    REMOVE_PRELOADER: (state) => state.preloader = false
  },
  getters: {
    PRELOADER: (state) => state.preloader
  },
  modules: {
    photo,
    video
  }
});
