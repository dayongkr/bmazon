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
  // const title = listName[index].match(/\w*(?=_name)/)[0].split('');
  let title = listName[index].replace(/_|name/g, ' ').split('');
  title[0] = title[0].toUpperCase();
  title = title.join('').trim();

  return (
    <div className="productOptionsWrapper" onClick={click}>
      <div className="productOptions">
        <div className="productOptionText">
          <p className="optionName">{title}</p>
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
