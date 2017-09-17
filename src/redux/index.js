import { combineReducers } from 'redux'

import pokemonsReducer from './modules/pokemons/reducer'
import pokemonTypesReducer from './modules/pokemonTypes/reducer'
import currentTypeListReducer from './modules/currentTypeList/reducer'
import isUpdatingReducer from './modules/isUpdating/reducer'
import pokemonsPerPageReducer from './modules/pokemonsPerPage/reducer'
import isCurrentUpdatingReducer from './modules/isCurrentUpdating/reducer'
import isMenuOpenedReducer from './modules/isMenuOpened/reducer'
import currentPokemonReducer from './modules/currentPokemon/reducer'
import searchQueryReducer from './modules/searchQuery/reducer'

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonTypes: pokemonTypesReducer,
  currentTypeList: currentTypeListReducer,
  isUpdating: isUpdatingReducer,
  pokemonsPerPage: pokemonsPerPageReducer,
  isCurrentUpdating: isCurrentUpdatingReducer,
  isMenuOpened: isMenuOpenedReducer,
  currentPokemon: currentPokemonReducer,
  searchQuery: searchQueryReducer
})

export default rootReducer
