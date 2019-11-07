import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
const { default: BootPay } = process.browser && require('bootpay-js');

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
  const { me } = useSelector(state => state.user);
  const [productPrice, setProductPrice] = useState(0);
  const [feePrice, setFeePrice] = useState(0);

  const onClickPay = () => {
    if (process.browser && me && items) {
      BootPay.request({
        price: 1000,
        application_id: '5dc235374f74b40025c5f552',
        name: '테스트',
        pg: 'inicis',
        method: 'card',
        show_agree_window: 0,
        items: items.map(item => ({
          item_name: item.name,
          qty: item.count,
          unique: item.asin,
          price: item.price,
        })),
        user_info: {
          username: me.nickname,
          email: me.email,
          addr: 'testAdress',
          phone: `0${me.tel}`,
        },
        order_id: `order_id_${Date.now()}`,
        extra: {
          quota: '0',
        },
      })
        .error(e => console.error(e))
        .confirm(data => BootPay.transactionConfirm(data))
        .done(data => console.log(data));
    }
  };

  useEffect(() => {
    if (items && !(items.length === 0)) {
      if (items.length === 1) {
        setProductPrice(+items[0].price);
      } else {
        setProductPrice(
          +items
            .reduce((x, y) => {
              return {
                price: x.price * (x.count ? x.count : 1) + y.price * y.count,
              };
            })
            .price.toFixed(2),
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

      <div className="defaultButton" onClick={onClickPay}>
        결제하기
      </div>
    </CartMainWrapper>
  );
};

Cart.getInitialProps = async ctx => {
  const { dispatch } = ctx.store;
  dispatch({ type: GET_CART_REQUEST });
};

export default Cart;
