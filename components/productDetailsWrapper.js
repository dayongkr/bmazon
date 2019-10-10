import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import CategoryTag from '../components/categoryTag';
import OptionSliderList from '../components/optionSliderList';
import formattingComma from '../function/formattingComma';

const ProductDetailsWrapper = () => {
  const { rate, date, time } = useSelector(state => state.exchange);
  const { name, price, category, asin, options, imageUrl } = useSelector(
    state => state.product,
  );
  const [dimmed, setDimmed] = useState('none');

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
    <div id="productDetailsWrapper">
      <p className="title">{name && name}</p>
      <div id="productCategoryWrapper">
        {category &&
          category.map(item => (
            <CategoryTag key={item} text={item}></CategoryTag>
          ))}
      </div>
      <div id="productPrice">
        <span className="main">
          {price && rate && `₩${formattingComma(price * rate, true)}`}
        </span>
        <span className="sub">{price && `\$${formattingComma(price)}`}</span>
      </div>
      <p className="exchangeRateDate">
        <span className="main">{rate && `$1 = ₩${formattingComma(rate)}`}</span>
        {rate && date && time && `(${date} ${time.substring(0, 5)} 기준)`}
      </p>
      <p className="shipPrice">
        배송비
        <span className="main">
          {rate && `₩${formattingComma(7.89 * rate, true)}`}
        </span>
      </p>
      {options && (
        <div id="productOptionsWrapper" onClick={onClickOption}>
          <div id="productOptions">
            <div id="productOptionText">
              <p className="optionName">{options.length}가지 색</p>
              <p className="option">
                {options.filter(item => item.asin === asin)[0].color}
              </p>
            </div>
            <div id="productOptionImage">
              <img
                className="optionImage"
                src={imageUrl}
                alt="옵션이미지"
              ></img>
              <img
                width="30px"
                src="/static/images/keyboard_arrow_right-24px.svg"
                alt="none"
              ></img>
            </div>
          </div>
        </div>
      )}

      <div
        id="dimmedOption"
        onClick={onClickOption}
        style={{ display: dimmed }}
      >
        <div id="optionSliderWrapper">
          <ul id="optionSlider">
            {options &&
              options.map(item => (
                <OptionSliderList
                  key={item.asin}
                  img={imageUrl}
                  option={item}
                  selected={item.asin === asin}
                ></OptionSliderList>
              ))}
          </ul>
        </div>
      </div>
      <a
        href={
          asin ? `https://www.amazon.com/dp/${asin}` : 'https://www.amazon.com'
        }
      >
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG5.png"
          width="50"
          className="productOriginShop"
          alt="상품 원본 사이트"
        ></img>
      </a>
      <div id="productButtonWrapper">
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
      </div>
    </div>
  );
};

export default ProductDetailsWrapper;
