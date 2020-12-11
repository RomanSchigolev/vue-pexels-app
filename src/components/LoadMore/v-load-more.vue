<template>
  <div class="gallery__footer">
    <button
      type="button"
      class="gallery__btn"
      aria-label="load more"
      @click="loadMorePhotos"
    >
      Load more
    </button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "v-load-more",
    methods: {
      ...mapActions([
        "LOAD_MORE_PHOTOS"
      ]),
      loadMorePhotos() {
        this.LOAD_MORE_PHOTOS();
      }
    }
  };
</script>

<style scoped lang="scss">
  .gallery__footer {
    display: flex;
    justify-content: center;
  }

  .gallery__btn {
    padding: 1.2vmax 1.2vmax;
    text-transform: uppercase;
    background-color: $secondColor;
    border-radius: 3px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 2px;
    transition: background-color 0.4s ease;

    &:hover,
    &:focus {
      background-color: $accentColor;
    }
  }
</style>