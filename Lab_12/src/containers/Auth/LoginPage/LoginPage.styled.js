// src/containers/Auth/AuthForm.styled.js
import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  background-color: #f0f0f0;

  h2 {
    font-size: 2rem;
    color: #333;
  }
`;

export const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const StyledButton = styled.button`
  width: 320px;
  padding: 10px;
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
