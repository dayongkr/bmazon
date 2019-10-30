import React from 'react';

import { ButtonInputWrapper } from '../../styled-components/register';

const ButtonInput = ({
  bgColor = '#5e3eda',
  fontColor = 'white',
  children,
}) => {
  return (
    <ButtonInputWrapper
      value={children}
      bgColor={bgColor}
      fontColor={fontColor}
      type="submit"
    />
  );
};

export default ButtonInput;
