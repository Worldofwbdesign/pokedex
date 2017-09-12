import actionTypes from './actionTypes'

const initialState = false

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_UPDATING:
      return !state
    default:
      return state
  }
}
