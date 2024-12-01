import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  padding: 20px;
`;

export const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: bold;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
