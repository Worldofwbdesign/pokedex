import { createTypes, async } from 'redux-action-types'

const types = createTypes('pokemons/currentType/',
  'TYPE_LIST_REQUEST',
  async('TYPE_LIST')
)

export default types
