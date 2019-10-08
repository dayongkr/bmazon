import React, { useRef } from 'react';
import NoticeList from './noticeList';

const Header = () => {
  const noticeRef = useRef();

  const onClickNotice = () => {
    if (noticeRef.current) {
      noticeRef.current.classList.toggle('active');
    }
  };

  return (
    <nav>
      <img
        id="menuButton"
        src="/static/images/menu-24px.svg"
        width="25"
        alt="메뉴버튼"
      ></img>
      <a href="/">
        <img
          id="logoImage"
          src="/static/images/logo.png"
          height="22"
          alt="로고이미지"
        ></img>
      </a>
      <div id="alarmButtonWrapper" onClick={onClickNotice}>
        <img
          id="alarmButton"
          src="/static/images/alarm-24px.svg"
          width="20"
          alt="알람버튼"
        ></img>
        <div id="alarmButtonCount">3</div>
      </div>
      <ul id="noticeListWrapper" ref={noticeRef}>
        <NoticeList text="$#@$님이 이다용님의 글에 댓글을 남겼습니다."></NoticeList>
        <NoticeList text="$#@$...를 장바구니에 담았습니다."></NoticeList>
        <NoticeList text="$#@$...를 장바구니에 담았습니다."></NoticeList>
      </ul>
    </nav>
  );
};

export default Header;
