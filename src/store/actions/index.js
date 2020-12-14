import axios from "axios";

export default {
  async GET_PHOTOS({ commit }) {
    try {
      commit("SET_PRELOADER");
      const photoList = await axios.get(`https://api.pexels.com/v1/curated?page=1&per_page=12`, {
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
  async LOAD_MORE_PHOTOS({ commit, getters }, pageIndex) {
    try {
      commit("SET_PRELOADER");
      if (!getters.SEARCH_QUERY) {
        const morePhotoList = await axios.get(`https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=12`, {
          headers: {
            Authorization: process.env.VUE_APP_API_KEY
          }
        });
        commit("ADD_NEW_PHOTOS", morePhotoList.data.photos);
        return morePhotoList;
      } else {
        const searchedPhotoList = await axios.get(`https://api.pexels.com/v1/search?query=${getters.SEARCH_QUERY}&page=${pageIndex}&per_page=12`, {
          headers: {
            Authorization: process.env.VUE_APP_API_KEY
          }
        });
        commit("ADD_NEW_PHOTOS", searchedPhotoList.data.photos);
        return searchedPhotoList;
      }
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
  async GET_SEARCHED_PHOTOS({ commit }, searchQuery) {
    try {
      commit("SET_SEARCH_QUERY", searchQuery);
      commit("SET_PRELOADER");
      const searchedPhotoList = await axios.get(`https://api.pexels.com/v1/search?query=${searchQuery}&page=1&per_page=12`, {
        headers: {
          Authorization: process.env.VUE_APP_API_KEY
        }
      });
      if (searchedPhotoList.data.total_results === 0) {
        commit("SET_ERROR_RESPONSE", true);
        commit("SET_PHOTOS", []);
        return searchedPhotoList;
      } else {
        commit("SET_ERROR_RESPONSE", false);
        commit("SET_PHOTOS", searchedPhotoList.data.photos);
        return searchedPhotoList;
      }
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
}