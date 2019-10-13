import React from 'react';

const CategoryTag = ({ text = '카테고리' }) => {
  return <span className="categoryTag">{text}</span>;
};

export default CategoryTag;
