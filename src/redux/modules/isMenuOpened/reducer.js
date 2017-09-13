import actionTypes from './actionTypes'

const initialState = true

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_MENU:
      return true
    case actionTypes.CLOSE_MENU:
      return false
    default:
      return state
  }
}
