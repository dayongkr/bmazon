import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GET_CART_REQUEST } from '../reducers/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch({ type: GET_CART_REQUEST });
  }, []);
  return (
    <>
      {items &&
        items.map((item, index) => (
          <img key={index} src={item.image} width="75px" alt={item.name} />
        ))}
    </>
  );
};

export default Cart;
