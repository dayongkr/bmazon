import React from 'react';

const MainSearch = () => {
  return (
    <div id="searchWrapper">
      <div id="mainSearchWrapper">
        <input
          id="mainSearch"
          placeholder="링크 혹은 상품 이름을 입력해주세요"
        ></input>
        <img
          id="searchButton"
          src="/static/images/search-24px.svg"
          width="25"
          alt="검색버튼"
        ></img>
      </div>
    </div>
  );
};

export default MainSearch;
