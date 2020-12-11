import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: [],
    pageIndex: 1,
    error: false,
    preloader: null
  },
  mutations: {
    SET_PHOTOS: (state, photoList) => state.photoList = photoList,
    INCREASE_PAGE_INDEX: state => state.pageIndex++,
    ADD_NEW_PHOTOS: (state, morePhotoList) => state.photoList.push(...morePhotoList),
    SET_ERROR_RESPONSE: (state, error) => state.error = error,
    SET_PRELOADER: state => state.preloader = true,
    REMOVE_PRELOADER: state => state.preloader = false
  },
  actions: {
    async GET_PHOTOS({commit, getters}) {
      try {
        commit("SET_PRELOADER");
        const photoList = await axios.get(`https://api.pexels.com/v1/curated?page=${getters.PAGE_INDEX}&per_page=18`, {
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
          console.log(err.request);
        }
      } finally {
        commit("REMOVE_PRELOADER");
      }
    },
    async LOAD_MORE_PHOTOS({commit, getters}) {
      try {
        commit("SET_PRELOADER");
        commit("INCREASE_PAGE_INDEX");
        const morePhotoList = await axios.get(`https://api.pexels.com/v1/curated?page=${getters.PAGE_INDEX}&per_page=18`, {
          headers: {
            Authorization: process.env.VUE_APP_API_KEY
          }
        });
        commit("ADD_NEW_PHOTOS", morePhotoList.data.photos);
        return morePhotoList;
      } catch (err) {
        if (err.response) {
          commit("SET_ERROR_RESPONSE", true);
        } else if (err.request) {
          console.log(err.request);
        }
      } finally {
        commit("REMOVE_PRELOADER");
      }
    }
  },
  getters: {
    PHOTOS: state => state.photoList,
    ERROR_RESPONSE: state => state.error,
    PRELOADER: state => state.preloader,
    PAGE_INDEX: state => state.pageIndex
  }
})
