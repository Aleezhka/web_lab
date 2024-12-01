import React from 'react';
import { SelectWrapper } from './Select.styled';

const Select = ({ options, onChange }) => (
  <SelectWrapper onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </SelectWrapper>
);

export default Select;
