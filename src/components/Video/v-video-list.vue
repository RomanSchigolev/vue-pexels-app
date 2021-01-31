<template>
  <ul class="gallery__list">
    <vVideoItem
      v-for="videoItem in videoList"
      :key="videoItem.id"
      :videoItem="videoItem"
    />
  </ul>
</template>

<script>
  import vVideoItem from "@/components/Video/v-video-item";

  export default {
    name: "v-video-list",
    props: {
      videoList: {
        type: Array,
        default: []
      }
    },
    components: {
      vVideoItem
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