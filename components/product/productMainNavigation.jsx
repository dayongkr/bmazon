import React, { useRef, useEffect, useState, useCallback } from 'react';

import {
  ProductMainNavigationStyled,
  ProductMainNavigationWrapper,
} from '../../styled-components/product/product';

const ProductMainNavigation = ({ mainInfoEl }) => {
  const navRef = useRef();
  const [activeEl, setActiveEl] = useState({ now: 0, prev: 0 });

  const onClickList = useCallback(
    e => {
      window.scrollTo(
        0,
        mainInfoEl.current.children[+e.currentTarget.dataset['index']]
          .offsetTop - 50,
      );
      setActiveEl(prevState => ({
        now: +e.currentTarget.dataset['index'],
        prev: prevState.now,
      }));
    },
    [activeEl, mainInfoEl],
  );

  const onScroll = useCallback(
    e => {
      const offsetTopArr = Array.from(mainInfoEl.current.children).map(
        item => item.offsetTop,
      );
      const offsetHeightArr = Array.from(mainInfoEl.current.children).map(
        item => item.offsetHeight,
      );
      if (
        window.pageYOffset > offsetTopArr[0] &&
        window.pageYOffset + 50 < offsetTopArr[activeEl.now]
      ) {
        setActiveEl({
          now: activeEl.now === 0 ? 0 : activeEl.now - 1,
          prev: activeEl.now,
        });
      } else if (
        window.pageYOffset <
          offsetTopArr[offsetTopArr.length - 1] +
            offsetHeightArr[offsetHeightArr.length - 1] &&
        window.pageYOffset + 50 >
          offsetTopArr[activeEl.now] + offsetHeightArr[activeEl.now]
      ) {
        setActiveEl({ now: activeEl.now + 1, prev: activeEl.now });
      }
    },
    [activeEl, mainInfoEl],
  );

  useEffect(() => {
    if (navRef.current) {
      navRef.current.children[activeEl.prev].classList.remove('active');
      navRef.current.children[activeEl.now].classList.add('active');
      navRef.current.children[activeEl.now].focus({ preventScroll: false });
    }
  }, [activeEl]);

  useEffect(() => {
    // 이벤트 리스너
    if (navRef.current) {
      for (let i = 0; i < navRef.current.children.length; i += 1) {
        navRef.current.children[i].addEventListener('click', onClickList);
      }
      window.addEventListener('scroll', onScroll);
    }
    return () => {
      for (let i = 0; i < navRef.current.children.length; i += 1) {
        navRef.current.children[i].removeEventListener('click', onClickList);
      }
      window.removeEventListener('scroll', onScroll);
    };
  }, [navRef, activeEl, mainInfoEl]);

  return (
    <ProductMainNavigationWrapper>
      <ProductMainNavigationStyled ref={navRef}>
        <li className="active" data-index={0}>
          상품소개
        </li>
        <li data-index={1}>해외리뷰</li>
        <li data-index={2}>국내리뷰</li>
        <li data-index={3}>커뮤니티</li>
        <li data-index={4}>국내 최저가 비교</li>
        <li data-index={5}>구매대행 정책</li>
      </ProductMainNavigationStyled>
    </ProductMainNavigationWrapper>
  );
};

export default ProductMainNavigation;
