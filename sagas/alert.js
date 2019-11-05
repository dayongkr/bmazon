import { all, fork, takeEvery, delay, put } from 'redux-saga/effects';
import {
  CREATE_ALERT_REQUEST,
  CREATE_ALERT,
  RESET_ALERT,
} from '../reducers/alert';

function* createAlert(action) {
  yield put({ type: CREATE_ALERT, data: { text: action.data.text } });
}

function* watchCreateAlert() {
  yield takeEvery(CREATE_ALERT_REQUEST, createAlert);
}

export default function* userSaga() {
  yield all([fork(watchCreateAlert)]);
}
