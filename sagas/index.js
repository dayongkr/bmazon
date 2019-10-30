import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import exchange from './exchange';
import product from './product';
import productList from './productList';
import user from './user';
import backUrl from '../config/backUrl';

axios.defaults.baseURL = `${backUrl}`;

export default function* rootSaga() {
  yield all([fork(exchange), fork(product), fork(productList), fork(user)]);
}
