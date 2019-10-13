import React, { useState, useCallback } from 'react';

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
      <div className="exchangeRateWrapper">
        <span className="country">🇺🇸</span>
        <input
          className="exchangeRateInput"
          onChange={useCallback(e => onChangeExchangeRate(e, 'A'), [rate])}
          onBlur={onBlurExhcangeRate}
          value={exchangeRateValueA}
        ></input>
      </div>
      <div className="exchangeRateWrapper">
        <span className="country">🇰🇷</span>
        <input
          className="exchangeRateInput"
          onChange={useCallback(e => onChangeExchangeRate(e, 'B'), [rate])}
          onBlur={onBlurExhcangeRate}
          value={exchangeRateValueB}
        ></input>
      </div>
    </>
  );
};

export default ExchangeRateInput;
