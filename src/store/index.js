import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: [],
    error: false,
    loading: false
  },
  mutations: {
    SET_PHOTOS(state, photoList) {
      state.photoList = photoList;
    },
    SET_ERROR_RESPONSE(state, error) {
      state.error = error;
    },
    SET_LOADER(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async GET_PHOTOS({commit}) {
      try {
        commit("SET_LOADER", true);
        const photoList = await axios.get("https://api.pexels.com/v1/curated?page=1&per_page=12", {
          headers: {
            Authorization: process.env.VUE_APP_API_KEY
          }
        });
        commit("SET_PHOTOS", photoList.data.photos);
        return photoList;
      } catch (err) {
        if (err.response) {
          commit("SET_ERROR_RESPONSE", true);
        } else if (err.request) {
        }
      } finally {
        commit("SET_LOADER", false);
      }
    }
  },
  getters: {
    PHOTOS(state) {
      return state.photoList;
    },
    ERROR_RESPONSE(state) {
      return state.error;
    },
    PRELOADER(state) {
      return state.loading;
    }
  }
})
