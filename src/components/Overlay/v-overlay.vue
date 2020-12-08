<template>
  <div class="gallery__overlay"></div>
</template>

<script>
  export default {
    name: "v-overlay"
  }
</script>

<style scoped lang="scss">
  .gallery__overlay {
    opacity: 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    pointer-events: none;
    transition: all 0.5s ease-in-out;

    &--active {
      opacity: 1;
      pointer-events: all;
      z-index: 102;
    }
  }
</style>