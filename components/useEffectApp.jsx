import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';

import ChannelService from '../function/ChannelService';

import {
  EXCHANGE_RATE_REQUEST,
  EXCHANGE_RATE_SUCCESS,
} from '../reducers/exchange';

const UseEffectApp = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!firebase.app.length) {
      const firebaseConfig = {
        apiKey: 'AIzaSyB9Le5JR703ViaRgGq3UDMF2TtH8-WjtIA',
        authDomain: 'bmazon-79622.firebaseapp.com',
        databaseURL: 'https://bmazon-79622.firebaseio.com',
        projectId: 'bmazon-79622',
        storageBucket: 'bmazon-79622.appspot.com',
        messagingSenderId: '439174130509',
        appID: '1:439174130509:web:dd773118ff730a57e4e50',
      };
      firebase.initializeApp(firebaseConfig);
    }
    ChannelService.boot({
      pluginKey: '45da7edc-b6ce-44bb-a19d-629209caceae',
    });

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
    return () => {
      ChannelService.shutdown();
    };
  }, []);
  return <> {children}</>;
};

UseEffectApp.getInitialProps = async context => {
  console.log(context);
};

export default UseEffectApp;
