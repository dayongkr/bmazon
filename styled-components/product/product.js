import styled from 'styled-components';

export const ProductMainImageWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  & #productMainImage {
    max-width: 100%;
    max-height: 100vw;
  }
`;

export const ProductWrapper = styled.div`
  background-color: white;
  margin-bottom: 70px;
`;

export const ProductBottomNavigation = styled.div`
  width: 100%;
  max-width: 500px;
  height: 70px;
  background-color: white;
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  padding: 10px;

  & #productPutCartButton {
    cursor: pointer;
    width: 100%;
    height: 50px;
    background-color: ${props => (props.loaded ? '#5e3eda' : '#666')};
    border-radius: 5px;
    color: white;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
`;

export const ProductMainNavigationWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid #eee;
  overflow-x: auto;
  overflow-y: hidden;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #eee;
`;

export const ProductMainNavigationStyled = styled.ul`
  font-size: 14px;
  color: #999;
  white-space: nowrap;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  & li {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }

  & li.active {
    font-weight: bold;
    color: #333;
    border-bottom: 3px solid #333;
  }

  & li:first-child {
    margin-left: 20px;
  }

  & li:last-child {
    margin-right: 20px;
  }

  & li + li {
    margin-left: 20px;
  }
`;

export const ProductInfoWrapper = styled.div`
  overflow-x: auto;
  margin: 5px 0;
`;

export const ProductDetailInfoWrapper = styled(ProductInfoWrapper)`
  & img {
    vertical-align: top;
    max-width: 100%;
    border: 0;
  }
  & .a-spacing-base,
  & .a-ws .a-ws-spacing-base {
    margin-bottom: 1.3rem !important;
  }

  & h1 h2 {
    padding-bottom: 0.4rem;
  }

  & h4 {
    font-weight: bold;
    line-height: 1.35;
  }

  & h1,
  & h2,
  & h3,
  & h4 {
    text-rendering: optimizeLegibility;
  }

  & .a-spacing-small,
  & .a-ws .a-ws-spacing-small {
    margin-bottom: 0.9rem !important;
  }

  & .a-unordered-list {
    margin: 0 0 0 1.8rem;
  }

  & .a-unordered-list li {
    word-wrap: break-word;
    list-style: disc;
  }

  & p {
    margin: 0 0 1.3rem 0;
  }

  & p + p {
    margin-top: -0.4rem;
  }

  & .a-text-bold {
    font-weight: 700 !important;
  }

  & a,
  & a.a-touch-press,
  & a:link,
  & a:visited {
    text-decoration: none;
    color: #0066c0;
  }

  & .a-text-center {
    text-align: center !important;
    padding-bottom: 1.5rem;
  }

  .aplus-v2 .premium-aplus .aplus-h1 {
    font-size: 22px;
    line-height: 1.2em;
    font-weight: 500;
  }

  & .a-button {
    background: #e7e9ec;
    border-radius: 0.3rem;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 0.1rem;
    cursor: pointer;
    display: block;
    padding: 0;
    text-align: center;
    text-decoration: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  & .a-button-dark,
  & .a-button-search {
    background: #444c55;
    border-color: #3d444c #2f353b #2c3137;
    color: #fff;
  }

  & .a-button-dark .a-button-inner,
  & .a-button-search .a-button-inner {
    box-shadow: 0 0.1rem 0 rgba(255, 255, 255, 0.15) inset;
  }
  & .a-button-dark .a-button-inner,
  & .a-button-search .a-button-inner {
    background: #5b626a;
    background: -webkit-linear-gradient(top, #72787f, #444c55) !important;
    background: linear-gradient(to bottom, #72787f, #444c55) !important;
  }
  & .a-button .a-button-inner {
    background: #eff1f3;
    background: -webkit-linear-gradient(top, #f7f8fa, #e7e9ec);
    background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  }
  & .a-button-inner {
    display: block;
    position: relative;
    overflow: hidden;
    height: 100%;
    box-shadow: 0 0.1rem 0 rgba(255, 255, 255, 0.6) inset;
    border-radius: 0.2rem;
  }

  & .a-button a,
  & .a-button:hover a {
    text-decoration: none !important;
  }
  & a.a-button-text,
  & button.a-button-text {
    width: 100%;
    height: 100%;
  }
  & .a-button-text {
    background-color: transparent;
    border: 0;
    display: block;
    line-height: 1.35;
    margin: 0;
    outline: 0;
    padding: 1.2rem 1.6rem 1.2rem 1.7rem;
    text-align: center;
    color: #fff;
  }
  & a {
    -webkit-tap-highlight-color: transparent;
  }

  & .a-button-dark .a-button-text,
  & .a-button-search .a-button-text {
    font-weight: 700;
    color: #fff;
  }

  & .aplus-v2.mobile .premium-aplus-module-12 .aplus-goto-btn.aplus-active {
    background-color: #000;
    color: #fff;
  }

  & video {
    width: 100%;
    object-fit: cover;
  }

  & .a-box {
    display: block;
    border-radius: 0.4rem;
    border: 0.1rem #ddd solid;
    background-color: #fff;
  }
`;

export const ProductMainInfoWrapper = styled.div`
  padding: 15px;
  & p.title {
    font-size: 26px;
    font-weight: bold;
    padding: 15px 0;
    border-bottom: 2px solid #eee;
    margin: 0;
  }
`;
