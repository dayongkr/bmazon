import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderStyled = styled.div`
  & button.slick-arrow {
    display: none !important;
  }

  & ul.slick-dots {
    bottom: 10px;
    left: 10px;
    text-align: left;
  }

  & .slick-dots li button:focus:before {
    opacity: 0.25;
  }

  & .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`;

const Slide = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <>
      <SliderStyled>
        <Slider {...sliderSettings}>
          <div>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '40px',
                color: 'white',
                textAlign: 'center',
                lineHeight: '300px',
                width: '100%',
                height: '300px',
                backgroundColor: '#333',
              }}
            >
              슬라이드1
            </div>
          </div>
          <div>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '40px',
                color: 'white',
                textAlign: 'center',
                lineHeight: '300px',
                width: '100%',
                height: '300px',
                backgroundColor: '#333',
              }}
            >
              슬라이드2
            </div>
          </div>
          <div>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '40px',
                color: 'white',
                textAlign: 'center',
                lineHeight: '300px',
                width: '100%',
                height: '300px',
                backgroundColor: '#333',
              }}
            >
              슬라이드3
            </div>
          </div>
        </Slider>
      </SliderStyled>
    </>
  );
};

export default Slide;
