import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, setUser, setError } from './actions'
import HTTP from '../../../http'

function* login(data): unknown {
  try {
    // this IF is used to simulate backend error
    if (data.payload.Username === 'Error') {
      throw { message: 'E-mail inválido' }
    }

    const { Username, Password } = data.payload
    const response = yield call(HTTP.post, '/login', {
      Username,
      Password,
    })
    yield put(setUser(response.data))
  } catch (err) {
    yield put(setError(err.message))
  }
}

export default function* () {
  yield [yield takeLatest(actionTypes.SIGN_IN_REQUEST, login)]
}
