import actionTypes from './actionTypes'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.POKEMONS_SUCCESS:
      return action.payload

    default:
      return state
  }
}
