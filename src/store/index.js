import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: [],
    searchQuery: '',
    error: false,
    preloader: false
  },
  mutations,
  actions,
  getters
});
