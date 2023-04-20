import pokemonApi from "@/api/pokemonApi"

// Creo el arreglo
const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_, index) => index + 1)
}

// Desordeno el arreglo y devuelvo los primeros 4
const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons()
        .sort(() => Math.random() - 0.5)
    return await getPokemonNames(mixedPokemons.splice(0, 4))
}

const getPokemonNames = async (pokemons = []) => {
    const promesasArr = pokemons.map((id) => {
        return pokemonApi.get(`/${id}`);
    });

    const respuestas = await Promise.all(promesasArr);

    return respuestas.map((rta) => ({
        name: rta.data.name,
        id: rta.data.id,
    }));
}

export default getPokemonOptions