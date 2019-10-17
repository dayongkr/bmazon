import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

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

const ProductDetailsWrapper = () => {
  const { rate, date, time } = useSelector(state => state.exchange);
  const { name, price, category, asin, options, imageUrl } = useSelector(
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
    <ProductDetailsWrapperStyled>
      <p className="title">{name && name}</p>
      <ProductCategoryWrapper>
        {category &&
          category.map(item => (
            <CategoryTag key={item} text={item}></CategoryTag>
          ))}
      </ProductCategoryWrapper>
      <ProductPrice>
        <span className="main">
          {price && rate && `₩${formattingComma(price * rate, true)}`}
        </span>
        <span className="sub">{price && `\$${formattingComma(price)}`}</span>
      </ProductPrice>
      <ExchangeRateDate>
        <span className="main">{rate && `$1 = ₩${formattingComma(rate)}`}</span>
        {rate && date && time && `(${date} ${time.substring(0, 5)} 기준)`}
      </ExchangeRateDate>
      <ShipPrice>
        배송비
        <span className="main">
          {rate && `₩${formattingComma(7.89 * rate, true)}`}
        </span>
      </ShipPrice>
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
  );
};

export default ProductDetailsWrapper;
