import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from './Alert';
import ChannelService from '../function/ChannelService';

import {
  EXCHANGE_RATE_REQUEST,
  EXCHANGE_RATE_SUCCESS,
} from '../reducers/exchange';
import { RESET_ALERT } from '../reducers/alert';

const UseEffectApp = ({ children }) => {
  const { alerted, text } = useSelector(state => state.alert);
  const { me } = useSelector(state => state.user);
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

  useEffect(() => {
    let timeout;
    if (alerted) {
      timeout = setTimeout(() => {
        dispatch({ type: RESET_ALERT });
      }, 2000);
    }
    return () => {
      if (alerted) {
        clearTimeout(timeout);
      }
    };
  }, [alerted]);

  useEffect(() => {
    if (me) {
      ChannelService.boot({
        pluginKey: '45da7edc-b6ce-44bb-a19d-629209caceae',
        profile: {
          name: me.nickname,
          mobileNumber: '0' + String(me.tel),
        },
      });
    } else {
      ChannelService.boot({
        pluginKey: '45da7edc-b6ce-44bb-a19d-629209caceae',
      });
    }
    return () => {
      ChannelService.shutdown();
    };
  }, [me]);

  return (
    <>
      <Alert text={text} className={alerted ? 'active' : ''} />
      {children}
    </>
  );
};

export default UseEffectApp;
