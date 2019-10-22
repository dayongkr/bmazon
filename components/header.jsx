import React, { useRef, useState, useCallback } from 'react';
import NoticeList from './noticeList';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #5e3eda;
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 15px;

  & > #logoImage {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

const AlarmButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;

  & > #alarmButtonCount {
    width: 15px;
    height: 15px;
    background-color: #cc2b2b;
    border-radius: 15px;
    font-size: 11px;
    color: white;
    text-align: center;
    line-height: 14px;
    position: absolute;
    top: -4px;
    left: 12px;
  }
`;

const NoticeListWrapper = styled.ul`
  display: ${props => props.display};
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  height: 150px;
  overflow-y: auto;
  background-color: white;
  border-radius: 5px 0 5px 5px;
  font-size: 12px;
  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.1);

  & li {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 10px;
    border-bottom: 1px solid#eee;
    cursor: pointer;
  }

  & .noticeImage {
    background-color: #eee;
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;

const Header = () => {
  const [noticeState, setNoticeState] = useState('none');

  const onClickNotice = useCallback(() => {
    switch (noticeState) {
      case 'block':
        setNoticeState('none');
        break;
      case 'none':
        setNoticeState('block');
        break;
    }
  }, [noticeState]);

  return (
    <Nav>
      <img
        id="menuButton"
        src="/static/images/menu-24px.svg"
        width="25"
        alt="메뉴버튼"
      ></img>
      <Link href="/" prefetch={false}>
        <img
          id="logoImage"
          src="/static/images/logo.png"
          height="22"
          alt="로고이미지"
        ></img>
      </Link>
      <AlarmButtonWrapper onClick={onClickNotice}>
        <img
          id="alarmButton"
          src="/static/images/alarm-24px.svg"
          width="20"
          alt="알람버튼"
        ></img>
        <div id="alarmButtonCount">3</div>
      </AlarmButtonWrapper>
      <NoticeListWrapper display={noticeState}>
        <NoticeList text="$#@$님이 이다용님의 글에 댓글을 남겼습니다."></NoticeList>
        <NoticeList text="$#@$...를 장바구니에 담았습니다."></NoticeList>
        <NoticeList text="$#@$...를 장바구니에 담았습니다."></NoticeList>
      </NoticeListWrapper>
    </Nav>
  );
};

export default Header;
