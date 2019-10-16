import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const ExchangeRateWrapper = styled.div`
  height: 40px;
  position: relative;

  & + & {
    margin-top: 10px;
  }

  & .country {
    line-height: 40px;
    position: absolute;
    font-size: 23px;
    top: 0;
    bottom: 0;
    left: 12px;
    margin: auto;
  }

  & .exchangeRateInput {
    width: 80%;
    height: 40px;
    margin: auto;
    border: none;
    border-radius: 40px;
    background-color: #eeeeee;
    outline: none;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 0 12px 0 48px;
  }
`;

const ExchangeRateInput = ({ rate }) => {
  const [exchangeRateValueA, setExchangeRateValueA] = useState(1);
  const [exchangeRateValueB, setExchangeRateValueB] = useState(rate);

  const onChangeExchangeRate = useCallback(
    (e, currency) => {
      if (/[^0-9.]/g.test(e.target.value)) {
        return;
      }
      if (e.target.value.includes('.')) {
        if (e.target.value.length - e.target.value.indexOf('.') === 4) {
          return;
        }
        if (e.target.value.indexOf('.') !== e.target.value.lastIndexOf('.')) {
          return;
        }
      }
      if (currency === 'A') {
        setExchangeRateValueA(e.target.value);
        setExchangeRateValueB((e.target.value * rate).toFixed(2));
      } else {
        setExchangeRateValueA((e.target.value / rate).toFixed(2));
        setExchangeRateValueB(e.target.value);
      }
    },
    [rate],
  );

  const onBlurExhcangeRate = useCallback(
    e => {
      if (exchangeRateValueA === '' || exchangeRateValueB === '') {
        setExchangeRateValueA(1);
        setExchangeRateValueB(rate);
      }
    },
    [exchangeRateValueA, exchangeRateValueB, rate],
  );

  return (
    <>
      <ExchangeRateWrapper>
        <span className="country">🇺🇸</span>
        <input
          className="exchangeRateInput"
          onChange={useCallback(e => onChangeExchangeRate(e, 'A'), [rate])}
          onBlur={onBlurExhcangeRate}
          value={exchangeRateValueA}
        ></input>
      </ExchangeRateWrapper>
      <ExchangeRateWrapper>
        <span className="country">🇰🇷</span>
        <input
          className="exchangeRateInput"
          onChange={useCallback(e => onChangeExchangeRate(e, 'B'), [rate])}
          onBlur={onBlurExhcangeRate}
          value={exchangeRateValueB}
        ></input>
      </ExchangeRateWrapper>
    </>
  );
};

export default ExchangeRateInput;
