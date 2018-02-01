import { put, call, takeLatest } from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import { appActions } from '../../../modules/duck';
import * as api from './api';

function* loadInviteList() {
  try {
    const response = yield call(api.fecthInviteList);
    yield put(actions.receiveInviteList({ response }));
  } catch (e) {
    console.error('Error encountered : ', e.message);
    yield put(appActions.serviceErrorReceived({ errorMessage: e.message }));
  }
}

function* watchloadInviteList() {
  yield takeLatest(types.REQUEST_INVITE_LIST, loadInviteList);
}

export default [watchloadInviteList];
