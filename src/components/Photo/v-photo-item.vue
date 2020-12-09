<template>
  <li class="gallery__item">
    <router-link
      class="gallery__link"
      target="_blank"
      to="#"
    >
      <img
        src="https://via.placeholder.com/400x700"
        alt="Test"
        class="gallery__img">
      <h3 class="gallery__author">Somebody</h3>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: "v-photo-item"
  }
</script>

<style scoped lang="scss">
  .gallery {
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
  }
</style>