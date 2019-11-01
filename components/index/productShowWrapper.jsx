import React from 'react';
import Link from 'next/link';

import formattingComma from '../../function/formattingComma';
import {
  ProductShowWrapperStyled,
  ProductDetails,
} from '../../styled-components/index/productShowWrapper';

const ProductShowWrapper = ({ img, name, price, asin }) => {
  return (
    <Link href={`/product/${asin}`} prefetch={false}>
      <ProductShowWrapperStyled>
        <div className="productImage">
          <img src={img} alt={name} />
        </div>
        <ProductDetails>
          <p className="title">{name}</p>
          <p className="price">{`\$${formattingComma(price)}`}</p>
        </ProductDetails>
      </ProductShowWrapperStyled>
    </Link>
  );
};

export default ProductShowWrapper;
