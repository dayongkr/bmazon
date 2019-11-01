import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CartProductWrapperStyled } from '../../styled-components/cart';
import { DELETE_CART_REQUEST } from '../../reducers/cart';

const CartProductWrapper = ({ image, name, price, count, asin }) => {
  const [countInput, setCountInput] = useState(count);
  const dispatch = useDispatch();

  const onChangeCount = useCallback(e => {
    if (!e.target.value.match(/\D/g)) {
      setCountInput(e.target.value);
    }
  }, []);
  const onBlurCount = useCallback(e => {
    if (!e.target.value || e.target.value === '0') {
      setCountInput(1);
    }
  }, []);

  const onClickDelete = useCallback(
    e => {
      dispatch({ type: DELETE_CART_REQUEST, data: asin });
    },
    [asin],
  );

  return (
    <CartProductWrapperStyled>
      <div className="imageWrapper">
        <img src={image}></img>
      </div>
      <div className="subWrapper">
        <p className="title">{name}</p>
        <p className="price">${price}</p>
      </div>
      <div className="countWrapper">
        <button type="button" className="addButton">
          <img src="/static/images/add-24px.svg" width="18px" alt="더하기" />
        </button>
        <input
          onChange={onChangeCount}
          onBlur={onBlurCount}
          value={countInput}
          type="text"
          className="count"
        />
        <button type="button" className="removeButton">
          <img src="/static/images/remove-24px.svg" width="18px" alt="빼기" />
        </button>
      </div>
      <img
        className="delete"
        src="/static/images/cancel-24px.svg"
        width="20px"
        alt="삭제하기"
        onClick={onClickDelete}
      />
    </CartProductWrapperStyled>
  );
};

export default CartProductWrapper;
