export default {
  SET_PHOTOS: (state, photoList) => (state.photoList = photoList),
  ADD_NEW_PHOTOS: (state, morePhotoList) => state.photoList.push(...morePhotoList),
  SET_SEARCH_QUERY: (state, query) => (state.searchQuery = query),
  SET_ERROR_RESPONSE: (state, error) => (state.error = error),
  SET_PRELOADER: (state) => (state.preloader = true),
  REMOVE_PRELOADER: (state) => (state.preloader = false)
};
