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
