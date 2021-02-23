import { actionTypes } from './actions'

const INITIAL_STATE = {
  User: {},
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
      }
    case actionTypes.SET_USER:
      return {
        ...state,
        ...{ User: action.paylload.User },
      }
    default:
      return state
  }
}

export default reducer
