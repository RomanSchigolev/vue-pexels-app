<template>
  <ul class="gallery__list"></ul>
</template>

<script>
  export default {
    name: "v-list",
  }
</script>

<style lang="scss" scoped>
  .gallery {

    &__list {
      display: grid;
      grid-gap: 2vmax;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      margin: 4vmax 0;
    }

    &__item {
      position: relative;
      width: 100%;
      height: 380px;
      overflow: hidden;
      border-radius: 8px;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 0 5px 2px #645f5f;

        & .gallery__author {
          transform: translateY(0);
        }
      }

      &:hover .gallery__img {
        transform: scale(1.1);
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
      will-change: transform;
    }

    &__author {
      position: absolute;
      width: 100%;
      padding: 20px;
      bottom: 0;
      background-color: #00000057;
      color: #ffffff;
      font-weight: 300;
      transform: translateY(100%);
      transition: transform 0.4s ease;
    }

    &__msg {
      margin-top: 4vmax;
      text-align: center;

      & span {
        font-size: 2vmax;
        font-weight: 500;
      }
    }
  }
</style>