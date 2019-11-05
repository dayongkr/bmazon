import React from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: 500px;
  top: 0;
  left: 50%;
  z-index: 9999;
  transform: translateX(-50%);
  opacity: 0;
  transition: transform 0.4s, opacity 0.4s;

  &.active {
    transform: translateY(20px) translateX(-50%);
    opacity: 1;
  }

  & span {
    display: flex;
    max-width: 500px;
    height: 30px;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    text-align: center;
  }
`;

const Alert = ({ text = '복사하였습니다', className }) => {
  return (
    <AlertWrapper className={className}>
      <span>{text}</span>
    </AlertWrapper>
  );
};

export default Alert;
