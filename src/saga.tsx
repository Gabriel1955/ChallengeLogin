import { all } from 'redux-saga/effects'

import auth from './pages/login/saga'

export default function* rootSaga() {
  return yield all([auth])
}
