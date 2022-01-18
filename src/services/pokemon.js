import axios from "axios";

export const getPokeList = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/");
};

export const getPokemonDetails = (pokemonName) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
};
