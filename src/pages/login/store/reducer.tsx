import { actionTypes } from './actions'

const INITIAL_STATE = {
  User: {},
  Error: undefined,
  Loading: false,
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
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        ...{ Error: action.paylload.Message },
      }
    default:
      return state
  }
}

export default reducer
