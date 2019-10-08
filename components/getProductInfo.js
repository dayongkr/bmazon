import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import cheerio from 'cheerio';

import { SET_PRODUCT_INFORMATION } from '../reducers/product';

const GetProductInfo = ({ url, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios(`http://localhost:80/products/${url.match(/\/dp\/(\w+)/)[1]}`).then(
      data => {
        const $ = cheerio.load(data.data);
        const $body = $('div#dp div#dp-container div#ppd');
        const $centerCol = $body.children('div#centerCol');
        const category = [];
        $('div#breadcrumb_feature_div a.a-link-child').each((i, elem) => {
          category.push(elem.children[0].data.trim());
        });

        console.log($('div#newPitchPriceWrapper_feature_div'));

        dispatch({
          type: SET_PRODUCT_INFORMATION,
          data: {
            asin: url.match(/\/dp\/(\w+)/)[1],
            imageUrl: $('img#main-image').attr('data-a-hires'),
            price:
              $('div#newPitchPriceWrapper_feature_div').find(
                '#priceblock_ourprice',
              ).length !== 0
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
          },
        });
      },
    );
  }, []);
  return <>{children}</>;
};

export default GetProductInfo;
