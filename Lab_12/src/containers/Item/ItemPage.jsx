import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import { ItemWrapper, ItemDetails } from './ItemPage.styled';
import Loader from '../../components/Loader/Loader';

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`http://localhost:5000/api/shoes/${id}`)
      .then(response => {
        setItem(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching item. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!item) return <p>Item not found</p>;

  const handleAddToCart = () => {
    const uniqueItem = { ...item, cartId: `${item.id}-${Date.now()}` };
    dispatch(addToCart(uniqueItem));
  };
  
  
  
  return (
    <ItemWrapper>
      <h1>{item.name}</h1>
      <ItemDetails>
        <p>Price: ${item.price}</p>
        <p>Size: {item.size}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </ItemDetails>
    </ItemWrapper>
  );
};

export default ItemPage;
