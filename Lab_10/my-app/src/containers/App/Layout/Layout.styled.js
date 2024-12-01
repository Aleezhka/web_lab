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
