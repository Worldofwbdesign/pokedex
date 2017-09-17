import actionTypes from './actionTypes'

const initialState = 20

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_POKEMON_PER_PAGE:
      return action.payload
    default:
      return state
  }
}
