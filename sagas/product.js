import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import cheerio from 'cheerio';

import {
  PRODUCT_INFORMATION_SUCCESS,
  PRODUCT_INFORMATION_REQUEST,
  PRODUCT_INFORMATION_FAILURE,
} from '../reducers/product';

function getProductInfoAPI(url) {
  return axios(
    `http://localhost:3000/api/product/${url.match(/\/dp\/(\w+)/)[1]}`,
  );
}

//${url.match(/\/dp\/(\w+)/)[1]}

function* getProductInfo(action) {
  try {
    const result = yield call(getProductInfoAPI, action.data);
    const $ = yield cheerio.load(result.data);
    const category = [];
    yield $('div#breadcrumb_feature_div a.a-link-child').each((i, elem) => {
      category.push(elem.children[0].data.trim());
    });
    yield put({
      type: PRODUCT_INFORMATION_SUCCESS,
      data: {
        imageUrl: $('img#main-image').data('a-hires'),
        price:
          $('div#newPitchPriceWrapper_feature_div').find('#priceblock_ourprice')
            .length !== 0
            ? $('div#newPitchPriceWrapper_feature_div')
                .find('#priceblock_ourprice')
                .text()
                .trim()
                .substring(1)
            : $('div#newPitchPriceWrapper_feature_div')
                .find('span.price-large')
                .text()
                .trim(),
        name: $('span#title')
          .text()
          .trim(),
        category: category,
        details:
          $('div#aplus3p_feature_div').length !== 0
            ? $('div#aplus3p_feature_div')
                .children('div')
                .html()
            : $('div#aplus_feature_div')
                .children('div')
                .html(),
        asin: action.data.match(/\/dp\/(\w+)/)[1],
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: PRODUCT_INFORMATION_FAILURE,
    });
  }
}

function* watchProductInfo() {
  yield takeEvery(PRODUCT_INFORMATION_REQUEST, getProductInfo);
}

export default function* productSaga() {
  yield all([fork(watchProductInfo)]);
}
