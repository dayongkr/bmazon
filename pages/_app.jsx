import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Provider, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import rootSaga from '../sagas';
import reducer from '../reducers';
import '../public/static/empty.css';
// import configureStore from '../store';

const UseEffectApp = dynamic(import('../components/useEffectApp'), {
  ssr: false,
});
import Header from '../components/header';

import { createGlobalStyle } from 'styled-components';
import ResetStyle from '../styled-components/resetStyle';
import { LOAD_USER_REQUEST } from '../reducers/user';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ddd;
    color: #333;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: normal;
  }

  .slick-slider, .slick-slider * {
    outline:none;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  min-height: 100vh;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const App = ({ Component, store, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <ResetStyle></ResetStyle>
        <Head>
          <title>bmazon</title>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>
        </Head>
        <MainWrapper>
          <Header pageProps={pageProps}></Header>
          <UseEffectApp>
            <Component {...pageProps}></Component>
          </UseEffectApp>
        </MainWrapper>
      </Provider>
    </>
  );
};

App.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  const dispatch = ctx.store.dispatch;
  if (ctx.isServer && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.user.me) {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    // process.env.NODE_ENV === 'production';
    // ? compose(applyMiddleware(...middlewares)):
    compose(
      applyMiddleware(...middlewares),
      !options.isServer &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(App));
