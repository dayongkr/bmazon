import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Clipboard from 'clipboard';

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
import { LoadingBar } from '../../styled-components/loading';
import { CREATE_ALERT } from '../../reducers/alert';

const ProductDetailsWrapper = () => {
  const { rate, date, time } = useSelector(state => state.exchange);
  const {
    name,
    price,
    category,
    asin,
    options,
    imageUrl,
    ship,
    loaded,
  } = useSelector(state => state.product);
  const { timeout, alerted } = useSelector(state => state.alert);
  const dispatch = useDispatch();

  const [dimmed, setDimmed] = useState('none');
  const [optionSelect, setOptionSelect] = useState([]);
  const shareButtonRef = useRef();

  const onClickOption = useCallback(() => {
    if (dimmed === 'none') {
      setDimmed('block');
    } else {
      setDimmed('none');
    }
  }, [dimmed]);

  const onClipboardShare = useCallback(() => {
    dispatch({
      type: CREATE_ALERT,
      data: { text: '복사하였습니다', status: true },
    });
  }, [alerted]);

  const onAlert = useCallback(
    e => {
      dispatch({
        type: CREATE_ALERT,
        data: { text: e.target.dataset.alertText, status: true },
      });
    },
    [alerted],
  );

  useEffect(() => {
    if (options) {
      setOptionSelect([
        ...options.option.filter(item => item.asin === asin)[0].list,
      ]);
    }
  }, [options]);

  useEffect(() => {
    // 클립보드
    const clipboardShare = new Clipboard('.productShareButton');
    clipboardShare.on('success', onClipboardShare);
    return () => {
      clipboardShare.off('success', onClipboardShare);
    };
  }, [alerted, timeout]);

  return (
    <>
      {loaded ? (
        <ProductDetailsWrapperStyled>
          <p className="title">{name && name}</p>
          <ProductCategoryWrapper>
            {category &&
              category.map(item => <CategoryTag key={item} text={item} />)}
          </ProductCategoryWrapper>
          {price && (
            <ProductPrice>
              <span className="main">
                {rate &&
                  `₩${formattingComma((price + (ship || 0)) * rate, true)}`}
                {name && !price && '구매불가 상품입니다.'}
              </span>
              <span className="sub">
                {`$${formattingComma(price)}`}
                {ship && ` + $${formattingComma(ship)}`}
              </span>
            </ProductPrice>
          )}
          {rate && ship && (
            <>
              <ShipPrice>
                {ship ? null : <span className="main">배송 불가</span>}
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
                  key={item}
                  listType={item}
                />
              );
            })}

          <DimmedOption style={{ display: dimmed }}>
            <div id="optionBackground" onClick={onClickOption} />
            <div id="optionSliderWrapper">
              {options &&
                options.option.length !== 1 &&
                options.listName.map((sliderItem, sliderIndex) => {
                  return (
                    <OptionSliderList
                      sliderItem={sliderItem}
                      sliderIndex={sliderIndex}
                      options={options}
                      key={sliderItem}
                      asin={asin}
                      optionSelect={optionSelect}
                      setOptionSelect={setOptionSelect}
                    />
                  );
                })}
            </div>
          </DimmedOption>
          <ProductButtonWrapper>
            <button
              type="button"
              onClick={onAlert}
              className="productHeartButton"
              data-alert-text="해당상품을 찜하였습니다"
            >
              <img
                src="/static/images/favorite_border-24px.svg"
                width="17"
                alt="찜하기 버튼"
              />
              찜하기
            </button>
            <button
              type="button"
              ref={shareButtonRef}
              className="productShareButton"
              data-clipboard-text={process.browser && window.location}
            >
              <img
                src="/static/images/share-24px.svg"
                width="17"
                alt="공유하기 버튼"
              />
              공유하기
            </button>
          </ProductButtonWrapper>
        </ProductDetailsWrapperStyled>
      ) : (
        <ProductDetailsWrapperStyled>
          <LoadingBar height="30px" width="60%" />
          <LoadingBar width="80%" height="25px" />
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
        </ProductDetailsWrapperStyled>
      )}
    </>
  );
};

export default ProductDetailsWrapper;
