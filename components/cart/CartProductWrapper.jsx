import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { CartProductWrapperStyled } from '../../styled-components/cart';
import { DELETE_CART_REQUEST, UPDATE_CART_REQUEST } from '../../reducers/cart';

const CartProductWrapper = ({ image, name, price, count, asin }) => {
  const [countInput, setCountInput] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    if (+countInput > 999) {
      setCountInput(999);
    }
  }, [countInput]);

  const onChangeCount = useCallback(e => {
    console.log(e.target.value);
    if (!e.target.value.match(/\D/g)) {
      setCountInput(e.target.value);
    }
    if (e.target.value[0] === '0') {
      setCountInput(e.target.value.substring(1));
    }
  }, []);

  const onBlurCount = useCallback(
    e => {
      if (!e.target.value) {
        setCountInput(1);
      }
      dispatch({
        type: UPDATE_CART_REQUEST,
        data: { asin, count: countInput },
      });
    },
    [countInput],
  );

  const onClickCountPlus = useCallback(
    e => {
      if (countInput < 999) {
        setCountInput(+countInput + 1);

        dispatch({
          type: UPDATE_CART_REQUEST,
          data: { asin, count: +countInput + 1 },
        });
      }
    },
    [countInput],
  );

  const onClickCountMinus = useCallback(
    e => {
      if (!(+countInput === 1)) {
        setCountInput(+countInput - 1);

        dispatch({
          type: UPDATE_CART_REQUEST,
          data: { asin, count: +countInput - 1 },
        });
      }
    },
    [countInput],
  );

  const onClickDelete = useCallback(
    e => {
      dispatch({ type: DELETE_CART_REQUEST, data: asin });
    },
    [asin],
  );

  return (
    <CartProductWrapperStyled>
      <div className="imageWrapper">
        <Link href={`/product/${asin}`}>
          <img src={image} alt={name}></img>
        </Link>
      </div>
      <div className="subWrapper">
        <Link href={`/product/${asin}`}>
          <p className="title">{name}</p>
        </Link>
        <p className="price">${price}</p>
      </div>
      <div className="countWrapper">
        <button onClick={onClickCountPlus} type="button" className="addButton">
          <img src="/static/images/add-24px.svg" width="18px" alt="더하기" />
        </button>
        <input
          onChange={onChangeCount}
          onBlur={onBlurCount}
          value={countInput}
          type="text"
          className="count"
        />
        <button
          onClick={onClickCountMinus}
          type="button"
          className="removeButton"
        >
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
