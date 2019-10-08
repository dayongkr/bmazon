import { all, fork } from 'redux-saga/effects';

export default function* exchangeSaga() {
  yield all([fork(watchExchange)]);
}
