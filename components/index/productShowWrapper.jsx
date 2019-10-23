import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import formattingComma from '../../function/formattingComma';

const ProductShowWrapperStyled = styled.div`
  height: 75px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  & + & {
    margin-top: 15px;
  }

  & .productImage {
    width: 50px;
    height: 50px;
    background-repeat: none;
    background-position: center;
    background-size: cover;
    background-color: #eee;
    position: absolute;
    left: 10px;
    top: 12.5px;
  }

  & .shoppingLogoImage {
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

const ProductDetails = styled.div`
  position: absolute;
  left: 70px;
  top: 12.5px;

  & .title {
    font-size: 14px;
    color: #666;
  }

  & .price {
    float: left;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }
`;

const ProductShowWrapper = ({ src, title = '상품이름', price = '17' }) => {
  const url = 'https://amazon.com/dp/B07G74V1YP';
  return (
    <Link href={`/product/${url.match(/\/dp\/(\w+)/)[1]}`} prefetch={false}>
      <ProductShowWrapperStyled>
        <div
          className="productImage"
          style={
            src
              ? { backgroundImage: `url(${src})` }
              : { backgroundImage: 'none' }
          }
        ></div>
        <ProductDetails>
          <p className="title">{title}</p>
          <p className="price">{`\$${formattingComma(price)}`}</p>
        </ProductDetails>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
          width="25"
          alt="아마존 로고"
          className="shoppingLogoImage"
        ></img>
      </ProductShowWrapperStyled>
    </Link>
  );
};

export default ProductShowWrapper;
