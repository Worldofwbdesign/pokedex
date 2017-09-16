import actionTypes from './actionTypes'

const initialState = true

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_CURRENT_UPDATING:
      return !state
    default:
      return state
  }
}
