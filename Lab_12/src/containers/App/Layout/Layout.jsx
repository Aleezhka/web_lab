import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeader, IconsWrapper, SignOutButton } from './Layout.styled';
import { TwitterOutlined, SearchOutlined, ShoppingCartOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import Navigation from '../../Navigation/Navigation';

const Layout = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <StyledHeader>
      <h1>Shoe Shop</h1>
      <Navigation />
      <IconsWrapper>
        <TwitterOutlined />
        <FacebookOutlined />
        <InstagramOutlined />
        <SearchOutlined />
        <ShoppingCartOutlined />
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
      </IconsWrapper>
    </StyledHeader>
  );
};

export default Layout;
