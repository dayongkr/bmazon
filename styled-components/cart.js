import styled from 'styled-components';

export const CartProductWrapperStyled = styled.div`
  height: 100px;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 12.5px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 75px;
    max-height: 75px;
  }

  & .imageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
  }

  & .subWrapper {
    width: calc(100% - 130px);
    margin: 0 10px;
  }

  & .title {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 41px;
    line-height: 1.2em;
  }

  & .price {
    font-size: 14px;
    margin-top: 3px;
    color: #666;
  }

  & .delete {
    position: absolute;
    right: -8px;
    top: -8px;
  }

  & .countWrapper {
    width: 36px;
    height: 75px;
    border-radius: 5px;
    border: 1px solid #eee;
    overflow: hidden;
  }

  & .countWrapper button {
    width: 35px;
    height: 28px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .countWrapper input[type='text'] {
    width: 35px;
    height: 19px;
    border: none;
    text-align: center;
    padding: 0;
    display: block;
    font-size: 13px;
    outline: none;
    font-weight: bold;
    color: #666;
  }
`;

export const CartMainWrapper = styled.div`
  padding: 20px;

  & h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0 30px;
    display: inline-block;
  }

  & .notice {
    font-size: 18px;
    text-align: center;
    margin: 200px 0;
    color: #666;
  }
`;
