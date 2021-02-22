
export const actionTypes = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SET_USER: 'SET_USER',
}

export function signInRequest(Username, Password) {
  return {
    type: actionTypes.SIGN_IN_REQUEST,
    payload: { Username, Password },
  }
}

export function setUser(User){
  return {
    type: actionTypes.SET_USER,
    paylload:{User}
  }
}
