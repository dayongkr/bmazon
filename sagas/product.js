import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  PRODUCT_INFORMATION_SUCCESS,
  PRODUCT_INFORMATION_REQUEST,
  PRODUCT_INFORMATION_FAILURE,
  PRODUCT_OPTION_INFORMATION_REQUEST,
  PRODUCT_OPTION_INFORMATION_SUCCESS,
  PRODUCT_OPTION_INFORMATION_FAILURE,
} from '../reducers/product';
import getProduct from '../function/getProduct';

function getProductInfoAPI({ asin }) {
  return axios(`/api/product/${asin}`);
}

function* getProductInfo(action) {
  try {
    const result = yield call(getProductInfoAPI, action.data);

    yield put({
      type: PRODUCT_INFORMATION_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: PRODUCT_INFORMATION_FAILURE,
    });
  }
}

function* watchProductInfo() {
  yield takeLatest(PRODUCT_INFORMATION_REQUEST, getProductInfo);
}

function getOptionAPI(data) {
  return axios(`/api/product/option/${data.asin}`);
}

function* getOptionInfo(action) {
  try {
    let data = yield call(getOptionAPI, action.data);
    data = yield data.data.filter(item => item.asin === action.data.asin)[0];
    yield put({
      type: PRODUCT_OPTION_INFORMATION_SUCCESS,
      data: {
        imageUrl: data.imageUrl,
        asin: action.data.asin,
        index: action.data.index,
      },
    });
  } catch (e) {
    yield put({
      type: PRODUCT_OPTION_INFORMATION_FAILURE,
    });
  }
}

function* watchOptionInfo() {
  yield takeLatest(PRODUCT_OPTION_INFORMATION_REQUEST, getOptionInfo);
}

export default function* productSaga() {
  yield all([fork(watchProductInfo), fork(watchOptionInfo)]);
}
