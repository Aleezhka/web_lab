import React from 'react';
import { StyledHeader, IconsWrapper } from './Layout.styled';
import { TwitterOutlined, SearchOutlined, ShoppingCartOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import Navigation from '../../Navigation/Navigation';

const Layout = () => (
  <StyledHeader>
    <h1>Shoe Shop</h1>
    <Navigation />
    <IconsWrapper>
      <TwitterOutlined />
      <FacebookOutlined />
      <InstagramOutlined />
      <SearchOutlined />
      <ShoppingCartOutlined />
    </IconsWrapper>
  </StyledHeader>
);

export default Layout;
