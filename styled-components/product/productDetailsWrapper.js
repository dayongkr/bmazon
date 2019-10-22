import styled from 'styled-components';

export const ProductDetailsWrapperStyled = styled.div`
  width: 100%;
  position: relative;
  padding: 10px 20px 20px;

  & .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
  }
`;

export const ProductCategoryWrapper = styled.div`
  margin: 5px 0;

  & .categoryTag {
    display: inline-block;
    font-size: 12px;
    padding: 5px 8px;
    background-color: #333;
    color: white;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    margin-top: 5px;
  }
`;

export const ProductPrice = styled.div`
  margin: 15px 0 10px;
  font-size: 16px;
  color: #999;
  font-style: italic;

  & .main {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    font-style: normal;
    margin-right: 5px;
  }
`;

export const ExchangeRateDate = styled.p`
  font-size: 12px;
  color: #999;
  font-style: italic;

  & .main {
    font-size: 12px;
    color: #666;
    margin-right: 5px;
    font-style: normal;
    font-weight: bold;
  }
`;

export const ShipPrice = styled.p`
  font-size: 12px;
  color: #999;
  margin: 5px 0 0;

  & .main {
    color: #999;
    font-weight: bold;
    margin-left: 5px;
  }
`;

export const ProductButtonWrapper = styled.div`
  margin: 15px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 15px 0 0;

  & button {
    border-radius: 5px;
    background-color: #eee;
    height: 40px;
    font-weight: bold;
    font-size: 14px;
    color: #666;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
  }
  & img {
    margin-right: 3px;
  }

  & .productHeartButton {
    width: 65%;
    margin-right: 10px;
  }

  & .productShareButton {
    width: 35%;
  }
`;

export const DimmedOption = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  & #optionBackground {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  & #optionSliderWrapper {
    padding-bottom: 20px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    min-height: 110px;
  }

  & ul {
    overflow-y: auto;
    white-space: nowrap;
  }

  & .optionTitle {
    margin: 0 0 0 10px;
    height: 40px;
    line-height: 40px;
    color: #666;
    font-weight: bold;
  }

  & .optionTitle .title {
    font-weight: bold;
    color: #333;
    font-size: 1.1em;
  }

  & li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 5px;
    height: 70px;
    padding: 10px;
    margin: 0 10px;
    min-width: 130px;
    position: relative;
    cursor: pointer;
  }

  & li + li {
    margin-left: 0;
  }

  & li.selected {
    border: 1px solid #5e3eda;
    background-color: rgba(94, 62, 218, 0.1);
  }

  & li.none {
    border: 1px dashed #999;
    color: #999;
  }

  & li .optionImageWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
