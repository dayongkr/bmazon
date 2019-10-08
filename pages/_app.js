import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// import rootSaga from '../sagas';
import reducer from '../reducers';

import UseEffect_app from '../components/useEffect_app';

const App = ({ Component, store }) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>bmazon</title>
          <link rel="stylesheet" href="/static/style/reset.css"></link>
          <link rel="stylesheet" href="/static/style/style.css"></link>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <Header></Header>
        <div id="mainWrapper" style={{ marginTop: '40px' }}>
          <UseEffect_app>
            <Component></Component>
          </UseEffect_app>
        </div>
      </Provider>
    </>
  );
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f,
        );
  const store = createStore(reducer, initialState, enhancer);
  // sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(App);
