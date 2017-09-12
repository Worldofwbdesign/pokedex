import axios from 'axios'

const API_URL = 'http://pokeapi.co/api/v2/'

const API = {
  fetchPokemonsList: () =>
    axios.get(`${API_URL}pokemon/1/`)
      .then((res) => {
        return res
      })
}

export default API
