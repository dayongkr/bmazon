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
    cursor: pointer;
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
    cursor: pointer;
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
    outline: none;
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

  & .defaultButton {
    cursor: pointer;
    width: 100%;
    height: 40px;
    background-color: #5e3eda;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
  }
`;

export const CartPriceWrapper = styled.div`
  margin: 30px 0;
`;

export const CartPriceDetails = styled.div`
  margin: 7px 0;
  display: flex;
  align-items: center;
  & p {
    color: #999;
    font-size: 16px;
  }

  & p.title {
    width: 80px;
    font-size: 14px;
  }
`;

export const CartPriceDetailsBig = styled(CartPriceDetails)`
  border-top: ${props => props.border && '1px solid #eee'};
  padding: ${props => props.border && '20px 0 0px'};
  margin: ${props => props.border && '20px 0 0'};
  & p {
    font-size: 20px;
    color: #666;
  }

  & p.title {
    font-size: 16px;
  }

  & p.price {
    color: #333;
    font-weight: bold;
  }
`;
