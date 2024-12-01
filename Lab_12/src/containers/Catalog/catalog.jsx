import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from '../../components/CardItem/CardItem';
import { CatalogWrapper, SearchInput, FilterSelect, ProductGrid } from './Catalog.styled';
import Loader from '../../components/Loader/Loader';

const Catalog = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/shoes', {
                    params: { size: filter, search }
                });
                setItems(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchItems();
    }, [filter, search]);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <CatalogWrapper>
            <SearchInput 
                placeholder="Search..." 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <FilterSelect onChange={(e) => setFilter(e.target.value)}>
                <option value="">All Sizes</option>
                <option value="40">Size 40</option>
                <option value="41">Size 41</option>
                <option value="42">Size 42</option>
                <option value="43">Size 43</option>
                <option value="44">Size 44</option>
            </FilterSelect>
            <ProductGrid>
                {items.map(item => (
                    <CardItem key={item._id} {...item} />
                ))}
            </ProductGrid>
        </CatalogWrapper>
    );
};

export default Catalog;
