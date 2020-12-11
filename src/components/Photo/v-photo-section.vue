<template>
  <section class="section__photo">
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link to="/" class="gallery__logo">PhotoGallery</router-link>
          <vFormSearch/>
        </div>
        <vPreloader :isActive="PRELOADER"/>
        <div class="gallery__msg" v-if="ERROR_RESPONSE">
          <span>{{errorMsg}}</span>
        </div>
        <div v-else-if="PHOTOS.length">
          <vPhotoList
            :photoList="PHOTOS"
          />
          <vLoadMore/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vFormSearch from "@/components/FormSearch/v-form-search";
  import vPhotoList from "@/components/Photo/v-photo-list";
  import vPreloader from "@/components/Preloader/v-preloader";
  import vLoadMore from "@/components/LoadMore/v-load-more";

  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "v-photo-section",
    data() {
      return {
        errorMsg: "something terrible happened"
      }
    },
    components: {
      vFormSearch,
      vPhotoList,
      vPreloader,
      vLoadMore
    },
    methods: {
      ...mapActions([
        "GET_PHOTOS"
      ])
    },
    computed: {
      ...mapGetters([
        "PHOTOS",
        "ERROR_RESPONSE",
        "PRELOADER"
      ])
    },
    mounted() {
      this.GET_PHOTOS()
    }
  }
</script>

<style scoped lang="scss">
  .gallery {
    &__header {
      display: flex;
      flex-direction: column;
    }

    &__logo {
      display: inline-block;
      font-size: 10vmin;
      font-weight: 900;
      letter-spacing: -1px;
      text-decoration: none;
      color: $secondColor;
    }

    &__msg {
      text-align: center;
      margin-top: 6vmax;

      span {
        font-size: 2.5vmax;
        text-transform: uppercase;
      }
    }
  }
</style>