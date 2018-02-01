import { fork } from 'redux-saga/effects';
import { sagas as inviteListWactherSagas } from '../containers/inviteList/duck';

export default function* rootSaga() {
  for (let saga of inviteListWactherSagas) {
    yield fork(saga);
  }
}
