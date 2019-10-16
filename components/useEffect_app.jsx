import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  EXCHANGE_RATE_REQUEST,
  EXCHANGE_RATE_SUCCESS,
} from '../reducers/exchange';

const UseEffect_app = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!window.localStorage.getItem('exchangeRate')) {
      dispatch({ type: EXCHANGE_RATE_REQUEST });
    } else {
      const data = JSON.parse(window.localStorage.getItem('exchangeRate'));
      dispatch({
        type: EXCHANGE_RATE_SUCCESS,
        data: {
          rate: data.rate,
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
