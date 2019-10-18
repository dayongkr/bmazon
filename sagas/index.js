import { all, fork } from 'redux-saga/effects';
import exchange from './exchange';
import product from './product';
import productList from './productList';

export default function* rootSaga() {
  yield all([fork(exchange), fork(product), fork(productList)]);
}
