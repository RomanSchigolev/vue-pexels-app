import Vue from 'vue';
import Vuex from 'vuex';

import mutationsForPhotos from './mutations/photo';
import mutationsForVideos from './mutations/video';
import actionsForPhotos from './actions/photoAPI';
import actionsForVideos from './actions/videoAPI';
import getters from './getters';

const actions = { ...actionsForPhotos, ...actionsForVideos };
const mutations = { ...mutationsForPhotos, ...mutationsForVideos };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: [],
    videoList: [],
    searchQuery: '',
    error: false,
    preloader: false
  },
  mutations,
  actions,
  getters
});
