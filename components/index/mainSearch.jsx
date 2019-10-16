import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import SearchWrapper from '../../styled-components/index/searchWrapper';

const MainSearch = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const onChangeUrl = useCallback(e => {
    setValue(e.target.value);
  });

  const onClickSearch = useCallback(
    e => {
      e.preventDefault();
      router.push(`/product/${value.match(/\/dp\/(\w+)/)[1]}`);
    },
    [value],
  );

  return (
    <SearchWrapper>
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
            src="/static/images/search-24px.svg"
            width="25"
            alt="검색버튼"
            onClick={onClickSearch}
          ></img>
        </form>
      </div>
    </SearchWrapper>
  );
};

export default MainSearch;
