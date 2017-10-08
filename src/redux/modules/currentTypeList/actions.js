import actionTypes from './actionTypes'

export const requestTypeList = type => ({
  type: actionTypes.TYPE_LIST_REQUEST,
  payload: type
})

export const getTypeList = pokemons => ({
  type: actionTypes.TYPE_LIST_SUCCESS,
  payload: pokemons
})

export const handleError = () => ({
  type: actionTypes.TYPE_LIST_FAIL,
  payload: []
})
