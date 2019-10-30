import { all, fork } from 'redux-saga/effects';
import exchange from './exchange';
import product from './product';
import productList from './productList';
import user from './user';

export default function* rootSaga() {
  yield all([fork(exchange), fork(product), fork(productList), fork(user)]);
}
