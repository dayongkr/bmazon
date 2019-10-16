import React, { useRef } from 'react';

const NoticeList = ({ text }) => {
  const noticeImageRef = useRef();

  const onClickNoticeImage = () => {
    if (noticeImageRef.current) {
      noticeImageRef.current.parentNode.parentNode.classList.remove('active');
    }
  };
  return (
    <li onClick={onClickNoticeImage}>
      <div className="noticeImage" ref={noticeImageRef}></div>
      {text}
    </li>
  );
};

export default NoticeList;
