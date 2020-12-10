<template>
  <div 
    class="gallery__preloader" 
    :class="{active: setPreloader}"></div>
</template>

<script>
  export default {
    name: "v-preloader",
    props: {
      setPreloader: {
        type: Boolean,
        default() {
          return false;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .gallery__preloader {
    width: 140px;
    height: 140px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    // transition: all 0.5s ease-in-out;
    max-width: 100%;
    z-index: 103;

    &.active {
      transform: translate(-50%, -50%) scale(1);
    }

    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 124px;
      height: 124px;
      border-radius: 50%;
      border: 6px solid $accentColor;
      border-color: $accentColor transparent $accentColor transparent;
      animation: gallery__preloader 1.2s linear infinite;
    }
  }

  @keyframes gallery__preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>