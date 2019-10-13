import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { PRODUCT_OPTION_INFORMATION_REQUEST } from '../../reducers/product';

const OptionSliderList = ({ option, options, selected, index }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onClickOption = useCallback(() => {
    router.push(`/product/${option.asin}`);
  });

  useEffect(() => {
    dispatch({
      type: PRODUCT_OPTION_INFORMATION_REQUEST,
      data: {
        asin: option.asin,
        index: index,
      },
    });
  }, []);

  if (selected) {
    return (
      <li className="selected" onClick={onClickOption}>
        <div className="dimmedSelected"></div>
        {option.imageUrl && (
          <img src={option.imageUrl} alt="옵션1이미지" height="110px"></img>
        )}
        <p className="optionName">
          {options.listValue[options.listName[0]][option.list[0]]}
        </p>
      </li>
    );
  }
  return (
    <li onClick={onClickOption}>
      <div className="optionImageWrapper">
        {option.imageUrl && (
          <img src={option.imageUrl} alt="옵션1이미지" height="110px"></img>
        )}
      </div>
      <p className="optionName">
        {options.listValue[options.listName[1]][option.list[0]]}
      </p>
    </li>
  );
};
export default OptionSliderList;
