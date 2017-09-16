import actionTypes from './actionTypes'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TYPE_LIST_SUCCESS:
      return action.payload

    default:
      return state
  }
}
