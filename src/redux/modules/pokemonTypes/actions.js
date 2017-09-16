import actionTypes from './actionTypes'

export const requestPokemonTypes = () => ({
  type: actionTypes.POKEMON_TYPES_REQUEST
})

export const getPokemonTypes = (pokemonTypes) => ({
  type: actionTypes.POKEMON_TYPES_SUCCESS,
  payload: pokemonTypes
})

export const handleError = () => ({
  type: actionTypes.POKEMON_TYPES_FAIL,
  payload: []
})
