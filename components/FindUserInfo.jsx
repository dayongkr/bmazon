import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FindWrapper = styled.div`
  width: 80%;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  & h2 {
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }

  & input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 0 10px;
    color: #666;
  }

  & input + input {
    margin-top: 5px;
  }
`;

const FindUserInfo = ({ children }) => {
  return (
    <Background>
      <FindWrapper>{children}</FindWrapper>
    </Background>
  );
};

export default FindUserInfo;
