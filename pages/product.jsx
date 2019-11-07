import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';

import ProductDetailsWrapper from '../components/product/productDetailsWrapper';
import ProductMainNavigation from '../components/product/productMainNavigation';
import {
  PRODUCT_INFORMATION_REQUEST,
  PRODUCT_INFORMATION_RESET,
} from '../reducers/product';

import {
  ProductBottomNavigation,
  ProductMainImageWrapper,
  ProductWrapper,
  ProductDetailInfoWrapper,
  ProductMainInfoWrapper,
} from '../styled-components/product/product';
import ProductInfo from '../components/product/productInfo';
import { ADD_CART_REQUEST } from '../reducers/cart';
import { CREATE_ALERT } from '../reducers/alert';

const Div = styled.div`
  background-color: #eee;
  max-height: 500px;
  width: 100%;
  height: 100vw;
`;

const Product = ({ asin }) => {
  const { imageUrl, details, name, loaded, price } = useSelector(
    state => state.product,
  );
  const { addCartErrorReason } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const mainInfoWrapperRef = useRef();

  const onClickAddCart = useCallback(() => {
    if (loaded) {
      dispatch({
        type: ADD_CART_REQUEST,
        data: { asin, name, price, image: imageUrl, count: 1 },
      });
    }
  }, [asin, name, price, imageUrl, loaded, addCartErrorReason]);

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
        <title>bmazon{name && `-${name}`}</title>
      </Head>

      {loaded ? (
        <ProductMainImageWrapper>
          <img src={imageUrl} id="productMainImage" />
        </ProductMainImageWrapper>
      ) : (
        <Div></Div>
      )}
      <ProductWrapper>
        <ProductDetailsWrapper />
        <ProductMainNavigation mainInfoEl={mainInfoWrapperRef} />
        <ProductMainInfoWrapper ref={mainInfoWrapperRef}>
          {loaded ? (
            <>
              <ProductDetailInfoWrapper
                className="aplus-v2 mobile celwidget weblabRtl"
                cel_widget_id="m-aplus"
                data-cel-widget="m-aplus"
              >
                <p className="title">상품소개</p>
                <div dangerouslySetInnerHTML={{ __html: details }} />
              </ProductDetailInfoWrapper>
              <ProductInfo text="해외리뷰">
                <div style={{ height: '50vh' }} />
              </ProductInfo>
              <ProductInfo text="국내리뷰">
                <div style={{ height: '50vh' }} />
              </ProductInfo>
              <ProductInfo text="커뮤니티">
                <div style={{ height: '50vh' }} />
              </ProductInfo>
              <ProductInfo text="국내 최저가 비교">
                <div style={{ height: '50vh' }} />
              </ProductInfo>
              <ProductInfo text="구매대행 정책">
                <div style={{ height: '150vh' }} />
              </ProductInfo>
            </>
          ) : (
            ''
          )}
        </ProductMainInfoWrapper>
      </ProductWrapper>
      <ProductBottomNavigation loaded={loaded}>
        <div onClick={onClickAddCart} id="productPutCartButton">
          장바구니 담기
        </div>
      </ProductBottomNavigation>
    </>
  );
};

Product.getInitialProps = async context => {
  console.log(context, 'hello2');
  return { asin: context.query.asin };
};

export default Product;
