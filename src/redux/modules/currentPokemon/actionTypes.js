import { createTypes, async } from 'redux-action-types'

const types = createTypes('pokemons/currentPokemon/',
  'CURRENT_POKEMON_REQUEST',
  async('CURRENT_POKEMON')
)

export default types
