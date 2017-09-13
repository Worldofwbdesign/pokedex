import { createTypes } from 'redux-action-types'

const types = createTypes('pokemons/toggleMenu/',
  'OPEN_MENU',
  'CLOSE_MENU'
)

export default types
