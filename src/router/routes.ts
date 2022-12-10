import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/home",
      alias: "/",
      component: Home
    },
  ],
  linkActiveClass: "nav-item is-active",
  strict: true
})

export default router
