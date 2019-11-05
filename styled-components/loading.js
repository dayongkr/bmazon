import styled, { keyframes } from 'styled-components';

export const MovingKeyframes = keyframes`
  0%{
    filter:brightness(1);
  }
  100%{
    filter:brightness(0.9);
  }
`;

export const LoadingBar = styled.div`
  background-color: #eee;
  border-radius: 5px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '16px'};
  margin: 10px 0;
  animation-name: ${MovingKeyframes};
  animation-duration: 1s;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
