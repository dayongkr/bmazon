import styled from 'styled-components';

export const ProductOptions = styled.div`
  margin-top: 15px;
  height: 75px;
  border-radius: 5px;
  padding: 15px 5px 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & .optionName {
    color: #666;
  }

  & .option {
    font-weight: bold;
    margin-top: 10px;
  }

  & .productOptionImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .optionImage {
    height: 50px;
  }
`;
