<template>
  <footer>
    <div class="container">
      <a class="pexels__link" href="https://www.pexels.com" target="_blank">
        <img class="pexels__img" alt="pexels logo" src="https://images.pexels.com/lib/api/pexels.png"/>
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "v-footer"
  };
</script>

<style lang="scss" scoped>
  footer {
    margin-top: auto;
  }

  .pexels__link {
    display: block;
    max-width: 90px;
  }

  .pexels__img {
    display: block;
    width: 90px;
    height: auto;
  }
</style>