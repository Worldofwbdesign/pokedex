import axios from 'axios'

const API_URL = 'http://pokeapi.co/api/v2/'

const API = {
  fetchPokemonsList: () =>
    axios.get(`${API_URL}pokemon/`)
      .then((res) => {
        return res.data.results
      })
}

export default API
