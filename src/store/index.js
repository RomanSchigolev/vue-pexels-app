import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: []
  },
  mutations: {
    SET_PHOTOS(state, photoList) {
      state.photoList = photoList
    }
  },
  actions: {
    async GET_PHOTOS({ commit }) {
      try {
        const photoList = await axios.get("https://api.pexels.com/v1/curated?page=1&per_page=12", {
          headers: {
            Authorization: process.env.VUE_APP_API_KEY
          }
        });
        commit("SET_PHOTOS", photoList.data.photos);
        return photoList;
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  },
  getters: {
    PHOTOS(state) {
      return state.photoList;
    }
  }
})
