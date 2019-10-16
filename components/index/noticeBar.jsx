import React from 'react';
import styled from 'styled-components';

const NoticeBarDiv = styled.div`
  background-color: #f07b3f;
  height: 30px;
  padding: 0 5px;

  & a {
    font-size: 12px;
    color: white;
    line-height: 30px;
    text-decoration: none;
  }
`;

const NoticeBar = ({ text = '공지사항', href = '/' }) => {
  return (
    <NoticeBarDiv>
      <a href={href}>{text}</a>
    </NoticeBarDiv>
  );
};

export default NoticeBar;
