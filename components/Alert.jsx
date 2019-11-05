import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: 500px;
  top: 0;
  left: 0;
  z-index: 9999;
  opacity: 0;
  transform: translateX(calc(50vw - 50%));
  transition: transform 0.4s, opacity 0.4s;

  &.active {
    transform: translateY(20px) translateX(calc(50vw - 50%));
    opacity: 1;
  }

  & span {
    display: flex;
    max-width: 500px;
    height: 30px;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 500px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    text-align: center;
  }

  & img {
    width: 20px;
    margin-right: 5px;
    background-color: white;
    border-radius: 100px;
  }
`;

const Alert = ({ text = '복사하였습니다', className }) => {
  const { status } = useSelector(state => state.alert);
  return (
    <AlertWrapper className={className}>
      <span>
        {status ? (
          <img src="/static/images/check_circle-24px.svg" alt="성공메시지" />
        ) : (
          <img src="/static/images/error-24px.svg" alt="에러메시지" />
        )}

        {text}
      </span>
    </AlertWrapper>
  );
};

export default Alert;
