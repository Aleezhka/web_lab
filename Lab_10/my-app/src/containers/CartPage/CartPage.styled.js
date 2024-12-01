import styled from 'styled-components';

export const CartWrapper = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

export const CartTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }
`;

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const CartDetails = styled.div`
  flex: 1;

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

export const CartButton = styled.button`
  padding: 8px 15px;
  background-color: #1d7a8c;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  margin: 0 5px;

  &:hover {
    background-color: #155d5a;  
    transform: translateY(-2px); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgba(29, 122, 140, 0.4);
  }
`;

export const TotalPrice = styled.div`
  text-align: center;
  margin-top: 30px;

  h3 {
    font-size: 1.8rem;
    color: #333;
  }
`;
