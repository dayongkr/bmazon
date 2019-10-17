import React, { useRef, useEffect } from 'react';

import MainSearch from '../components/index/mainSearch';
import {
  MainNav,
  SearchStyled,
  ProductListWrapper,
} from '../styled-components/productList/productList';
import ProductItem from '../components/productList/productItem';

const ProductList = ({ value }) => {
  const navRef = useRef();

  useEffect(() => {}, []);
  return (
    <>
      <MainNav ref={navRef}>
        <SearchStyled>
          <MainSearch
            iconColor="gray"
            defaultValue={value.replace(/\+/g, ' ')}
          ></MainSearch>
        </SearchStyled>
      </MainNav>
      <ProductListWrapper
        navHeight={(navRef.current ? navRef.current.clientHeight : 80) + 40}
      >
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </ProductListWrapper>
    </>
  );
};

ProductList.getInitialProps = async context => {
  return { value: context.query.value };
};

export default ProductList;
