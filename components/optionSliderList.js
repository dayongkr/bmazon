import React, { useCallback } from 'react';

const OptionSliderList = ({ img, option, selected }) => {
  const onClickOption = useCallback(() => {
    window.location.assign(`/product?asin=${option.asin}`);
  });
  if (selected) {
    return (
      <li className="selected" onClick={onClickOption}>
        <div className="dimmedSelected"></div>
        <img src={img} alt="옵션1이미지" height="130"></img>
        <p className="optionName">{option.color}</p>
      </li>
    );
  }
  return (
    <li onClick={onClickOption}>
      <img src={img} alt="옵션1이미지" height="130"></img>
      <p className="optionName">{option.color}</p>
    </li>
  );
};
export default OptionSliderList;
