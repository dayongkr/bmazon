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
  return (
    <div className="productOptionsWrapper" onClick={click}>
      <div className="productOptions">
        <div className="productOptionText">
          <p className="optionName">{listName[index].match(/\w*(?=_name)/)}</p>
          <p className="option">
            {
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
