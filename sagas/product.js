import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import cheerio from 'cheerio';

import {
  PRODUCT_INFORMATION_SUCCESS,
  PRODUCT_INFORMATION_REQUEST,
  PRODUCT_INFORMATION_FAILURE,
  PRODUCT_OPTION_INFORMATION_REQUEST,
  PRODUCT_OPTION_INFORMATION_SUCCESS,
  PRODUCT_OPTION_INFORMATION_FAILURE,
} from '../reducers/product';

function getProductInfoAPI({ asin }) {
  return axios(`http://52.79.174.192/api/product/${asin}`);
}

function* getProductInfo(action) {
  try {
    const result = yield call(getProductInfoAPI, action.data);
    const $ = yield cheerio.load(result.data);
    const category = [];
    const optionDatas = [];
    const options = { option: [] };

    yield $('div#breadcrumb_feature_div a.a-link-child').each((i, elem) => {
      category.push(
        $(elem)
          .text()
          .trim(),
      );
    });

    yield $('script')
      .filter((i, e) => {
        const data = $(e).data('a-state');
        if (typeof data === 'object') {
          return (
            data.key === 'mobile-twister-dim-val-list' ||
            data.key === 'mobile-twister-dims-to-asin-list' ||
            data.key === 'mobile-twister-dim-list'
          );
        }
      })
      .each((i, e) => {
        optionDatas[$(e).data('a-state').key] = JSON.parse(
          $(e)[0].firstChild.data,
        );
      });

    yield (() => {
      options.listName = optionDatas['mobile-twister-dim-list'].key;
      options.listValue = optionDatas['mobile-twister-dim-val-list'];
      const key = Object.keys(
        optionDatas['mobile-twister-dims-to-asin-list'],
      ).map(item => item.match(/(\d)/g));
      const value = Object.values(
        optionDatas['mobile-twister-dims-to-asin-list'],
      );
      options.option = key.map((item, index) => ({
        asin: value[index],
        list: item,
      }));
    })();

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
          $('div#cerberus-data-metrics').data('asin-price') ||
          $('#priceblock_ourprice')
            .text()
            .trim()
            .substring(1),
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

function getOptionAPI(data) {
  return axios(`http://52.79.174.192/api/product/option/${data.asin}`);
}

function* getOptionInfo(action) {
  try {
    let data = yield call(getOptionAPI, action.data);
    data = yield data.data.filter(item => item.asin === action.data.asin)[0];
    console.log(data, action.data.asin, action.data.index);
    yield put({
      type: PRODUCT_OPTION_INFORMATION_SUCCESS,
      data: {
        imageUrl: data.imageUrl,
        asin: action.data.asin,
        index: action.data.index,
      },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: PRODUCT_OPTION_INFORMATION_FAILURE,
    });
  }
}

function* watchOptionInfo() {
  yield takeEvery(PRODUCT_OPTION_INFORMATION_REQUEST, getOptionInfo);
}

export default function* productSaga() {
  yield all([fork(watchProductInfo), fork(watchOptionInfo)]);
}
