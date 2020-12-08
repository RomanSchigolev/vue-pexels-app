<template>
  <div id="app">
    <vHeader/>
    <keep-alive>
      <main>
        <router-view/>
      </main>
    </keep-alive>
    <vFooter/>
  </div>
</template>

<script>
  import vHeader from "@/components/Header/v-header";
  import vFooter from "@/components/Footer/v-footer";

  export default {
    name: "app",
    components: {
      vFooter,
      vHeader
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: $mainFont;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
