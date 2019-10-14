import React from 'react';

import OptionSliderItem from './optionSliderItem';

const OptionSliderList = ({
  sliderIndex,
  options,
  sliderItem,
  asin,
  optionSelect,
  setOptionSelect,
}) => {
  const selectOptionTitle =
    options.listValue[sliderItem][
      options.option.filter(sliderItem => sliderItem.asin === asin)[0].list[
        sliderIndex
      ]
    ];

  let title = sliderItem.replace(/_|name/g, ' ').split('');
  title[0] = title[0].toUpperCase();
  title = title.join('').trim();

  return (
    <>
      <p className="optionTitle">
        <span className="title">{title}:</span>
        {` ${selectOptionTitle}`}
      </p>
      <ul className="optionSlider">
        {options &&
          options.listValue[sliderItem].map((item, optionIndex) => {
            return (
              <OptionSliderItem
                key={item}
                options={options}
                sliderIndex={sliderIndex}
                optionIndex={optionIndex}
                selected={optionSelect[sliderIndex] == optionIndex}
                optionSelect={optionSelect}
                setOptionSelect={setOptionSelect}
              ></OptionSliderItem>
            );
          })}
      </ul>
    </>
  );
};

export default OptionSliderList;
