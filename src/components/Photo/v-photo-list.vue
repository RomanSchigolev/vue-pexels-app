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
        default: []
      }
    },
    components: {
      vPhotoItem
    }
  };
</script>
