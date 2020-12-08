<template>
  <section>
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link to="/" class="gallery__logo">PhotoGallery</router-link>
          <form class="form">
            <input
              class="form__textfield"
              type="text"
              name="photoName"
              placeholder="Search image"
            />
            <button class="form__submit" type="submit">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <path
                  d="M508.875,493.792L353.089,338.005c32.358-35.927,52.245-83.296,52.245-135.339C405.333,90.917,314.417,0,202.667,0
          S0,90.917,0,202.667s90.917,202.667,202.667,202.667c52.043,0,99.411-19.887,135.339-52.245l155.786,155.786
          c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125C513.042,504.708,513.042,497.958,508.875,493.792z
            M202.667,384c-99.979,0-181.333-81.344-181.333-181.333S102.688,21.333,202.667,21.333S384,102.677,384,202.667
          S302.646,384,202.667,384z"
                />
              </svg>
            </button>
          </form>
        </div>
        <ul class="gallery__list"></ul>
        <div class="gallery__preloader"></div>
        <div class="gallery__footer">
          <button
            type="button"
            class="gallery__btn"
            aria-label="load more images"
          >
            Load more
          </button>
        </div>
        <div class="gallery__overlay"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "v-gallery",
};
</script>
<style lang="scss" scoped>
.gallery {
  &__header {
    display: flex;
    flex-direction: column;
  }

  &__logo {
    display: inline-block;
    font-size: 10vmin;
    font-weight: 900;
    letter-spacing: -1px;
    text-decoration: none;
    color: $secondColor;
  }

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

  &__footer {
    justify-content: center;
  }

  &__btn {
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

  &__preloader {
    width: 140px;
    height: 140px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.5s ease-in-out;
    max-width: 100%;
    z-index: 103;

    &--active {
      transform: translate(-50%, -50%) scale(1);
    }

    &:after {
      content: " ";
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

  &__overlay {
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
}

@keyframes gallery__preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.form {
  display: flex;
  margin-top: 1.4vmax;
  max-width: 300px;

  &__textfield {
    width: 100%;
    border-bottom: 1px solid #b3b3b3;
    color: #b3b3b3;
    padding: 0 0.5vmax;
    margin-right: 1vmax;
    font-size: 15px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    transition: border-bottom-color 0.3s ease;

    &:focus {
      border-bottom-color: #3d3d3d;
    }
  }

  &__submit svg {
    width: 18px;
  }
}
</style>