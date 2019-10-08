import React from 'react';
import Link from 'next/link';

import formattingComma from '../function/formattingComma';

const ProductShowWrapper = ({
  src,
  title = '상품이름',
  price = '17',
  href = 'https://www.amazon.com',
}) => {
  return (
    <Link href="/product">
      <div className="productShowWrapper">
        <div
          className="productImage"
          style={
            src
              ? { backgroundImage: `url(${src})` }
              : { backgroundImage: 'none' }
          }
        ></div>
        <div className="productDetails">
          <p className="title">{title}</p>
          <p className="price">{`\$${formattingComma(price)}`}</p>
        </div>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG5.png"
          width="25"
          alt="아마존 로고"
          className="shoppingLogoImage"
        ></img>
      </div>
    </Link>
  );
};

export default ProductShowWrapper;
