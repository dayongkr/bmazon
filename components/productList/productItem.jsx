import React from 'react';

import { ProductItemWrapper } from '../../styled-components/productList/productList';

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
