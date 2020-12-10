<template>
  <section class="section__photo">
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link to="/" class="gallery__logo">PhotoGallery</router-link>
          <vFormSearch/>
        </div>
        <transition name="fade">
          <div v-if="PHOTOS.length === 0">
            <vPreloader :setPreloader="true"/>
            <vOverlay :setOverlay="true"/>
          </div>
        </transition>
        <vPhotoList
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
        "PHOTOS"
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
  }

  .fade-enter-active, .fade-leave-active {
      transition: all 0.5s ease-in-out;
  }
  
  .fade-enter, .fade-leave-to {
      opacity: 0;
  }
</style>