import { combineReducers } from 'redux'

import pokemonsReducer from './modules/pokemons/reducer'
import isUpdatingReducer from './modules/isUpdating/reducer'
import isMenuOpenedReducer from './modules/isMenuOpened/reducer'
import currentPokemonReducer from './modules/currentPokemon/reducer'

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  isUpdating: isUpdatingReducer,
  isMenuOpened: isMenuOpenedReducer,
  currentPokemon: currentPokemonReducer
})

export default rootReducer
