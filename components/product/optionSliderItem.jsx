import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const OptionSliderItem = ({
  options,
  selected,
  sliderIndex,
  optionIndex,
  optionSelect,
  setOptionSelect,
}) => {
  const router = useRouter();
  const liRef = useRef();

  const checkAvailableOption = (optionSelect, options) => {
    if (optionSelect.length === 1) {
      // 옵션 종류가 한개일때
      if (options.option.some(item => item.list[0] == optionIndex)) {
        // 해당 옵션이 존재하면
        liRef.current.classList.remove('none');
      } else {
        liRef.current.classList.add('none');
      }
    } else {
      // 그 이상일때
      const checkOption = [...optionSelect].map((item, index) =>
        index == sliderIndex ? optionIndex + '' : item,
      ); //

      if (
        options.option.filter(item =>
          item.list.every((item, index) => item == checkOption[index]),
        ).length === 0 // 가상으로 선택한 옵션들의 조합이 선택이 불가능하다면
      ) {
        liRef.current.classList.add('none');
      } else {
        liRef.current.classList.remove('none');
      }
    }
  };

  const findAvailableOption = options => {
    return options.option
      .filter(item => item.list[sliderIndex] == optionIndex)
      .sort(
        (x, y) =>
          x.list.reduce((x, y) => x + y) - y.list.reduce((x, y) => x + y),
      )[0];
  };

  useEffect(() => {
    if (liRef.current && optionSelect.length !== 0 && options) {
      if (selected) {
        // 선택 확인
        liRef.current.classList.add('selected');
      } else {
        liRef.current.classList.remove('selected');
      }
      checkAvailableOption(optionSelect, options);
    }
  }, [optionSelect, options]);

  const onClickOption = useCallback(() => {
    const selectedOption = optionSelect.map((item, index) => {
      if (index === sliderIndex) {
        return optionIndex + '';
      } else {
        return item;
      }
    });

    if (liRef.current) {
      if (liRef.current.classList.contains('none')) {
        // 가능한 옵션 찾기
        setOptionSelect(findAvailableOption(options).list);
      } else if (sliderIndex + 1 === options.listName.length) {
        setOptionSelect(selectedOption);
        const optionAsin = options.option.filter(item =>
          item.list.every(
            (item, sliderIndex) => item === selectedOption[sliderIndex],
          ),
        )[0].asin;
        router.push(`/product/${optionAsin}`);
      } else {
        setOptionSelect(selectedOption);
      }
    }
  }, [optionSelect]);

  return (
    <li ref={liRef} onClick={onClickOption}>
      <p className="optionName">
        {options.listValue[options.listName[sliderIndex]][optionIndex]}
      </p>
    </li>
  );
};
export default OptionSliderItem;
