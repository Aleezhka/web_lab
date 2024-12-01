import React from 'react';
import { ButtonWrapper } from './PrimaryButton.styled';

const PrimaryButton = ({ onClick, children }) => (
    <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
);

export default PrimaryButton;
