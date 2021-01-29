<template>
  <section class="section__video">
    <div class="container">
      <div class="gallery">
        <div class="gallery__header">
          <router-link 
            to="/video" 
            class="gallery__logo"
          >
            Video Gallery
          </router-link>
          <vFormSearch 
            v-model="searchQuery"
            placeHolder="Search Videos"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vFormSearch from "@/components/FormSearch/v-form-search";
  import vPreloader from "@/components/Preloader/v-preloader";
  import vLoadMore from "@/components/LoadMore/v-load-more";

  export default {
    name: "v-video-section",
        data() {
      return {
        errorMsg: "something terrible happened",
        searchQuery: "",
        pageIndex: 1
      }
    },
    components: {
      vFormSearch,
      vPreloader,
      vLoadMore
    }
  }
</script>
