import React from 'react';

import { ProductInfoWrapper } from '../../styled-components/product/product';

const ProductInfo = ({ children, id, text }) => {
  return (
    <ProductInfoWrapper>
      <p className="title" id={id}>
        {text}
      </p>
      {children}
    </ProductInfoWrapper>
  );
};

export default ProductInfo;
