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
        <vPreloader :isActive="PRELOADER"/>
        <div
          class="gellery__msg"
          v-if="ERROR_RESPONSE"
        >
          <span>{{errorMsg}}</span>
        </div>
        <div v-else-if="VIDEOS.length">
          <vVideoList :videoList="VIDEOS"/>
          <vLoadMore
            v-model="pageIndex"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vFormSearch from "@/components/FormSearch/v-form-search";
  import vVideoList from "@/components/Video/v-video-list";
  import vPreloader from "@/components/Preloader/v-preloader";
  import vLoadMore from "@/components/LoadMore/v-load-more";

  import {mapActions, mapGetters} from "vuex";

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
      vVideoList,
      vPreloader,
      vLoadMore
    },
    methods: {
      ...mapActions([
        "GET_VIDEOS"
      ])
    },
    computed: {
      ...mapGetters([
        "VIDEOS",
        "ERROR_RESPONSE",
        "PRELOADER"
      ])
    },
    mounted() {
      this.GET_VIDEOS();
    },
  }
</script>
