import { User } from '../../../interfaces/User'
export const actionTypes = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SET_USER: 'SET_USER',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_IN_LOADING: 'SIGN_IN_LOADING',
}

export function signInRequest(Username: string, Password: string): unknown {
  return {
    type: actionTypes.SIGN_IN_REQUEST,
    payload: { Username, Password },
  }
}

export function setUser(User: User): unknown {
  return {
    type: actionTypes.SET_USER,
    paylload: { User },
  }
}
export function setError(message: string): unknown {
  return {
    type: actionTypes.SIGN_IN_ERROR,
    paylload: { Message: message },
  }
}
