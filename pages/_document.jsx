import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

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
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
