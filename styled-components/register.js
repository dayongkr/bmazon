import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  padding: 0 20px;
  background-color: white;

  & h1 {
    font-size: 30px;
    padding: 60px 0;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;

  & * {
    display: block;
  }

  & label {
    font-size: 14px;
    margin-bottom: 10px;
  }

  & input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: ${props => (props.error ? '1px solid #cc2b2b' : '1px solid #ddd')};
    padding: 20px;
    font-size: 16px;
    color: #333;
    outline: none;
  }

  & .error {
    margin-top: 10px;
    font-size: 14px;
    color: #cc2b2b;
  }
`;

export const ButtonInputWrapper = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
  font-size: 18px;
  font-weight: bold;
`;
