import actionTypes from './actionTypes'

export const requestGetPokemons = () => ({
  type: actionTypes.POKEMONS_REQUEST
})

export const getPokemons = (pokemons) => ({
  type: actionTypes.POKEMONS_SUCCESS,
  payload: pokemons
})

export const handleError = () => ({
  type: actionTypes.POKEMONS_FAIL,
  payload: []
})
