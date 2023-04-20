<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1 id="question">¿Quién es ese Pokémon?</h1>

      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

      <PokemonOptions
        :pokemons="pokemonArr"
        @selection="checkAnswer"
        v-if="!showAnswer"
      />

      <template v-else>
        <h2 class="fade-in">{{ message }}</h2>
        <button class="fade-in" @click="newGame()">Nuevo juego</button>
      </template>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      const name =
        this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
      this.message =
        (selectedId === this.pokemon.id ? "¡Correcto, " : "¡Oops, era ") +
        `${name}!`;
    },
    newGame() {
      this.pokemon = null;
      this.pokemonArr = [];
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";

      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style scope>
#question {
  font-family: "Pokemon";
  -webkit-text-stroke: 0.3px blue;
  color: #f0c61d;
  letter-spacing: 3.5px;
  line-height: 50px;
}
h2 {
  margin: 5px 0 15px 0;
}
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>