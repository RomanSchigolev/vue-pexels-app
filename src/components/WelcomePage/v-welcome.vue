<template>
  <section>
    <div class="container">
      <div class="welcome">
        <p class="welcome__title">Hi! This is my Vue.js app</p>
        <div class="welcome__photo">
          <img src="../../assets/logo.png" alt="Vue.js logo"/>
          <span>&plus;</span>
          <img src="../../assets/pexels_logo.png" alt="Pexels logo"/>
        </div>
        <p class="welcome__subtitle">This app uses the Pexels API</p>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "v-welcome"
  };
</script>
<style lang="scss" scoped>
  .welcome {
    padding: 2.5vmax;
    background-color: $accentColor;
    border-radius: 10px;
    box-shadow: 0 0 7px 2px #211f1f;
    text-align: center;

    &__title,
    &__subtitle {
      font-size: 3.5vmax;
      font-weight: 700;
      letter-spacing: 2px;
    }

    &__photo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2vmax 0;

      & img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      & span {
        color: #ffffff;
        font-size: 50px;
        font-weight: 700;
        margin: 0 1.5vmax;
      }
    }
  }
</style>