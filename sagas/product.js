import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
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
  return axios(`/api/product/${asin}`);
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
      if (optionDatas['mobile-twister-dim-list']) {
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
      }
    })();

    // 늦게 로딩되는 이미지 로딩
    yield $('div#aplus_feature_div')
      .children('div')
      .find('img')
      .filter((i, e) => $(e).hasClass('a-lazy-loaded'))
      .each((i, e) => {
        $(e).attr('src', $(e).data('src'));
      });

    // 비디오 불러오기
    yield $('div.premium-module-8-hero-video').each((index, item) => {
      const src = $(item)
        .find('script')
        .filter((index, item) => item.firstChild)
        .map((index, item) => [
          item.firstChild.data.match(
            /https:\/\/m\.media-amazon\.com\/images\/S\/aplus-media\/vc\/\S*.mp4/,
          ),
          item.firstChild.data.match(
            /https:\/\/m\.media-amazon\.com\/images\/S\/aplus-media\/vc\/\S*.jpg/,
          ),
        ]);
      $(item).after(
        `<video controls preload="metadata" poster=${src[1]}><source src=${
          src[0]
        } type="video/mp4"></source></video>`,
      );
      $(item).remove();
    });

    yield put({
      type: PRODUCT_INFORMATION_SUCCESS,
      data: {
        imageUrl:
          $('img#main-image').data('a-hires') ||
          Object.keys(
            $('div#aw-image-block div.aw-product-image img').data(
              'a-dynamic-image',
            ),
          )[0].replace(/(._.*_)/, '') ||
          $('div#aw-image-block div.aw-product-image img').attr('src'),
        price:
          $('div#cerberus-data-metrics').data('asin-price') ||
          $('#priceblock_ourprice')
            .text()
            .trim()
            .substring(1) ||
          $('div#usedBuyBoxPrice_feature_div > div.a-spacing-none > span')
            .filter(
              (index, item) =>
                $(item)
                  .text()
                  .trim() !== '$',
            )
            .map((index, item) =>
              $(item)
                .text()
                .trim(),
            )
            .get()
            .join('.'),
        name:
          $('span#title')
            .text()
            .trim() ||
          $('h1#product-title')
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
        options: options.option.length !== 0 ? options : null,
        ship: $('span.a-declarative')
          .filter(
            (index, item) =>
              $(item).data('a-secondary-view') &&
              $(item).data('a-secondary-view').name === 'agShipMsgSecView',
          )
          .text()
          ? +$('span.a-declarative')
              .filter(
                (index, item) =>
                  $(item).data('a-secondary-view') &&
                  $(item).data('a-secondary-view').name === 'agShipMsgSecView',
              )
              .text()
              .match(/\$([\d\.]*)/)[1]
          : null,
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
    console.error(e);
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
