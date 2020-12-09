<template>
  <section class="section__photo">
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link to="/" class="gallery__logo">PhotoGallery</router-link>
          <vFormSearch/>
        </div>
        <vPhotoList/>
      </div>
    </div>
  </section>
</template>

<script>
  import vFormSearch from "@/components/FormSearch/v-form-search";
  import vPhotoList from "@/components/Photo/v-photo-list";

  export default {
    name: "v-photo-section",
    components: {
      vFormSearch,
      vPhotoList,
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
  }
</style>