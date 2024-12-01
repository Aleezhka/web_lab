import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/shoes');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <ItemsContext.Provider value={{ items }}>
            {children}
        </ItemsContext.Provider>
    );
};

export const useItems = () => useContext(ItemsContext);
