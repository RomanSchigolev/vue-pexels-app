<template>
  <ul class="gallery__list">
    <vPhotoItem
      v-for="photoItem in photoList"
      :key="photoItem.id"
      :photoItem="photoItem"
    />
  </ul>
</template>

<script>
  import vPhotoItem from "@/components/Photo/v-photo-item";

  export default {
    name: "v-photo-list",
    props: {
      photoList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      vPhotoItem
    }
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