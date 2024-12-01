import React from 'react';
import { Link } from 'react-router-dom';
import { CardItemWrapper, CardTitle, CardPrice, CardSize, Button } from './CardItem.styled';

const CardItem = ({ _id, name, price, size }) => (
    <CardItemWrapper>
        <CardTitle>{name}</CardTitle>
        <CardPrice>${price}</CardPrice>
        <CardSize>Size: {size}</CardSize>
        <Link to={`/item/${_id}`}><Button>View More</Button></Link>
    </CardItemWrapper>
);

export default CardItem;
