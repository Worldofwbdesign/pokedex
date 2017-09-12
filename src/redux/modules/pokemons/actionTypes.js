import { createTypes, async } from 'redux-action-types'

const types = createTypes('pokemons/pokemons/',
  'POKEMONS_REQUEST',
  async('POKEMONS')
)

export default types
