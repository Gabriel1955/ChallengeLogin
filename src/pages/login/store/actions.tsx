import { User } from '../../../interfaces/User'
export const actionTypes = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SET_USER: 'SET_USER',
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
