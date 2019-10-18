import React, { useRef, useEffect } from 'react';

import MainSearch from '../components/index/mainSearch';
import {
  MainNav,
  SearchStyled,
  ProductListWrapper,
} from '../styled-components/productList/productList';
import ProductItem from '../components/productList/productItem';
import { useDispatch, useSelector } from 'react-redux';

import { PRODUCT_LIST_REQUEST } from '../reducers/productList';

const ProductList = ({ value }) => {
  const navRef = useRef();
  const { items } = useSelector(state => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
      data: { value: encodeURIComponent(value) },
    });
  }, []);
  return (
    <>
      <MainNav ref={navRef}>
        <SearchStyled>
          <MainSearch iconColor="gray" defaultValue={value}></MainSearch>
        </SearchStyled>
      </MainNav>
      <ProductListWrapper
        navHeight={(navRef.current ? navRef.current.clientHeight : 80) + 40}
      >
        {items &&
          items.map(item => (
            <ProductItem
              key={item.title + item.index}
              title={item.title}
              src={item.src}
              star={item.star}
              reviewers={item.reviewers}
              price={item.price}
              asin={item.asin}
            ></ProductItem>
          ))}
        {items && items.length === 0 && `"${value}"는 존재하지 않습니다.`}
      </ProductListWrapper>
    </>
  );
};

ProductList.getInitialProps = async context => {
  return { value: context.query.value };
};

export default ProductList;
