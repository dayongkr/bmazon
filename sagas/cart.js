import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from '../reducers/cart';

function addCartAPI(itemData) {
  return axios.post('/api/cart', itemData, {
    withCredentials: true,
  });
}

function* addCart(action) {
  try {
    yield call(addCartAPI, action.data);
    return yield put({ type: ADD_CART_SUCCESS });
  } catch (e) {
    return yield put({
      type: ADD_CART_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchAddCart() {
  return yield takeLatest(ADD_CART_REQUEST, addCart);
}

function getCartAPI() {
  return axios.get('/api/cart', {
    withCredentials: true,
  });
}

function* getCart() {
  try {
    const result = yield call(getCartAPI);
    return yield put({ type: GET_CART_SUCCESS, data: result.data });
  } catch (e) {
    return yield put({
      type: GET_CART_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchGetCart() {
  return yield takeLatest(GET_CART_REQUEST, getCart);
}

export default function* userSaga() {
  yield all([fork(watchAddCart), fork(watchGetCart)]);
}
