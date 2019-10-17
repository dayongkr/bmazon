import React from 'react';
import styled from 'styled-components';

const ProductItemWrapper = styled.div`
  width: 48%;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;

  & .productImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .category {
    font-size: 12px;
    color: #999;
    font-weight: bold;
    margin: 5px 0;
  }

  & .title {
    line-height: 1.2em;
    margin: 5px 0;
    font-size: 14px;
    max-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  & .others {
    margin: 5px 0;
    display: flex;
    align-items: center;
  }

  & .others img {
    margin-right: 3px;
  }

  & .others span {
    font-size: 12px;
    color: #999;
    margin-right: 10px;
  }
`;

const ProductItem = () => {
  console.log(
    encodeURIComponent(
      'bose noise cancelling headphones'.replace(/\s+/g, 'DAYONGBZ0920'),
    ).replace(/DAYONGBZ0920/g, '+'),
  );
  return (
    <ProductItemWrapper>
      <div className="productImage">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81qI0w7PEzL._SL1500_.jpg"
          height="110px"
          alt="상품이미지"
        ></img>
      </div>
      <p className="category">Electronics</p>
      <p className="title">
        Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling,
        with Alexa voice control, enabled with Bose AR – Black
      </p>
      <p className="price"></p>
      <div className="others">
        <img
          src="/static/images/person-24px.svg"
          alt="리뷰수"
          width="18px"
        ></img>
        <span>1523</span>
        <img src="/static/images/star-24px.svg" alt="리뷰수" width="18px"></img>
        <span>4.1/5</span>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;
