<template>
  <ul class="gallery__list">
    <vPhotoItem/>
  </ul>
</template>

<script>
  import vPhotoItem from "@/components/Photo/v-photo-item";
  import { mapActions } from "vuex";

  export default {
    name: "v-photo-list",
    components: {
      vPhotoItem
    },
    methods: {
      ...mapActions([
        "GET_PHOTOS"
      ])
    },
    mounted() {
      this.GET_PHOTOS();
    },
  }
</script>

<style scoped lang="scss">
  .gallery__list {
    display: grid;
    grid-gap: 2vmax;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 4vmax 0;
  }
</style>