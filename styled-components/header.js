import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: white;
  height: 60px;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.03);
  & > #logoDummy {
    width: 40px;
    height: 28px;
    border-radius: 12px;
    background-color: #333;
  }

  & .profileDummy {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #5e3eda;
    line-height: 40px;
    color: white;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin: 0 15px;
  height: 40px;
  width: calc(100% - 110px);
  & > #mainSearchWrapper {
    height: 40px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  & #searchButton {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    width: 18px;
  }

  & #mainSearch {
    background-color: white;
    border-radius: 5px;
    padding: 0 36px 0 10px;
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: none;
    outline: none;
  }

  & #mainSearch::placeholder {
    opacity: 0.8;
    font-size: 12px;
  }
`;

export const ProfileNav = styled.div`
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 60px;
  background-color: white;
  right: 10px;
  display: ${props => props.display};
  font-size: 14px;

  & .profileDummy {
    width: 35px;
    height: 35px;
    font-size: 13px;
    line-height: 35px;
  }

  & .mainWrap {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
  }

  & .textWrap {
    margin-left: 10px;
    line-height: 17px;
  }

  & .myPage {
    font-size: 13px;
    color: #5e3eda;
  }

  & .subWrap {
    padding: 15px 0;
    line-height: 20px;
    border-bottom: 1px solid #eee;
  }

  & .logout {
    margin: 15px 0 0;
    font-size: 13px;
    color: #666;
  }

  & .link {
    cursor: pointer;
  }
`;
