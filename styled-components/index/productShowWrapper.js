import styled from 'styled-components';

export const ProductShowWrapperStyled = styled.div`
  height: 75px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  & + & {
    margin-top: 15px;
  }

  & .productImage {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #eee;
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

export const ProductDetails = styled.div`
  position: absolute;
  left: 75px;
  right: 15px;
  top: 12.5px;

  & .title {
    font-size: 14px;
    color: #666;
    height: 30px;
  }

  & .price {
    float: left;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }
`;
