<template>
  <div class="gallery__footer">
    <button
      type="button"
      class="gallery__btn"
      aria-label="load more"
    >
      Load more
    </button>
  </div>
</template>

<script>
  export default {
    name: "v-load-more"
  }
</script>

<style scoped lang="scss">
  .gallery__footer {
    justify-content: center;
  }

  .gallery__btn {
    padding: 1.2vmax 1.2vmax;
    text-transform: uppercase;
    background-color: $secondColor;
    border-radius: 3px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 2px;
    transition: background-color 0.4s ease;

    &:hover,
    &:focus {
      background-color: $accentColor;
    }
  }
</style>