import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createGlobalStyle } from 'styled-components';

import ResetStyle from '../styled-components/resetStyle';

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
`;

class MyDocument extends Document {
  static getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props}></App>),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <GlobalStyle></GlobalStyle>
        <ResetStyle></ResetStyle>
        <Head>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap"></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
