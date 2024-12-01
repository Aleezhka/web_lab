import styled from 'styled-components';

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 30px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 30px auto;
`;

export const ItemDetails = styled.div`
    margin-top: 20px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;

    p {
        margin: 10px 0;
    }

    p:first-child {
        font-weight: bold;
        font-size: 1.2rem;
    }

    p:last-child {
        font-size: 1.2rem;
        color: #e74c3c;
    }
`;
