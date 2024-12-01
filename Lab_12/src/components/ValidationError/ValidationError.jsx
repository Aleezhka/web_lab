import React from 'react';
import { ErrorWrapper } from './ValidationError.styled';

const ValidationError = ({ children }) => {
  return <ErrorWrapper>{children}</ErrorWrapper>;
};

export default ValidationError;
