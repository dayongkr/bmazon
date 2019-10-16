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

  useEffect(() => {
    if (liRef.current) {
      if (selected) {
        liRef.current.classList.add('selected');
      } else {
        liRef.current.classList.remove('selected');
      }
      if (optionSelect.length === 1) {
        if (
          !options.option.some(item => item.list[sliderIndex] == optionIndex)
        ) {
          liRef.current.classList.add('none');
        } else {
          liRef.current.classList.remove('none');
        }
      } else {
        if (sliderIndex + 1 === optionSelect.length) {
          if (
            !options.option
              .filter(item => item.list[0] === optionSelect[0])
              .some(item => item.list[sliderIndex] == optionIndex)
          ) {
            liRef.current.classList.add('none');
          } else {
            liRef.current.classList.remove('none');
          }
        } else {
          if (
            !options.option
              .filter(
                item =>
                  item.list[sliderIndex + 1] === optionSelect[sliderIndex + 1],
              )
              .some(item => item.list[sliderIndex] == optionIndex)
          ) {
            liRef.current.classList.add('none');
          } else {
            liRef.current.classList.remove('none');
          }
        }
      }
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
        const availableOption = options.option
          .filter(item => item.list[sliderIndex] == optionIndex)
          .sort(
            (x, y) =>
              x.list.reduce((x, y) => x + y) - y.list.reduce((x, y) => x + y),
          )[0];
        setOptionSelect([...availableOption.list]);
      } else {
        if (sliderIndex + 1 === options.listName.length) {
          setOptionSelect([...selectedOption]);
          const optionAsin = options.option.filter(item =>
            item.list.every(
              (item, sliderIndex) => item === selectedOption[sliderIndex],
            ),
          )[0].asin;
          router.push(`/product/${optionAsin}`);
        } else {
          setOptionSelect([...selectedOption]);
        }
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
