import React from 'react';

const SubWrapper = ({ title = '제목', children }) => {
  return (
    <div className="subWrapper">
      <p className="title">{title}</p>
      <div className="content">{children}</div>
    </div>
  );
};

export default SubWrapper;
