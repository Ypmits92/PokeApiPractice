<script>
import pokemonDetail from "@/views/PokemonDetail/PokemonDetail.vue";

export default {
  data() {
    return {
      offset: 0,
      limit: 20,
      pokemons: []
    }
  },
  async mounted() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=" + this.offset + "&limit=" + this.limit);
    const result = await response.json();
    this.pokemons = result.results;
  },
  methods: {
    async displayPrevious() {
      if (this.offset >= 20) {
        this.offset -= this.limit;
      } else {
        this.offset = 0;
      }

      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=" + this.offset + "&limit=" + this.limit);
      const result = await response.json();
      this.pokemons.slice();
      this.pokemons = result.results;
    },
    async displayNext() {
      if (this.offset <= 111) {
        this.offset += this.limit;
      } else {
        this.offset = 131;
      }

      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=" + this.offset + "&limit=" + this.limit);
      const result = await response.json();
      this.pokemons.slice();
      this.pokemons = result.results;
    }
  }
}
</script>

<template>
  <h1 class="title is-2">List of all Pokemon</h1>
  <ul>
    <li v-for="(pokemon, index) in pokemons"><router-link :to="{name: 'detail', params: {id: index + this.offset}}">{{pokemon.name}}</router-link></li>
  </ul>
  <button class="button is-danger" @click="displayPrevious">Previous</button>
  <button class="button is-success" @click="displayNext">Next</button>
</template>

<style scoped>

</style>