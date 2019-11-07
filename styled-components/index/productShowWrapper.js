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
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .productImage > img {
    max-width: 100%;
    max-height: 100%;
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
    line-height: 16px;
    height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  & .price {
    float: left;
    font-size: 12px;
    color: #999;
    margin-top: 3px;
  }
`;
