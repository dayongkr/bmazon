import { all, fork } from 'redux-saga/effects';
import exchange from 'exchange';

export default function* rootSaga() {
  yield all([fork(exchange)]);
}
