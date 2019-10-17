import styled from 'styled-components';

export const MainNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  padding: 20px;
  top: 40px;
  z-index: 100;
  background-color: white;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

export const SearchStyled = styled.div`
  position: relative;
  height: 40px;
  & #mainSearchWrapper {
    height: 40px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  & #searchButton {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
  }

  & #mainSearch {
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 0 45px 0 10px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: none;
    outline: none;
    color: #333;
  }

  &#mainSearch::placeholder {
    opacity: 0.5;
  }
`;

export const ProductListWrapper = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: ${props => props.navHeight}px;
  display: flex;
  flex-direction: raw;
  flex-wrap: wrap;
  justify-content: space-between;
`;
