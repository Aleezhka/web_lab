import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    font-size: 1.5rem;
  }
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 50px;
  background-color: #ccc;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledText = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;

export const IconBase = styled.div`
  font-size: 1.5rem;
  color: ${props => props.color || '#fff'};
`;

