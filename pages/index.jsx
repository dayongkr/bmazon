import React from 'react';
import { useSelector } from 'react-redux';

import MainSearch from '../components/index/mainSearch';
import NoticeBar from '../components/index/noticeBar';
import SubWrapper from '../components/index/subWrapper';
import ExchangeRateInput from '../components/index/exchangeRateInput';
import ProductShowWrapper from '../components/index/productShowWrapper';

import SearchWrapper from '../styled-components/index/searchWrapper';

const Home = () => {
  const { rate, date, time, provider } = useSelector(state => state.exchange);

  return (
    <>
      <SearchWrapper>
        <MainSearch></MainSearch>
      </SearchWrapper>

      <NoticeBar text="2019년 12월 21일 서비스 점검이 있습니다."></NoticeBar>
      <SubWrapper title="주간 인기상품">
        <ProductShowWrapper></ProductShowWrapper>
        <ProductShowWrapper></ProductShowWrapper>
        <ProductShowWrapper></ProductShowWrapper>
      </SubWrapper>
      <SubWrapper title="환율">
        {rate && <ExchangeRateInput rate={rate}></ExchangeRateInput>}
        {date && time && provider && (
          <span
            className="sub"
            style={{
              fontSize: '12px',
              color: '#999',
              marginTop: '10px',
              display: 'inline-block',
              float: 'right',
            }}
          >
            {date + ' ' + time + ' ' + provider}
          </span>
        )}
      </SubWrapper>
    </>
  );
};

export default Home;
