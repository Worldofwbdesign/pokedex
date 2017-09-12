import { combineReducers } from 'redux'

import pokemonsReducer from './modules/pokemons/reducer'

const rootReducer = combineReducers({
  pokemons: pokemonsReducer
})

export default rootReducer
