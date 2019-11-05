import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
} from '../reducers/cart';

import { CREATE_ALERT } from '../reducers/alert';

function addCartAPI(itemData) {
  return axios.post('/api/cart', itemData, {
    withCredentials: true,
  });
}

function* addCart(action) {
  try {
    yield call(addCartAPI, action.data);
    yield put({ type: ADD_CART_SUCCESS });
    yield put({
      type: CREATE_ALERT,
      data: {
        text: '장바구니에 추가했습니다',
        status: true,
      },
    });
  } catch (e) {
    yield put({
      type: ADD_CART_FAILURE,
      error: e.response.data,
    });
    yield put({
      type: CREATE_ALERT,
      data: {
        text: e.response.data,
        status: false,
      },
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

function deleteCartAPI(asin) {
  return axios.delete(`/api/cart/${asin}`, {
    withCredentials: true,
  });
}

function* deleteCart(action) {
  try {
    yield call(deleteCartAPI, action.data);
    return yield put({ type: DELETE_CART_SUCCESS, data: action.data });
  } catch (e) {
    return yield put({
      type: DELETE_CART_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchDeleteCart() {
  return yield takeLatest(DELETE_CART_REQUEST, deleteCart);
}

export default function* userSaga() {
  yield all([fork(watchAddCart), fork(watchGetCart), fork(watchDeleteCart)]);
}
