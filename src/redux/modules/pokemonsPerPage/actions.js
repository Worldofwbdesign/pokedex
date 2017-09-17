import actionTypes from './actionTypes'

export const setPokemonsPerPage = (size) => ({
  type: actionTypes.SET_POKEMON_PER_PAGE,
  payload: size
})
