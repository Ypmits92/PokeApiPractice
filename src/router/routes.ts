import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/Home.vue";
import ListAllPokemon from "@/views/ListAllPokemon/ListAllPokemon.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/home",
      alias: "/",
      component: Home
    },
    {
      name: "all",
      path: "/all",
      component: ListAllPokemon
    },
  ],
  linkActiveClass: "nav-item is-active",
  strict: true
})

export default router
