import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { ProductItemWrapper } from '../../styled-components/productList/productList';

const ProductItem = ({ title, reviewers, star, price, asin, src }) => {
  const router = useRouter();

  const clickItem = useCallback(() => {
    router.push(`/product/${asin && asin}`);
  });
  return (
    <ProductItemWrapper onClick={clickItem}>
      <div className="productImage">
        <img src={src && src} alt={title && title}></img>
      </div>
      {/* <p className="category">Electronics</p> */}
      <p className="title">{title && title}</p>
      <p className="price">
        {price ? price : '상품을 클릭하여 가격을 확인하세요!'}
      </p>
      <div className="others">
        <img
          src="/static/images/person-24px.svg"
          alt="리뷰수"
          width="18px"
        ></img>
        <span>{reviewers ? reviewers : '0'}</span>
        <img
          src="/static/images/star-24px.svg"
          alt="평가평균"
          width="18px"
        ></img>
        <span>{star ? star.match(/\d\.\d/) : '0'}/5</span>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;
