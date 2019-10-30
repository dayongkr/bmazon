import React from 'react';

import { InputWrapper } from '../../styled-components/register';

const SubmitInput = ({
  error,
  onChange,
  value,
  name,
  placeholder,
  type = 'text',
  autoComplete = 'off',
}) => {
  return (
    <InputWrapper error={error}>
      <label>{name}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        required
        autoComplete={autoComplete}
      />
      {error && <p className="error">{error}</p>}
    </InputWrapper>
  );
};

export default SubmitInput;
