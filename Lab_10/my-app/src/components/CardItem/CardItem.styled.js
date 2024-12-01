import styled from 'styled-components';

export const CardItemWrapper = styled.div`
  width: 100%;
  max-width: 240px; 
  padding: 20px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 15px;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px; 

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
  word-wrap: break-word;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  word-wrap: break-word;
`;

export const CardPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1d7a8c;
  margin-bottom: 10px;
`;

export const CardSize = styled.p`
  font-size: 1rem;
  color: #555;
  font-style: italic;
  margin-bottom: 15px;
`;

export const Button = styled.button`
   padding: 8px 15px;
  background-color: #1d7a8c;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #155e66;
  }

  &:focus {
    outline: none;
  }
`;

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); 
  gap: 20px;
  padding: 20px;
  justify-items: center;
  margin: 0 auto;
  max-width: 1200px; 
`;
