import React, { useState, useCallback } from 'react';

const MainSearch = () => {
  const [value, setValue] = useState('');

  const onChangeUrl = useCallback(e => {
    setValue(e.target.value);
  });

  const onClickSearch = useCallback(
    e => {
      e.preventDefault();
      window.location.assign(`/product?asin=${value.match(/\/dp\/(\w+)/)[1]}`);
    },
    [value],
  );

  return (
    <div id="searchWrapper">
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
    </div>
  );
};

export default MainSearch;
