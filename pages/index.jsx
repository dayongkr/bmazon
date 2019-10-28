import React from 'react';
import { useSelector } from 'react-redux';

import NoticeBar from '../components/index/noticeBar';
import SubWrapper from '../components/index/subWrapper';
import ExchangeRateInput from '../components/index/exchangeRateInput';
import ProductShowWrapper from '../components/index/productShowWrapper';
import Slide from '../components/index/slide';

const Home = () => {
  const { rate, date, time, provider } = useSelector(state => state.exchange);
  const dummy = [
    {
      name:
        'Over Ear Headphone, Wired Premium Stereo Sound Headsets with 50mm Driver, Foldable Comfortable Headphones with Protein Earmuffs and Shareport for Recording Monitoring Podcast PC TV- with Mic (Silver)',
      asin: 'B07G74V1YP',
      price: 39.99,
      img:
        'https://images-na.ssl-images-amazon.com/images/I/410eGsXZhPL._AC_SY400_.jpg',
    },
    {
      name:
        'Over Ear Headphone, Wired Premium Stereo Sound Headsets with 50mm Driver, Foldable Comfortable Headphones with Protein Earmuffs and Shareport for Recording Monitoring Podcast PC TV- with Mic (Silver)',
      asin: 'B07G74V1YP',
      price: 39.99,
      img:
        'https://images-na.ssl-images-amazon.com/images/I/410eGsXZhPL._AC_SY400_.jpg',
    },
    {
      name:
        'Over Ear Headphone, Wired Premium Stereo Sound Headsets with 50mm Driver, Foldable Comfortable Headphones with Protein Earmuffs and Shareport for Recording Monitoring Podcast PC TV- with Mic (Silver)',
      asin: 'B07G74V1YP',
      price: 39.99,
      img:
        'https://images-na.ssl-images-amazon.com/images/I/410eGsXZhPL._AC_SY400_.jpg',
    },
    {
      name:
        'Over Ear Headphone, Wired Premium Stereo Sound Headsets with 50mm Driver, Foldable Comfortable Headphones with Protein Earmuffs and Shareport for Recording Monitoring Podcast PC TV- with Mic (Silver)',
      asin: 'B07G74V1YP',
      price: 39.99,
      img:
        'https://images-na.ssl-images-amazon.com/images/I/410eGsXZhPL._AC_SY400_.jpg',
    },
    {
      name:
        'Over Ear Headphone, Wired Premium Stereo Sound Headsets with 50mm Driver, Foldable Comfortable Headphones with Protein Earmuffs and Shareport for Recording Monitoring Podcast PC TV- with Mic (Silver)',
      asin: 'B07G74V1YP',
      price: 39.99,
      img:
        'https://images-na.ssl-images-amazon.com/images/I/410eGsXZhPL._AC_SY400_.jpg',
    },
  ];

  // useEffect(() => {}, []);

  return (
    <>
      <Slide />
      <NoticeBar text="2019년 12월 21일 서비스 점검이 있습니다." />
      <SubWrapper title="MD 추천상품">
        {dummy.map(item => (
          <ProductShowWrapper
            key={item.asin + Date.now()}
            name={item.name}
            asin={item.asin}
            price={item.price}
            img={item.img}
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
    </>
  );
};

export default Home;
