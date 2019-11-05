import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import cheerio from 'cheerio';

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  MD_PRODUCT_LIST_REQUEST,
  MD_PRODUCT_LIST_SUCCESS,
  MD_PRODUCT_LIST_FAILURE,
} from '../reducers/productList';

function getProductListAPI(data) {
  return axios(`/api/productList/${data.value}`);
}

function* getProductList(action) {
  try {
    const html = yield call(getProductListAPI, action.data);
    const $ = yield cheerio.load(html.data);
    const items = [];

    $('div.s-search-results')
      .children('div')
      .filter(
        (index, item) => $(item).data('asin') && !$(item).hasClass('AdHolder'),
      )
      .each((index, item) => {
        items[index] = {
          src: $(item)
            .find('img')
            .attr('srcset')
            .match(/2.5x,(.*(?=\b 3x))/)[1]
            .trim(),
          title: $(item)
            .find('h2.a-size-mini span.a-size-base')
            .text(),
          star: $(item)
            .find('div.a-spacing-top-mini > div > span:first-child')
            .attr('aria-label'),
          reviewers: $(item)
            .find('div.a-spacing-top-mini > div > span:last-child')
            .attr('aria-label'),
          price:
            $(item)
              .find('span.a-price span.a-offscreen')
              .first()
              .text() ||
            $(item)
              .find('div.a-spacing-top-mini')
              .last()
              .find('div span.a-color-base')
              .text(),
          asin: $(item).data('asin'),
          index: $(item).data('index'),
        };
      }),
      yield put({
        type: PRODUCT_LIST_SUCCESS,
        data: {
          items,
        },
      });
  } catch (e) {
    yield put({ type: PRODUCT_LIST_FAILURE });
  }
}

function* watchProductList() {
  yield takeLatest(PRODUCT_LIST_REQUEST, getProductList);
}

function mdProductListAPI() {
  return axios.get('/api/productList/list/md');
}

function* getMdProductList(action) {
  try {
    const result = yield call(mdProductListAPI, action.data);
    yield put({ type: MD_PRODUCT_LIST_SUCCESS, data: result.data });
  } catch (e) {
    yield put({ type: MD_PRODUCT_LIST_FAILURE, error: e });
  }
}

function* watchMdProductList() {
  yield takeLatest(MD_PRODUCT_LIST_REQUEST, getMdProductList);
}

export default function* productListSaga() {
  yield all([fork(watchProductList), fork(watchMdProductList)]);
}
