import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5rem;
  color: #fff;

  & > * {
    cursor: pointer;
  }
`;

export const SignOutButton = styled.button`
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: #d9363e;
  }
`;
