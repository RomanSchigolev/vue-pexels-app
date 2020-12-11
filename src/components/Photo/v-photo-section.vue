<template>
  <section class="section__photo">
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link to="/" class="gallery__logo">PhotoGallery</router-link>
          <vFormSearch/>
        </div>
        <transition-group v-if="PRELOADER" name="fade">
          <vPreloader
            key="preloader"
            :setPreloader="true"
          />
          <vOverlay
            key="overlay"
            :setOverlay="true"
          />
        </transition-group>
        <div class="gallery__msg" v-if="ERROR_RESPONSE">
          <span>{{errorMsg}}</span>
        </div>
        <vPhotoList
          v-else
          :photoList="PHOTOS"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import vFormSearch from "@/components/FormSearch/v-form-search";
  import vPhotoList from "@/components/Photo/v-photo-list";
  import vPreloader from "@/components/Preloader/v-preloader";
  import vOverlay from "@/components/Overlay/v-overlay";

  import { mapActions, mapGetters } from "vuex";

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
      vOverlay
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
    },
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

  .fade-enter-active, .fade-leave-active {
      transition: all 0.5s ease-in-out;
  }
  
  .fade-enter, .fade-leave-to {
      opacity: 0;
  }
</style>