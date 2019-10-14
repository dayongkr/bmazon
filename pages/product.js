import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';

import ProductDetailsWrapper from '../components/product/productDetailsWrapper';
import ProductMainNavigation from '../components/product/productMainNavigation';

import { PRODUCT_INFORMATION_REQUEST } from '../reducers/product';
import { PRODUCT_INFORMATION_RESET } from '../reducers/product';

const Product = ({ asin }) => {
  const { imageUrl, details } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: PRODUCT_INFORMATION_RESET,
    });
    dispatch({
      type: PRODUCT_INFORMATION_REQUEST,
      data: { url: `https://amazon.com/dp/${asin}`, asin },
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/style/amazon.css"></link>
        <link rel="stylesheet" href="/static/style/product.css"></link>
      </Head>
      <div id="productMainImageWrapper">
        {imageUrl && <img src={imageUrl} id="productMainImage"></img>}
      </div>

      <div id="productWrapper">
        <ProductDetailsWrapper></ProductDetailsWrapper>
        <ProductMainNavigation></ProductMainNavigation>
        {details ? (
          <div
            id="productDetailInfoWrapper"
            className="aplus-v2 mobile celwidget weblabRtl"
            cel_widget_id="m-aplus"
            data-cel-widget="m-aplus"
          >
            <div dangerouslySetInnerHTML={{ __html: details }}></div>
          </div>
        ) : (
          <div style={{ height: '100vh' }}></div>
        )}
      </div>
      <div id="productBottomNavigation">
        <div id="productPutCartButton">장바구니 담기</div>
      </div>
    </>
  );
};

Product.getInitialProps = async context => {
  return { asin: context.query.asin };
};

export default Product;
