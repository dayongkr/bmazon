import styled from 'styled-components';

const SearchWrapper = styled.div`
  background-color: #5e3eda;
  height: 150px;
  position: relative;

  & #mainSearchWrapper {
    height: 40px;
    width: 90%;
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
    background-color: white;
    border-radius: 5px;
    padding: 0 45px 0 10px;
    width: 100%;
    height: 40px;
    font-size: 12px;
    border: none;
    outline: none;
  }

  &#mainSearch::placeholder {
    opacity: 0.5;
  }
`;

export default SearchWrapper;
