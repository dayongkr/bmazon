import React from 'react';

const OptionsWrapper = ({
  options,
  click,
  img,
  index,
  selectedAsin,
  listType,
}) => {
  const { option, listName, listValue } = options;
  const title = listName[index] // 옵션 타이틀 지정
    .replace(/_|name/g, ' ')
    .split('')
    .map((item, index) => (index === 0 ? item.toUpperCase() : item))
    .join('')
    .trim();

  return (
    <div className="productOptionsWrapper" onClick={click}>
      <div className="productOptions">
        <div className="productOptionText">
          <p className="optionName">{title}</p>
          <p className="option">
            {
              // 선택된 옵션 이름 찾기
              listValue[listType][
                option.filter(item => item.asin === selectedAsin)[0].list[index]
              ]
            }
          </p>
        </div>
        <div className="productOptionImage">
          {listType === 'color_name' && (
            <img className="optionImage" src={img} alt="옵션이미지"></img>
          )}
          <img
            width="30px"
            src="/static/images/keyboard_arrow_right-24px.svg"
            alt="none"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default OptionsWrapper;
