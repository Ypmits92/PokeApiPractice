<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      pokemon: {},
      imageUrl: "",
      currentId: this.id,
      isPreviousDisabled: false,
      isNextDisabled: false
    }
  },
  async mounted() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.currentId);
    this.pokemon = await response.json();

    const getImgUrl = await fetch("https://pokeapi.co/api/v2/pokemon-form/" + this.currentId);
    const getImgUrlResult = await getImgUrl.json();
    this.imageUrl = getImgUrlResult.sprites.front_default;

    this.isPreviousDisabled = this.currentId <= 1;
    this.isNextDisabled = this.currentId >= 151;
  },
  methods: {
    async previous() {
      if (this.currentId > 1) {
        this.currentId--;

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.currentId);
        this.pokemon = await response.json();

        const getImgUrl = await fetch("https://pokeapi.co/api/v2/pokemon-form/" + this.currentId);
        const getImgUrlResult = await getImgUrl.json();
        this.imageUrl = getImgUrlResult.sprites.front_default;
      }
    },
    async next() {
      if (this.currentId < 151) {
        this.currentId++;

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.currentId);
        this.pokemon = await response.json();

        const getImgUrl = await fetch("https://pokeapi.co/api/v2/pokemon-form/" + this.currentId);
        const getImgUrlResult = await getImgUrl.json();
        this.imageUrl = getImgUrlResult.sprites.front_default;
      }
    }
  },
  watch: {
    currentId() {
      this.isPreviousDisabled = this.currentId <= 1;

      this.isNextDisabled = this.currentId >= 151;
    }
  }
}
</script>

<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <button
          :class="isPreviousDisabled ? 'button is-disabled' : 'button is-danger'"
          @click="previous">Previous</button>
    </div>
    <div class="column is-one-third">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="this.imageUrl" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="this.imageUrl" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{this.pokemon.name}}</p>
              <table>
                <tr>
                  <td
                      v-for="type in this.pokemon.types"
                      class="subtitle is-6"
                      style="padding-right: 10px">{{type.type.name}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="content">
            <strong>Base stats</strong>
            <table class="table">
              <thead>
              <tr>
                <th v-for="stat in this.pokemon.stats">{{ stat.stat.name }}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td v-for="stat in this.pokemon.stats">{{ stat.base_stat }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="content">
            <table class="table">
              <thead>
              <tr>
                <th>Base experience</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{ this.pokemon.base_experience }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="content">
            <table class="table">
              <thead>
              <tr>
                <th>Weight</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{ this.pokemon.weight }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-third">
      <button
          @click="next"
          :class="isNextDisabled ? 'button is-disabled' : 'button is-success'">Next</button>
    </div>
  </div>
</template>

<style scoped>

</style>