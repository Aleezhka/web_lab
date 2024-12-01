import React, { useState } from 'react';
import { useItems } from '../../components/context/ItemsContext';
import CardItem from '../../components/CardItem/CardItem';
import { SectionWrapper, StyledText, ProductGrid, ViewMoreButton } from './Home.styled';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const { items, loading} = useItems();
    const [viewMore, setViewMore] = useState(false);

    if (loading) return <Loader />;

    const visibleItems = viewMore ? items : items.slice(0, 5);

    return (
        <SectionWrapper>
            <StyledText>
                <h1>Explore Our Shoe Collection</h1>
                <p>Find the best shoes for every occasion.</p>
            </StyledText>
            <ProductGrid>
                {visibleItems.map(item => (
                    <CardItem key={item._id} {...item} />
                ))}
            </ProductGrid>
            <ViewMoreButton onClick={() => setViewMore(!viewMore)}>
                {viewMore ? 'Show Less' : 'View More'}
            </ViewMoreButton>
        </SectionWrapper>
        
    );
};

export default Home;
