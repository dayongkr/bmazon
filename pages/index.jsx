import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NoticeBar from '../components/index/noticeBar';
import SubWrapper from '../components/index/subWrapper';
import ExchangeRateInput from '../components/index/exchangeRateInput';
import ProductShowWrapper from '../components/index/productShowWrapper';
import Slide from '../components/index/slide';
import { MD_PRODUCT_LIST_REQUEST } from '../reducers/productList';

const Home = () => {
  const { rate, date, time, provider } = useSelector(state => state.exchange);
  const { mdItems } = useSelector(state => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: MD_PRODUCT_LIST_REQUEST });
  }, []);

  return (
    <div id="indexMainWrapper" style={{ backgroundColor: '#eee' }}>
      <Slide />
      <NoticeBar text="2019년 12월 21일 서비스 점검이 있습니다." />
      <SubWrapper title="MD 추천상품">
        {mdItems &&
          mdItems.map(item => (
            <ProductShowWrapper
              key={item.asin}
              name={item.name}
              asin={item.asin}
              price={item.price}
              img={item.image}
            />
          ))}
      </SubWrapper>
      <SubWrapper title="환율">
        {rate && <ExchangeRateInput rate={rate} />}
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
            {`${date} ${time} ${provider}`}
          </span>
        )}
      </SubWrapper>
    </div>
  );
};

export default Home;
