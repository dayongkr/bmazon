import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SET_EXCHANGE_RATE } from '../reducers/exchange';

const UseEffect_app = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!window.localStorage.getItem('exchangeRate')) {
      axios('/static/finace.json').then(({ data }) => {
        window.localStorage.setItem('exchangeRate', JSON.stringify(data[0]));
        dispatch({
          type: SET_EXCHANGE_RATE,
          data: {
            rate: data[0].cashBuyingPrice,
            date: data[0].date,
            time: data[0].time,
            provider: data[0].provider,
          },
        });
      });
    } else {
      const data = JSON.parse(window.localStorage.getItem('exchangeRate'));
      dispatch({
        type: SET_EXCHANGE_RATE,
        data: {
          rate: data.cashBuyingPrice,
          date: data.date,
          time: data.time,
          provider: data.provider,
        },
      });
    }
  }, []);
  return <> {children}</>;
};

export default UseEffect_app;
