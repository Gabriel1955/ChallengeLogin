import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, setUser } from './actions'
import HTTP from '../../service'

function* login(data) {
  try {
    const { Username, Password } = data.payload
    const response = yield call(HTTP.post, '/login', {
      Username,
      Password,
    })
    yield put(setUser(response.data))
  } catch (err) {
    // const { intl } = payload
    // yield put(actions.login.error(err))
    // yield call(notificationError, { err, intl, id: 'error.users.load' })
  }
}

export default function* () {
  yield [yield takeLatest(actionTypes.SIGN_IN_REQUEST, login)]
}
