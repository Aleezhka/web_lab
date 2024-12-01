import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

export const StyledText = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
  grid-auto-rows: minmax(250px, auto);
  justify-items: center;
  padding: 10px;
`;

export const ViewMoreButton = styled.button`
  display: block;
  margin: 30px auto;
  padding: 12px 25px;
  background-color: #1d7a8c;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #155d5a;  
    transform: translateY(-2px); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgba(29, 122, 140, 0.4);
  }
`;
