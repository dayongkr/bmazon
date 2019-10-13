import React from 'react';

const NoticeBar = ({ text = '공지사항', href = '/' }) => {
  return (
    <div className="noticeBar">
      <a href={href}>{text}</a>
    </div>
  );
};

export default NoticeBar;
