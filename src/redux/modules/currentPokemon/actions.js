import actionTypes from './actionTypes'

export const requestCurrentPokemon = (id) => ({
  type: actionTypes.CURRENT_POKEMON_REQUEST,
  payload: id
})

export const getCurrentPokemon = (pokemon) => ({
  type: actionTypes.CURRENT_POKEMON_SUCCESS,
  payload: pokemon
})

export const handleError = () => ({
  type: actionTypes.CURRENT_POKEMON_FAIL,
  payload: {}
})
