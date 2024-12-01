// src/containers/Auth/WelcomePage.styled.js
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
  gap: 20px;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

export const StyledButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
