<template>
  <div class="pokemon-container">
    <Pokebola />
    <!-- v-if="!showPokemon" -->
    <img :src="imgSrc" class="hidden-pokemon" alt="pokemon" />
    <img v-if="showPokemon" :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
import Pokebola from "./Pokebola";
export default {
  components: { Pokebola },
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  name: "PokemonPicture",
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scope>
.pokemon-container {
  height: 200px;
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
img {
  position: absolute;
  height: 190px;
  z-index: 1;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>