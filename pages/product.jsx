import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductDetailsWrapper from '../components/product/productDetailsWrapper';
import ProductMainNavigation from '../components/product/productMainNavigation';

import { PRODUCT_INFORMATION_REQUEST } from '../reducers/product';
import { PRODUCT_INFORMATION_RESET } from '../reducers/product';
import {
  ProductBottomNavigation,
  ProductMainImageWrapper,
  ProductWrapper,
  ProductDetailInfoWrapper,
} from '../styled-components/product/product';

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
      <ProductMainImageWrapper>
        {imageUrl && <img src={imageUrl} id="productMainImage"></img>}
      </ProductMainImageWrapper>

      <ProductWrapper>
        <ProductDetailsWrapper></ProductDetailsWrapper>
        <ProductMainNavigation></ProductMainNavigation>
        <ProductDetailInfoWrapper
          className="aplus-v2 mobile celwidget weblabRtl"
          cel_widget_id="m-aplus"
          data-cel-widget="m-aplus"
        >
          <div dangerouslySetInnerHTML={{ __html: details }}></div>
        </ProductDetailInfoWrapper>
      </ProductWrapper>
      <ProductBottomNavigation>
        <div id="productPutCartButton">장바구니 담기</div>
      </ProductBottomNavigation>
    </>
  );
};

Product.getInitialProps = async context => {
  return { asin: context.query.asin };
};

export default Product;
