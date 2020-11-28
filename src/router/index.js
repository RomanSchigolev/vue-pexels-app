import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/v-home")
    },
    {
      path: "/photo",
      name: "Photo",
      component: () => import("@/views/v-photo")
    },
    {
      path: "/video",
      name: "Video",
      component: () => import("@/views/v-video")
    },
    {
      path: "/page-not-found",
      alias: "*",
      component: () => import("@/views/v-404")
    }
  ]
});
