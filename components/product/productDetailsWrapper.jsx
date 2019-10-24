import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import CategoryTag from './categoryTag';
import formattingComma from '../../function/formattingComma';
import OptionsWrapper from './optionsWrapper';
import OptionSliderList from './optionSliderList';
import {
  ProductDetailsWrapperStyled,
  ProductCategoryWrapper,
  ProductPrice,
  ExchangeRateDate,
  ShipPrice,
  ProductButtonWrapper,
  DimmedOption,
} from '../../styled-components/product/productDetailsWrapper';

const MovingKeyframes = keyframes`
  0%{
    filter:brightness(1);
  }
  100%{
    filter:brightness(0.9);
  }
`;

const Div = styled.div`
  background-color: #eee;
  border-radius: 5px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '16px'};
  margin: 10px 0;
  animation-name: ${MovingKeyframes};
  animation-duration: 1s;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const ProductDetailsWrapper = () => {
  const { rate, date, time } = useSelector(state => state.exchange);
  const { name, price, category, asin, options, imageUrl, ship } = useSelector(
    state => state.product,
  );

  const [dimmed, setDimmed] = useState('none');
  const [optionSelect, setOptionSelect] = useState([]);

  useEffect(() => {
    if (options) {
      setOptionSelect([
        ...options.option.filter(item => item.asin === asin)[0].list,
      ]);
    }
  }, [options]);

  const onClickOption = useCallback(
    e => {
      if (dimmed === 'none') {
        setDimmed('block');
      } else {
        setDimmed('none');
      }
    },
    [dimmed],
  );

  return (
    <>
      {name ? (
        <ProductDetailsWrapperStyled>
          <p className="title">{name && name}</p>
          <ProductCategoryWrapper>
            {category &&
              category.map(item => (
                <CategoryTag key={item} text={item}></CategoryTag>
              ))}
          </ProductCategoryWrapper>
          {price && (
            <ProductPrice>
              <span className="main">
                {rate && `₩${formattingComma(price * rate, true)}`}
                {name && !price && '구매불가 상품입니다.'}
              </span>
              <span className="sub">{`\$${formattingComma(price)}`}</span>
            </ProductPrice>
          )}
          {rate && price && (
            <>
              <ShipPrice>
                배송비
                <span className="main">
                  {ship
                    ? `₩${formattingComma(ship * rate, true)}`
                    : '배송 불가'}
                </span>
                <span className="sub">{ship && `$${ship}`}</span>
              </ShipPrice>
              <ExchangeRateDate>
                <span className="main">{`$1 = ₩${formattingComma(rate)}`}</span>
                {date && time && `(${date} ${time.substring(0, 5)} 기준)`}
              </ExchangeRateDate>
            </>
          )}

          {options &&
            options.option.length !== 1 &&
            options.listName.map((item, index) => {
              return (
                <OptionsWrapper
                  options={options}
                  click={onClickOption}
                  img={imageUrl}
                  index={index}
                  selectedAsin={asin}
                  key={item + 'OptionsWrapper'}
                  listType={item}
                ></OptionsWrapper>
              );
            })}

          <DimmedOption style={{ display: dimmed }}>
            <div id="optionBackground" onClick={onClickOption}></div>
            <div id="optionSliderWrapper">
              {options &&
                options.option.length !== 1 &&
                options.listName.map((sliderItem, sliderIndex) => {
                  return (
                    <OptionSliderList
                      sliderItem={sliderItem}
                      sliderIndex={sliderIndex}
                      options={options}
                      key={sliderItem + `listName`}
                      asin={asin}
                      optionSelect={optionSelect}
                      setOptionSelect={setOptionSelect}
                    ></OptionSliderList>
                  );
                })}
            </div>
          </DimmedOption>
          <ProductButtonWrapper>
            <button className="productHeartButton">
              <img
                src="/static/images/favorite_border-24px.svg"
                width="17"
                alt="찜하기 버튼"
              ></img>
              찜하기
            </button>
            <button className="productShareButton">
              <img
                src="/static/images/share-24px.svg"
                width="17"
                alt="공유하기 버튼"
              ></img>
              공유하기
            </button>
          </ProductButtonWrapper>
        </ProductDetailsWrapperStyled>
      ) : (
        <ProductDetailsWrapperStyled>
          <Div height="30px" width="60%"></Div>
          <Div width="80%" height="25px"></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
        </ProductDetailsWrapperStyled>
      )}
    </>
  );
};

export default ProductDetailsWrapper;
