import React from 'react';
import styled from 'styled-components';

const SubWrapperStyled = styled.div`
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 20px 20px;
  background-color: white;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  & > .title {
    border-bottom: 1px solid #eee;
    padding: 15px 0;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const SubWrapper = ({ title = '제목', children }) => {
  return (
    <SubWrapperStyled>
      <p className="title">{title}</p>
      <div className="content">{children}</div>
    </SubWrapperStyled>
  );
};

export default SubWrapper;
