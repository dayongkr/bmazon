import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GET_CART_REQUEST } from '../reducers/cart';
import { CartMainWrapper } from '../styled-components/cart';
import CartProductWrapper from '../components/cart/CartProductWrapper';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch({ type: GET_CART_REQUEST });
  }, []);
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
          />
        ))
      ) : (
        <p className="notice">장바구니가 비었습니다.</p>
      )}
    </CartMainWrapper>
  );
};

export default Cart;
