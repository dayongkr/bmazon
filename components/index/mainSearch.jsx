import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

const MainSearch = ({ defaultValue = '', iconColor = 'default' }) => {
  const [value, setValue] = useState(defaultValue);
  const router = useRouter();

  const onChangeUrl = useCallback(e => {
    setValue(e.target.value);
  });

  const onClickSearch = useCallback(
    e => {
      e.preventDefault();
      if (value.match(/B\w{9}(?=\b)/)) {
        router.push(`/product/${value.match(/B\w{9}(?=\b)/)[0]}`);
      } else if (!value.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) && value) {
        router.push(`/productList/${encodeURIComponent(value)}`);
      } else {
        console.log('error');
      }
    },
    [value],
  );

  return (
    <div id="mainSearchWrapper">
      <form onSubmit={onClickSearch}>
        <input
          id="mainSearch"
          value={value}
          onChange={onChangeUrl}
          placeholder="링크 혹은 상품 이름을 입력해주세요"
        ></input>
        <img
          id="searchButton"
          src={
            '/static/images/' +
            `${
              iconColor === 'default'
                ? 'search-24px.svg'
                : 'search-24px-gray.svg'
            }`
          }
          width="30"
          alt="검색버튼"
          onClick={onClickSearch}
        ></img>
      </form>
    </div>
  );
};

export default MainSearch;
