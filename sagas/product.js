import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import cheerio from 'cheerio';

import {
  PRODUCT_INFORMATION_SUCCESS,
  PRODUCT_INFORMATION_REQUEST,
  PRODUCT_INFORMATION_FAILURE,
} from '../reducers/product';

function getProductInfoAPI({ asin }) {
  return axios(`http://localhost:3000/api/product/${asin}`);
}

function* getProductInfo(action) {
  try {
    const result = yield call(getProductInfoAPI, action.data);
    const $ = yield cheerio.load(result.data);
    const category = [];
    const options = [];

    yield $('div#breadcrumb_feature_div a.a-link-child').each((i, elem) => {
      category.push(
        $(elem)
          .text()
          .trim(),
      );
    });

    yield $('script')
      .filter((i, e) => {
        if (typeof $(e).data('a-state') === 'object') {
          return (
            $(e).data('a-state').key === 'mobile-twister-dim-val-list' ||
            $(e).data('a-state').key === 'mobile-twister-dims-to-asin-list'
          );
        }
      })
      .each((i, e) => {
        const obj = JSON.parse($(e)[0].firstChild.data);
        if (obj['color_name']) {
          for (let i = 0; i < obj['color_name'].length; i += 1) {
            if (typeof options[i] !== 'object') {
              options[i] = {};
            }
            options[i].color = obj['color_name'][i];
          }
        } else {
          for (let i = 0; i < Object.values(obj).length; i += 1) {
            if (typeof options[i] !== 'object') {
              options[i] = {};
            }
            options[i].asin = Object.values(obj)[i];
          }
        }
      });

    // 늦게 로딩되는 이미지 로딩
    yield $('div#aplus_feature_div')
      .children('div')
      .find('img')
      .filter((i, e) => $(e).hasClass('a-lazy-loaded'))
      .each((i, e) => {
        $(e).attr('src', $(e).data('src'));
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
        options: options,
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
