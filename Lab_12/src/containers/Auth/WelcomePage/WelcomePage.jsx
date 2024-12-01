// src/containers/Auth/WelcomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledWrapper, StyledButton } from './WelcomePage.styled';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <h1>Welcome to Shoe Shop</h1>
      <p>Please log in or register to continue.</p>
      <div>
        <StyledButton onClick={() => navigate('/login')}>Log In</StyledButton>
        <StyledButton onClick={() => navigate('/register')}>Register</StyledButton>
      </div>
    </StyledWrapper>
  );
};

export default WelcomePage;
