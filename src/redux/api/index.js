import axios from 'axios'

const API_URL = 'http://pokeapi.co/api/v1/'

const API = {
  fetchPokemonsList: () =>
    axios.get(`${API_URL}pokedex/1`)
      .then((res) => {
        return res.data.pokemon
      }),

  fetchCurrentPokemon: (id) =>
    axios.get(`${API_URL}pokemon/${id}/`)
      .then((res) => {
        return res.data
      })
}

export default API
