import { createTypes, async } from 'redux-action-types'

const types = createTypes('pokemons/pokemonTypes/',
  'POKEMON_TYPES_REQUEST',
  async('POKEMON_TYPES')
)

export default types
