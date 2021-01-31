import axios from 'axios';

export default {
  async GET_VIDEOS({ commit }) {
    try {
      commit('SET_PRELOADER');
      const videoList = await axios.get('https://api.pexels.com/videos/popular?page=1&per_page=12', {
        headers: {
          Authorization: process.env.VUE_APP_API_KEY
        }
      });
      commit('SET_VIDEOS', videoList.data.videos);
      return videoList;
    } catch (err) {
      if (err.response) {
        commit('SET_ERROR_RESPONSE', true);
      } else if (err.request) {
        console.log(err.request);
      }
    } finally {
      commit('REMOVE_PRELOADER');
    }
  }
};
