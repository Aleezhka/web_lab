import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 350px;
  font-size: 1rem;
  transition: border 0.3s;

  &:focus {
    border-color: #1d7a8c;
    outline: none;
  }
`;

export const FilterSelect = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 350px;
  font-size: 1rem;
  transition: border 0.3s;

  &:focus {
    border-color: #1d7a8c;
    outline: none;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 10px;
  margin-top: 20px;
`;
