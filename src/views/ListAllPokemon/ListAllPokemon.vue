<script>
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
  }
}
</script>

<template>
  <h1 class="title is-2">List of all Pokemon</h1>
  <ul>
    <li v-for="pokemon in pokemons">{{pokemon.name}}</li>
  </ul>
</template>

<style scoped>

</style>