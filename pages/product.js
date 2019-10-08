import React from 'react';
import { useSelector } from 'react-redux';

import ProductDetailsWrapper from '../components/productDetailsWrapper';
import ProductMainNavigation from '../components/productMainNavigation';
import GetProductInfo from '../components/getProductInfo';

const url = 'https://www.amazon.com/dp/B0756CYWWD';
const Product = () => {
  const { imageUrl, details } = useSelector(state => state.product);

  return (
    <GetProductInfo url={url}>
      <div id="productMainImageWrapper">
        <img src={imageUrl} id="productMainImage"></img>
      </div>

      <div id="productWrapper">
        <ProductDetailsWrapper url={url}></ProductDetailsWrapper>
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
    </GetProductInfo>
  );
};

export default Product;
