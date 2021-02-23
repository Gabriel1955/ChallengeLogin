import { all } from 'redux-saga/effects'

import auth from '../pages/login/store/saga'

export default function* rootSaga() {
  return yield all([auth])
}
