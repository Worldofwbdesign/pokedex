import { combineReducers } from 'redux'

import pokemonsReducer from './modules/pokemons/reducer'
import isUpdatingReducer from './modules/isUpdating/reducer'
import isMenuOpenedReducer from './modules/isMenuOpened/reducer'

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  isUpdating: isUpdatingReducer,
  isMenuOpened: isMenuOpenedReducer
})

export default rootReducer
