import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductDetailsWrapper from '../components/productDetailsWrapper';
import ProductMainNavigation from '../components/productMainNavigation';

import { PRODUCT_INFORMATION_REQUEST } from '../reducers/product';

const Product = ({ url }) => {
  const { imageUrl, details } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: PRODUCT_INFORMATION_REQUEST,
      data: 'https://amazon.com/dp/B07G74V1YP',
    });
  }, []);
  return (
    <>
      <div id="productMainImageWrapper">
        <img src={imageUrl} id="productMainImage"></img>
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
  return { url: context.query.url };
};

export default Product;
