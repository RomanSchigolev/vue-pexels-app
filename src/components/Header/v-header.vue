<template>
  <header>
    <div class="container">
      <nav class="menu">
        <ul class="menu__list">
          <li
            class="menu__item"
            v-for="menuItem in menuItems"
            :key="menuItem.title"
          >
            <router-link
              class="menu__link"
              :to="menuItem.url"
              exact-active-class="menu__link--active"
            >
              {{ menuItem.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "v-header",
    data() {
      return {
        menuItems: [
          {title: "Home", url: "/"},
          {title: "Photo", url: "/photo"},
          {title: "Video", url: "/video"}
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .menu {
    &__list {
      display: flex;
    }

    &__item:not(:last-child) {
      margin-right: 24px;
    }

    &__link {
      position: relative;
      display: inline-block;
      color: #a5a5a5;
      text-decoration: none;
      transition: color 0.3s linear;
      font-size: 2.5vmax;
      font-weight: 700;
      letter-spacing: 2px;

      &::after {
        @extend %underlineLink;
        background-color: $secondColor;
      }

      &:hover {
        color: $secondColor;
      }

      &--active {
        color: $secondColor;

        &::after {
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
</style>