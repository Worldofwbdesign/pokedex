import actionTypes from './actionTypes'

export const setSearchQuery = (name) => ({
  type: actionTypes.SEARCH_QUERY,
  payload: name
})
