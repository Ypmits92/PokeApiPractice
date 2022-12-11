import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/Home.vue";
import ListAllPokemon from "@/views/ListAllPokemon/ListAllPokemon.vue";
// @ts-ignore
import PokemonDetail from '@/views/PokemonDetail/PokemonDetail.vue';

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
    {
      name: "detail",
      path: "/all/:id",
      component: PokemonDetail,
      props: (route) => {
        // @ts-ignore
        const id = Number.parseInt(route.params.id) + 1;
        return { id }
      }
    }
  ],
  linkActiveClass: "nav-item is-active",
  strict: true
})

export default router
