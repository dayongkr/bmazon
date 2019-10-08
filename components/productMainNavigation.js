import React, { useRef, useEffect } from 'react';

const ProductMainNavigation = () => {
  const navRef = useRef();

  const onClickList = e => {
    for (let i = 0; i < navRef.current.children.length; i += 1) {
      if (navRef.current.children[i].classList.contains('active')) {
        navRef.current.children[i].classList.remove('active');
        break;
      }
    }
    e.target.classList.add('active');
  };

  useEffect(() => {
    if (navRef.current) {
      for (let i = 0; i < navRef.current.children.length; i += 1) {
        navRef.current.children[i].addEventListener('click', onClickList);
      }
    }
  }, [navRef]);

  return (
    <div id="productMainNavigationWrapper">
      <ul id="productMainNavigation" ref={navRef}>
        <li className="active">상품소개</li>
        <li>해외리뷰</li>
        <li>국내리뷰</li>
        <li>커뮤니티</li>
        <li>국내 최저가 비교</li>
        <li>구매대행 정책</li>
      </ul>
    </div>
  );
};

export default ProductMainNavigation;
