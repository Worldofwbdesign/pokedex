import axios from 'axios'

const API_URL = 'http://pokeapi.co/api/v1/'
const V2_API_URL = 'http://pokeapi.co/api/v2/'

const API = {
  fetchPokemonsList: () =>
    axios.get(`${API_URL}pokedex/1/`)
      .then((res) => {
        return res.data.pokemon
      }),

  fetchCurrentPokemon: (id) =>
    axios.get(`${API_URL}pokemon/${id}/`)
      .then((res) => {
        return res.data
      }),

  fetchPokemonTypes: (id) =>
    axios.get(`${API_URL}type?limit=0`)
      .then((res) => {
        return res.data.objects
      }),

  fetchTypeList: (type) =>
    axios.get(`${V2_API_URL}type/${type}/`)
      .then((res) => {
        return res.data.pokemon
      }),

  filterPokemons: (pokemons, searchText) => {
    let filteredPokemons = pokemons

    // Filter by searchText
    if (searchText.length > 1) {
      filteredPokemons = filteredPokemons.filter((pokemon) => {
        const text = pokemon.name.toLowerCase()
        return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1
      })
    }

    return filteredPokemons
  },

  mapPokemonsTypeList: (pokemons) =>
    pokemons.map((pokemon) => {
      const mappedPokemon = pokemon.pokemon
      mappedPokemon.resource_uri = mappedPokemon.url
      delete mappedPokemon.url
      return mappedPokemon
    })
}

export default API
