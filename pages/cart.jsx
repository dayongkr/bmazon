import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GET_CART_REQUEST } from '../reducers/cart';
import {
  CartMainWrapper,
  CartPriceWrapper,
  CartPriceDetails,
  CartPriceDetailsBig,
} from '../styled-components/cart';
import CartProductWrapper from '../components/cart/CartProductWrapper';
import formattionComma from '../function/formattingComma';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const { rate } = useSelector(state => state.exchange);
  const [productPrice, setProductPrice] = useState(0);
  const [feePrice, setFeePrice] = useState(0);

  useEffect(() => {
    dispatch({ type: GET_CART_REQUEST });
  }, []);

  useEffect(() => {
    if (items && !(items.length === 0)) {
      if (items.length === 1) {
        setProductPrice(+items[0].price);
      } else {
        setProductPrice(
          +items
            .reduce((x, y) => {
              if (typeof x === 'object') {
                return x.price + y.price;
              }
              return x + y.price;
            })
            .toFixed(2),
        );
      }
      setFeePrice(+(productPrice / 10).toFixed(2));
    }
  }, [items, productPrice]);

  return (
    <CartMainWrapper>
      <h1>장바구니</h1>
      {items && items.length !== 0 ? (
        items.map(item => (
          <CartProductWrapper
            image={item.image}
            name={item.name}
            price={item.price}
            count={item.count}
            asin={item.asin}
            key={item.asin}
          />
        ))
      ) : (
        <p className="notice">장바구니가 비었습니다.</p>
      )}

      <CartPriceWrapper>
        <CartPriceDetails>
          <p className="title">상품가격</p>
          <p className="price">${productPrice}</p>
        </CartPriceDetails>
        <CartPriceDetails>
          <p className="title">수수료</p>
          <p className="price">${feePrice}</p>
        </CartPriceDetails>
        <CartPriceDetailsBig border={true}>
          <p className="title">총합($)</p>
          <p className="price">${formattionComma(productPrice + feePrice)}</p>
        </CartPriceDetailsBig>
        <CartPriceDetailsBig border={false}>
          <p className="title">총합(₩)</p>
          <p className="price">
            ₩
            {formattionComma(
              Math.floor((productPrice + feePrice) * rate),
              true,
            )}
          </p>
        </CartPriceDetailsBig>
      </CartPriceWrapper>

      <div className="defaultButton">결제하기</div>
    </CartMainWrapper>
  );
};

export default Cart;
