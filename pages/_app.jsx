import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reducer from '../reducers';

const UseEffect_app = dynamic(import('../components/useEffect_app'), {
  ssr: false,
});
import Header from '../components/header';

const App = ({ Component, store, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>bmazon</title>
        </Head>
        <div
          style={{
            maxWidth: '500px',
            margin: 'auto',
            backgroundColor: '#eee',
            overflow: 'auto',
            height: '100vh',
            boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
          }}
        >
          <Header pageProps={pageProps}></Header>
          <UseEffect_app>
            <Component {...pageProps}></Component>
          </UseEffect_app>
        </div>
      </Provider>
    </>
  );
};

App.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
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
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(App));
