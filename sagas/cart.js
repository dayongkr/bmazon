import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
} from '../reducers/cart';

function addCartAPI(itemData) {
  return axios.post('/api/cart', itemData);
}

function* addCart(action) {
  try {
    yield call(addCartAPI, action.data);
    return yield put({ type: ADD_CART_SUCCESS });
  } catch (e) {
    return yield put({ type: ADD_CART_FAILURE });
  }
}

function* watchAddCart() {
  return yield takeLatest(ADD_CART_REQUEST, addCart);
}

export default function* userSaga() {
  yield all([fork(watchAddCart)]);
}
