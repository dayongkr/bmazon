import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  EXCHANGE_RATE_REQUEST,
  EXCHANGE_RATE_SUCCESS,
  EXCHANGE_RATE_FAILURE,
} from '../reducers/exchange';

function getExchangeRateAPI() {
  return axios.get('/static/finace.json');
}

function* getExchangeRate() {
  try {
    const result = yield call(getExchangeRateAPI);
    yield put({
      type: EXCHANGE_RATE_SUCCESS,
      data: {
        rate: result.data[0].cashBuyingPrice,
        date: result.data[0].date,
        time: result.data[0].time,
        provider: result.data[0].provider,
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: EXCHANGE_RATE_FAILURE,
    });
  }
}

function* watchExchange() {
  yield takeLatest(EXCHANGE_RATE_REQUEST, getExchangeRate);
}

export default function* exchangeSaga() {
  yield all([fork(watchExchange)]);
}
