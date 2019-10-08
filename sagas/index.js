import { all, fork } from 'redux-saga/effects';
import exchange from './exchange';
import product from './product';

export default function* rootSaga() {
  yield all([fork(exchange), fork(product)]);
}
